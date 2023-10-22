import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const addUser = (user) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const updateUser = (user) => {
    const updatedUsers = users.map((u) => (u === editingUser ? user : u));
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setEditingUser(null);
  };

  const deleteUser = (user) => {
    const updatedUsers = users.filter((u) => u !== user);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div className="container-fluid App">
      <div className="titre mt-0">
        <h1 className="p-4 fw-bold">App de gestion des étudiants !</h1>
      </div>
      <UserForm
        addUser={addUser}
        editingUser={editingUser}
        updateUser={updateUser}
      />
      <UserTable
        users={users}
        editUser={setEditingUser}
        deleteUser={deleteUser}
      />
    </div>
  );
};

export default App;
