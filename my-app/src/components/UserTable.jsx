// Importattion des bibliothèques nécessaires
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";

// Composant principal défini à travers une fonction fléchée
const UserTable = ({ users, editUser, deleteUser }) => {
  return (
    // Render JSX
    <div className="tableau p-3">
      <h2 className="mb-4 fw-bold">Tableau d'affichage des étudiants !</h2>
      <Table striped bordered hover variant="warning">
        <thead>
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Âge</th>
            <th>E-mail</th>
            <th>Module</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className={user.statut === "terminé" ? "completed" : ""}
            >
              <td>{user.prenom}</td>
              <td>{user.nom}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.module}</td>
              <td>{user.statut}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => editUser(user)}
                  className="mb-2 mx-2"
                >
                  <Icon.PencilSquare className="fs-5" />
                </Button>
                <Button
                  variant="danger"
                  onClick={() => deleteUser(user)}
                  className="mb-2 mx-2"
                >
                  <Icon.Trash className="fs-5" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
