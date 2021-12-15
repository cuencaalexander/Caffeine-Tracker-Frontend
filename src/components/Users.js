import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Users() {
  let navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  const loadData = () => {
    axios
      .get("http://localhost:3000/api/v1/users")
      .then((res) => {
        setUsers(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err.message);
        setLoaded(true);
      });
  };

  const onSubmit = (e, username) => {
    e.preventDefault();
    navigate(`/user_drinks/${username}`);
  };

  const onDelete = (e, usernameId) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3000/api/v1/delete_user/?id=${usernameId}`)
      .then((res) => {
        if (res.status === 200) {
          alert("User deleted");
          const newUsers = users.filter((u) => u.id !== usernameId);
          setUsers(newUsers);
        }
      })
      .catch((err) => {
        console.log(err.message);
        // setLoaded(true);
      });
  };

  useEffect(() => {
    if (!loaded) {
      loadData();
    }
  }, [loaded]);
  return (
    <>
      <div className="container">
        <h1>Users</h1>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Check user drinks</th>
              <th scope="col">Delete user</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.username}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        onClick={(e) => onSubmit(e, user.username)}
                      >
                        User drinks
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        onClick={(e) => onDelete(e, user.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
