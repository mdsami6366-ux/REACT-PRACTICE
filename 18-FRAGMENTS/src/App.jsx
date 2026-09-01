import React from "react";
import './App.css';
import FoodItems from "./FoodItems";

function App() {
   
  // let foodItems = [];
  return (
    <React.Fragment>
      <h1>Healthy Foods</h1>
      {/* {foodItems.length === 0 && <h1>i am still hungry</h1>} */}
     <FoodItems></FoodItems>
    </React.Fragment>
  );
}

export default App;
