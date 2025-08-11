import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import * as Yup from "yup";
import { db } from "../firebase";

function EditTask({ task, isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  const editTaskSchema = Yup.object().shape({
    taskName: Yup.string().required("Task Name is required"),
    description: Yup.string().required("Description is required"),
    deadline: Yup.date()
      .min(new Date(), "Deadline must be today or in the future")
      .required("Deadline is required"),
  });

  const formik = useFormik({
    initialValues: { taskName: "", description: "", deadline: "" },
    validationSchema: editTaskSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const docRef = doc(db, "tasks", task.id);
        const data = {
          taskName: values.taskName,
          description: values.description,
          deadline: values.deadline,
          status: "Pending", 
          timestamp: serverTimestamp(),
        };
        await updateDoc(docRef, data);
        toast("Task has been updated!");
        onClose();
      } catch (error) {
        toast(error?.message);
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    if (task) {
      formik.setValues({
        taskName: task.taskName || "",
        description: task.description || "",
        deadline: task.deadline || "",
      });
    }
  }, [task]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] rounded-xl shadow-2xl border-0 bg-white/95 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
            Edit Task
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Update task details below
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2 text-sm font-medium text-gray-700">
              <Label htmlFor="edit-taskName">Task Name</Label>
              <Input
                id="edit-taskName"
                name="taskName"
                type="text"
                value={formik.values.taskName}
                onChange={formik.handleChange}
                className="h-11 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              {formik.errors.taskName && formik.touched.taskName && (
                <span className="text-red-500 text-xs">
                  {formik.errors.taskName}
                </span>
              )}
            </div>

            <div className="grid gap-2 text-sm font-medium text-gray-700">
              <Label htmlFor="edit-description">Description</Label>
              <Input
                id="edit-description"
                name="description"
                type="text"
                value={formik.values.description}
                onChange={formik.handleChange}
                className="h-11 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              {formik.errors.description && formik.touched.description && (
                <span className="text-red-500 text-xs">
                  {formik.errors.description}
                </span>
              )}
            </div>

            <div className="grid gap-2 text-sm font-medium text-gray-700">
              <Label htmlFor="edit-deadline">Deadline</Label>
              <Input
                id="edit-deadline"
                name="deadline"
                type="date"
                value={formik.values.deadline}
                onChange={formik.handleChange}
                className="h-11 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              {formik.errors.deadline && formik.touched.deadline && (
                <span className="text-red-500 text-xs">
                  {formik.errors.deadline}
                </span>
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
              type="submit"
              disabled={loading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-md shadow-md hover:shadow-xl transition-all duration-200"
            >
              {loading ? "Updating..." : "Update"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default EditTask;