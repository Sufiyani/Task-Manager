import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "sonner";
import * as Yup from "yup";

function AddTask() {
  const [loading, setLoading] = useState(false);
  const [user] = useAuthState(auth);

  const initialValues = {
    taskName: "",
    description: "",
    deadline: "",
  };

  const addTaskSchema = Yup.object().shape({
    taskName: Yup.string().required("Task Name is required"),
    description: Yup.string().required("Description is required"),
    deadline: Yup.date()
      .min(new Date(), "Deadline must be today or in the future")
      .required("Deadline is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: addTaskSchema,
    onSubmit: async (values) => {
      if (!user) {
        toast("Please login first");
        return;
      }

      setLoading(true);
      try {
        const collectionRef = collection(db, "tasks");
        const taskNameToCheck = values.taskName.toLowerCase();

        const q = query(
          collectionRef,
          where("taskName", "==", taskNameToCheck),
          where("createdBy", "==", user.uid)
        );
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          toast("A task with this name already exists in your records.");
          setLoading(false);
          return;
        }

        const data = {
          taskName: values.taskName,
          description: values.description,
          deadline: values.deadline,
          status: "Pending",
          createdBy: user.uid,
          createdByEmail: user.email,
          timestamp: serverTimestamp(),
        };

        const docRef = await addDoc(collectionRef, data);
        if (docRef) {
          formik.resetForm();
          toast("Task has been added!");
        }
      } catch (error) {
        toast(error?.message);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Add Task
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] rounded-xl shadow-2xl border-0 bg-white/95 backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
              Add New Task
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Please insert task details below
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2 text-sm font-medium text-gray-700">
              <Label htmlFor="taskName">Task Name</Label>
              <Input
                id="taskName"
                name="taskName"
                type="text"
                value={formik.values.taskName}
                onChange={formik.handleChange}
                placeholder="Enter task name"
                className="h-11 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              {formik.errors.taskName && formik.touched.taskName && (
                <span className="text-red-500 text-xs">{formik.errors.taskName}</span>
              )}
            </div>

            <div className="grid gap-2 text-sm font-medium text-gray-700">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                name="description"
                type="text"
                value={formik.values.description}
                onChange={formik.handleChange}
                placeholder="Enter description"
                className="h-11 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              {formik.errors.description && formik.touched.description && (
                <span className="text-red-500 text-xs">{formik.errors.description}</span>
              )}
            </div>

            <div className="grid gap-2 text-sm font-medium text-gray-700">
              <Label htmlFor="deadline">Deadline</Label>
              <Input
                id="deadline"
                name="deadline"
                type="date"
                value={formik.values.deadline}
                onChange={formik.handleChange}
                className="h-11 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              {formik.errors.deadline && formik.touched.deadline && (
                <span className="text-red-500 text-xs">{formik.errors.deadline}</span>
              )}
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="rounded-md text-sm font-medium text-gray-700"
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="button"
              onClick={() => formik.submitForm()}
              disabled={loading || !user}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-md shadow-md hover:shadow-xl transition-all duration-200"
            >
              {loading ? "Saving..." : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default AddTask;