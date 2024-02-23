import React from "react";
import Header from "./components/Header";
import ButtonsStack from "./components/ButtonsStack";
import ItemsList from "./components/ItemsList";
import "./index.css";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <h1>Emergency Supplies Inventory System</h1>
      <Header />
      <ItemsList />
      <ButtonsStack />

      <Modal />
    </div>
  );
}

export default App;
