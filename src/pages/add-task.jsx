import StudentList from "../components/tasks-list";
import Dashboard from "../components/layout/dashboard";
import AddStudent from "../components/add-tasks";

export default function AddTaskComp() {
  return (
    <>
      <Dashboard>
        <div className="flex justify-end items-center p-2">
          <AddStudent />
        </div>
        <div className="p-2">
          <StudentList />
        </div>
      </Dashboard>
    </>
  );
}