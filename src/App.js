import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import React from "react";
import Category from "./routes/Category";
import Detail from "./routes/Detail";
import Payment from "./routes/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
