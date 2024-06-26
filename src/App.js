import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tables from "./pages/Tables";

function App() {
  return (
    <BrowserRouter>
   
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/tables" element={<Tables />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
