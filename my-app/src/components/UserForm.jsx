// Importattion des bibliothèques nécessaires
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

// Composant principal défini à travers une fonction fléchée
const UserForm = ({ addUser, editingUser, updateUser }) => {
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    age: "",
    email: "",
    module: "",
    statut: "en cours",
  });

  // Surveiller les changements d'état des propriétés
  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser({
        nom: "",
        prenom: "",
        age: "",
        email: "",
        module: "",
        statut: "en cours",
      });
    }
  }, [editingUser]);

  //Fonction pour mettre à jour l'état à chaque fois que le champ modifié
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Fonction appelée quand le formulaire est soumis
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      updateUser(user);
    } else {
      addUser(user);
    }

    setUser({
      nom: "",
      prenom: "",
      age: "",
      email: "",
      module: "",
      statut: "en cours",
    });
  };

  return (
    // Render JSX
    <div className="champs p-3">
      <h2 className="mb-4 fw-bold">
        Champs à remplir pour ajouter un étudiant !
      </h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={4} sm={12} xs={12} className="mb-3">
            <Form.Control
              type="text"
              name="prenom"
              value={user.prenom}
              onChange={handleInputChange}
              placeholder="Prénom"
              required
            />
          </Col>
          <Col md={4} sm={12} xs={12} className="mb-3">
            <Form.Control
              type="text"
              name="nom"
              value={user.nom}
              onChange={handleInputChange}
              placeholder="Nom"
              required
            />
          </Col>
          <Col md={4} sm={12} xs={12} className="mb-3">
            <Form.Control
              type="number"
              name="age"
              value={user.age}
              onChange={handleInputChange}
              placeholder="Âge"
              required
            />
          </Col>
        </Row>
        <Row>
          <Col md={4} sm={12} xs={12} className="mb-3">
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              placeholder="E-mail"
              required
            />
          </Col>
          <Col md={4} sm={12} xs={12} className="mb-3">
            <Form.Control
              type="text"
              name="module"
              value={user.module}
              onChange={handleInputChange}
              placeholder="Module"
              required
            />
          </Col>
          <Col md={4} sm={12} xs={12} className="mb-3">
            <Form.Select
              name="statut"
              value={user.statut}
              onChange={handleInputChange}
            >
              <option value="en cours">En cours</option>
              <option value="terminé">Terminé</option>
            </Form.Select>
          </Col>
        </Row>
        <Button variant="light" type="submit" className="btn btn-lg mt-3">
          {editingUser ? "Mettre à jour" : "Ajouter"}
        </Button>
      </Form>
    </div>
  );
};

export default UserForm;
