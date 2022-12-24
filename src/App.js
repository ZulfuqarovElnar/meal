import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from './routes/Home'
import Meal from "./routes/Meal"

function App() {
  return (
    <Routes>
    <Route path={'/'} element={<Home />}></Route>
    <Route path={'/meal'} element={<Meal />}></Route>
  </Routes>
  );
}

export default App;
