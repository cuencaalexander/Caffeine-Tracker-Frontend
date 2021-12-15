import React, { useState, useEffect } from "react";
// import Home from "./Home";
import axios from "axios";

function Home() {
  const [loaded, setLoaded] = useState(false);
  const [drinks, setDrinks] = useState([]);

  const loadData = () => {
    axios
      .get("http://localhost:3000/api/v1/drinks")
      .then((res) => {
        setDrinks(res.data.data);
        console.log(res.data.data);
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
      <div className="container">
        <h1> Drinks</h1>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {/* {JSON.stringify(drinks)} */}
            {/* {console.log(drinks.data.length)} */}

            {drinks.length > 0 &&
              drinks.map((drink, index) => {
                return (
                  <tr key={drink.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{drink.attributes.name}</td>
                    <td>{drink.attributes.description}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;
