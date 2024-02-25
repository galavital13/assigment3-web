import React from "react";
import Header from "./components/Header";
import ButtonsStack from "./components/ButtonsStack";
import ItemsList from "./components/ItemsList";
import "./index.css";
import Modal from "./components/Modal";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      <Typography variant="h4">Emergency Supplies Inventory System</Typography>
      <Header text="Item List"/>
      <ItemsList />
      <ButtonsStack />
      <Modal />
    </div>
  );
}

export default App;
