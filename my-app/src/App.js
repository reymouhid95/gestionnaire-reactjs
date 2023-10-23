// Importattion des bibliothèques nécessaires et composants
import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

// Composant qui représente l'application principale
const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Vérification des données stockées à afficher et stockage des nouvelles données
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Ajout des données du nouvel utlisateur
  const addUser = (user) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  // Mise à jour des données de l'utilisateur
  const updateUser = (user) => {
    const updatedUsers = users.map((u) => (u === editingUser ? user : u));
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setEditingUser(null);
  };

  // Suppression des données de l'utilisateur
  const deleteUser = (user) => {
    const updatedUsers = users.filter((u) => u !== user);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    // Render JSX
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
