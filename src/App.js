import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    // <div className="bg-zinc-900 h-screen text-white">
    //   <div className="flex items-center justify-center h-full">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<TasksList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </BrowserRouter>
    //   </div>
    // </div>
  );
}

export default App;
