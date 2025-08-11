import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useEffect, useState } from "react";
import { Trash, Check, Edit, User, Clock, Calendar, FileText } from "lucide-react";
import { toast } from "sonner";
import EditTask from "./editTasks";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [user] = useAuthState(auth);

  const init = () => {
    if (!user) {
      setTasks([]);
      return;
    }

    const collectionRef = collection(db, "tasks");
    const q = query(collectionRef, where("createdBy", "==", user.uid));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((docSnap) => {
        data.push({ ...docSnap.data(), id: docSnap.id });
      });
      setTasks(data);
    });

    return unsubscribe;
  };

  const deleteTask = async (id) => {
    if (!user) {
      toast("Please login first");
      return;
    }
    try {
      await deleteDoc(doc(db, "tasks", id));
      toast("Task has been deleted");
    } catch (error) {
      toast(error?.message);
    }
  };

  const markCompleted = async (task) => {
    if (!user) {
      toast("Please login first");
      return;
    }
    try {
      const taskRef = doc(db, "tasks", task.id);
      await updateDoc(taskRef, {
        status: "Completed",
        completedAt: serverTimestamp(),
      });

      const today = new Date().toDateString();
      const completedRef = doc(db, "task-completed", `${user.uid}_${task.id}`);
      const completedSnap = await getDoc(completedRef);

      if (completedSnap.exists()) {
        const updatedLog = { ...completedSnap.data(), [today]: true };
        await setDoc(completedRef, updatedLog);
      } else {
        const newData = {
          taskName: task.taskName,
          description: task.description,
          deadline: task.deadline,
          status: "Completed",
          createdBy: user.uid,
          taskId: task.id,
          [today]: true,
        };
        await setDoc(completedRef, newData);
      }
      toast(`${task.taskName} marked as completed`);
    } catch (error) {
      toast("Error marking task: " + error.message);
    }
  };

  const handleEditClick = (task) => {
    setEditingTask(task);
    setIsEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditingTask(null);
    setIsEditModalOpen(false);
  };

  const formatDeadline = (deadline) => {
    if (!deadline) return "No deadline";
    const date = new Date(deadline);
    return date.toLocaleDateString();
  };

  useEffect(() => {
    if (user) {
      const unsubscribe = init();
      return () => {
        if (unsubscribe) unsubscribe();
      };
    } else {
      setTasks([]);
    }
  }, [user]);

  if (!user) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-4 sm:p-6 min-h-[calc(100vh-140px)]">
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <User size={48} className="mx-auto mb-4 opacity-50" />
          <p className="text-lg">Please login to view tasks</p>
          <p className="text-sm">You need to be authenticated to access this feature</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-2 sm:p-4 lg:p-6 min-h-[calc(100vh-140px)]">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white px-2 sm:px-0">Task List</h2>

      {/* Desktop Table View - Only for extra large screens */}
      <div className="hidden xl:block">
        <style jsx>{`
          .dark table,
          .dark tbody,
          .dark thead,
          .dark tr:not(:hover),
          .dark td,
          .dark th {
            background-color: rgb(15 23 42) !important;
          }
          .dark thead tr,
          .dark thead th {
            background-color: rgb(30 41 59) !important;
          }
          .dark tr:hover td {
            background-color: rgb(51 65 85) !important;
          }
        `}</style>
        <div className="overflow-x-auto">
          <Table className="min-w-full text-sm">
            <TableHeader>
              <TableRow className="bg-gray-100 dark:bg-slate-700">
                <TableHead className="text-black dark:text-white font-semibold min-w-[150px]">Task Name</TableHead>
                <TableHead className="text-black dark:text-white font-semibold min-w-[200px]">Description</TableHead>
                <TableHead className="text-black dark:text-white font-semibold min-w-[120px]">Deadline</TableHead>
                <TableHead className="text-black dark:text-white font-semibold min-w-[100px]">Status</TableHead>
                <TableHead className="text-black dark:text-white font-semibold min-w-[80px] text-center">Complete</TableHead>
                <TableHead className="text-black dark:text-white font-semibold min-w-[60px] text-center">Edit</TableHead>
                <TableHead className="text-black dark:text-white font-semibold min-w-[70px] text-center">Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow
                  key={task.id}
                  className="hover:bg-blue-50 dark:hover:bg-slate-700 transition bg-white dark:bg-slate-800"
                >
                  <TableCell className="text-gray-900 dark:text-gray-100 font-medium">
                    <div className="max-w-[150px] truncate" title={task.taskName}>
                      {task.taskName}
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-900 dark:text-gray-100">
                    <div className="max-w-[200px] truncate" title={task.description}>
                      {task.description}
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-900 dark:text-gray-100">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-gray-500 flex-shrink-0" />
                      <span className="text-sm">{formatDeadline(task.deadline)}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                      task.status === "Completed" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" 
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                    }`}>
                      {task.status || "Pending"}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    {task.status !== "Completed" ? (
                      <Check
                        size={18}
                        className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 cursor-pointer mx-auto"
                        onClick={() => markCompleted(task)}
                        title="Mark as completed"
                      />
                    ) : (
                      <Check
                        size={18}
                        className="text-green-800 dark:text-green-400 opacity-50 mx-auto"
                        title="Already completed"
                      />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    <Edit
                      size={18}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 cursor-pointer mx-auto"
                      onClick={() => handleEditClick(task)}
                    />
                  </TableCell>
                  <TableCell className="text-center">
                    <Trash
                      size={18}
                      className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 cursor-pointer mx-auto"
                      onClick={() => deleteTask(task.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Compact Table View - For large screens */}
      <div className="hidden lg:block xl:hidden">
        <style jsx>{`
          .dark table,
          .dark tbody,
          .dark thead,
          .dark tr:not(:hover),
          .dark td,
          .dark th {
            background-color: rgb(15 23 42) !important;
          }
          .dark thead tr,
          .dark thead th {
            background-color: rgb(30 41 59) !important;
          }
          .dark tr:hover td {
            background-color: rgb(51 65 85) !important;
          }
        `}</style>
        <div className="overflow-x-auto">
          <Table className="min-w-full text-sm">
            <TableHeader>
              <TableRow className="bg-gray-100 dark:bg-slate-700">
                <TableHead className="text-black dark:text-white font-semibold">Task</TableHead>
                <TableHead className="text-black dark:text-white font-semibold">Deadline</TableHead>
                <TableHead className="text-black dark:text-white font-semibold">Status</TableHead>
                <TableHead className="text-black dark:text-white font-semibold text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.map((task) => (
                <TableRow
                  key={task.id}
                  className="hover:bg-blue-50 dark:hover:bg-slate-700 transition bg-white dark:bg-slate-800"
                >
                  <TableCell className="text-gray-900 dark:text-gray-100">
                    <div className="min-w-0">
                      <div className="font-medium truncate" title={task.taskName}>
                        {task.taskName}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 truncate mt-1" title={task.description}>
                        {task.description}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-900 dark:text-gray-100">
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="text-gray-500 flex-shrink-0" />
                      <span className="text-xs">{formatDeadline(task.deadline)}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                      task.status === "Completed" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" 
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                    }`}>
                      {task.status || "Pending"}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-center gap-2">
                      {task.status !== "Completed" ? (
                        <Check
                          size={16}
                          className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 cursor-pointer"
                          onClick={() => markCompleted(task)}
                          title="Mark as completed"
                        />
                      ) : (
                        <Check
                          size={16}
                          className="text-green-800 dark:text-green-400 opacity-50"
                          title="Already completed"
                        />
                      )}
                      <Edit
                        size={16}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 cursor-pointer"
                        onClick={() => handleEditClick(task)}
                        title="Edit task"
                      />
                      <Trash
                        size={16}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 cursor-pointer"
                        onClick={() => deleteTask(task.id)}
                        title="Delete task"
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Mobile Card View - For medium and smaller screens */}
      <div className="lg:hidden space-y-3 px-2 sm:px-0">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-50 dark:bg-slate-800 rounded-xl p-3 sm:p-4 border border-gray-200 dark:border-slate-700 hover:shadow-md transition-shadow"
          >
            {/* Task Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0 pr-2">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white truncate" title={task.taskName}>
                  {task.taskName}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                    task.status === "Completed" 
                      ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400" 
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                  }`}>
                    {task.status || "Pending"}
                  </span>
                </div>
              </div>
            </div>

            {/* Task Description */}
            <div className="mb-3">
              <div className="flex items-start gap-2">
                <FileText size={14} className="text-gray-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3 break-words">
                  {task.description}
                </p>
              </div>
            </div>

            {/* Task Deadline */}
            <div className="mb-4">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {formatDeadline(task.deadline)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-gray-200 dark:border-slate-600">
              {task.status !== "Completed" ? (
                <button
                  onClick={() => markCompleted(task)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                >
                  <Check size={14} />
                  <span className="hidden xs:inline">Complete</span>
                </button>
              ) : (
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-green-800 dark:text-green-400 bg-green-100 dark:bg-green-900/20 rounded-lg opacity-75">
                  <Check size={14} />
                  <span className="hidden xs:inline">Completed</span>
                </div>
              )}
              <button
                onClick={() => handleEditClick(task)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
              >
                <Edit size={14} />
                <span className="hidden xs:inline">Edit</span>
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
              >
                <Trash size={14} />
                <span className="hidden xs:inline">Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {tasks.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          <User size={48} className="mx-auto mb-4 opacity-50" />
          <p className="text-lg">No tasks found</p>
          <p className="text-sm">Add some tasks to get started</p>
        </div>
      )}

      <EditTask
        task={editingTask}
        isOpen={isEditModalOpen}
        onClose={handleEditClose}
      />
    </div>
  );
}

export default TaskList;