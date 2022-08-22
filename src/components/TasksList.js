import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-4/6">
    <div className="w-4/6">
      {/* Title/Button Section Start================================================ */}
      <header className="flex justify-between items-center py-4">
        {/* Title------------------------------------------- */}
        <h1>Tasks: {tasks.length} to complete</h1>
        {/* Create Task Button ------------------------------ */}
        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          Create Task
        </Link>
        {/* Button end --------------------------------------- */}
      </header>
      {/* Title/Button Section End ===================================================== */}

      {/* Todo List Start ================================================================= */}
      <div className="grid grid-cols-3 gap-4">
        {/* Todo Item --------------------------------------------------------------- */}
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                >
                  Delete
                </button>
              </div>
            </header>

            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>

  );
};

export default TasksList;
