import React from "react";
import './App.css';
import FoodItems from "./components/FoodItems";
import ErrorMessages from "./components/ErrorMessages";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
   
    let foodItems = ["dal", "chawal", "chole", "ghee", "chane"];
  // let foodItems = [];
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMessages items={foodItems}></ErrorMessages>
        <FoodInput></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
{/* 
      <Container>
        <p>hey, above list is of healthy foods</p>
      </Container> */}
    </>
  );
}

export default App;
