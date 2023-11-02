// Import des hooks useState et useEffect depuis React
import { useState, useEffect } from 'react';
//  Import de la bibliotheque Axios pour les requêtes HTTP, normalemnt j'ai installé Axios, mais dans le fichier package.json --> dependencies je ne trouve pas axios, en en saisissant la commande npm list axios (terminal--> axios@1.6.0), ce qui veut dire que axios est bien installé
import axios from 'axios';

function UserList() {
  //Création d'un etat initial vide pour stocker la liste des utilisateurs

  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // // Utilisation d'Axios pour effectuer la requête GET à l API JSONPlaceholder
    axios.get('https://jsonplaceholder.typicode.com/users')
      //  mettre à jour l'état listOfUsers avec les données de l'API
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        // gestion des erreurs en cas d'échec de la requête
      });
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
          </tr>
        </thead>
        <tbody>
          {listOfUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
/////////////////////////////////////////////////////////////
// pour afficher toutes les informations ds users:


  /* return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Téléphone: {user.phone}</p>
            <p>Adresse: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
  */ 
           
