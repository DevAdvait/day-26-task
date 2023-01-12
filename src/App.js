import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ListUsers from "./components/ListUsers.jsx";
import EditUser from "./components/EditUser.jsx";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<ListUsers />} />

        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/edit-user" element={<EditUser/>}/>

      </Routes>
    </div>
  );
}

export default App;
