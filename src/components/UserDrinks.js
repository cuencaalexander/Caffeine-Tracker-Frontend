import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function UserDrinks() {
  const params = useParams();
  const [loaded, setLoaded] = useState(false);
  const [drinks, setDrinks] = useState([]);
  console.log("params", params);
  const username = params.username || "";

  const loadData = () => {
    axios
      .get(`http://localhost:3000/api/v1/my_drinks?username=${username}`)
      .then((res) => {
        setDrinks(res.data);
        console.log("drinks", res);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err.message);
        setLoaded(true);
      });
  };
  useEffect(() => {
    if (!loaded) {
      loadData();
    }
  }, [loaded]);
  return (
    <>
      <h1> User Drinks</h1>

      <div className="container">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {drinks.length > 0 &&
              drinks.map((drink, index) => {
                return (
                  <tr key={drink.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{drink.name}</td>
                    <td>{drink.quantity}</td>
                    <td>{drink.description}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserDrinks;
