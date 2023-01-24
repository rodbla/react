import React from "react";
import "./styles.css";
import { NavBar } from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";





export default function App() {
  return (
    <>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer greeting="Ejemplo de greeting dentro de ItemListContainer"/>} />
            <Route path="*" element={<Error />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
