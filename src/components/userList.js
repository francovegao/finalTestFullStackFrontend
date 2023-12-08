import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todo = (props) => (
  <tr className="d-flex">
    <td className="col-10">{props.todo}</td>
    <td className="col-2" style={{ textAlign: 'right' }}>
      <button>delete</button>
    </td>
  </tr>
);

export default function UsersList() {
  const [users, setUsersList] = useState([]);
  useEffect(() => {
    axios
      .get('https://fullstackfinaltest.onrender.com/')
      .then((response) => {
        console.log(response)
        setUsersList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(users)

  return (
    <div>
      <h3>Logged Users</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Users</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => { 
            return(
                <tr className="d-flex">
            <td className="col-10">Name: {user.name}</td>
            <td className="col-10">Age: {user.age}</td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  );
}