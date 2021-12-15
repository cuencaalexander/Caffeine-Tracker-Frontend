import React, { useState } from "react";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";

function PostDrink() {
  const [username, setUsername] = useState("");
  const [drink, setDrink] = useState("");
  const [number, setNumber] = useState(0);
  const statusValues = [
    "Monster",
    "Black Coffee",
    "Americano",
    "5 Hour Energy",
    "NOS",
  ];

  const handleStatusChange = (e) => {
    console.log(e.target.value);
    setDrink(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(username, drink, number);
    axios
      .post("http://localhost:3000/api/v1/drinks", {
        username,
        drink,
        number_of_drinks: parseInt(number),
      })
      .then((res) => {
        alert(res.data);
        setUsername("");
        setDrink("");
        setNumber(0);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <div className="container">
        <h1> Adding Drink</h1>

        <form onSubmit={(e) => submitForm(e)}>
          <div className="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="user"
              placeholder="Enter username"
            />
          </div>

          <div className="form-group">
            {/* <h3 className="mark mb-4">Status: hi</h3> */}
            <label for="username">Drink</label>
            <select
              className="form-control"
              value={drink}
              onChange={(e) => handleStatusChange(e)}
            >
              <option value="">Select Drink</option>
              {statusValues.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label for="number_of_drinks">Number of drinks</label>
            <input
              type="number"
              className="form-control"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              name="drink"
              placeholder="number of drinks"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default PostDrink;
