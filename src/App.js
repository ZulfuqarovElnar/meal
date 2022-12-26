import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from './routes/Home'
import Meal from "./routes/Meal"
import Recipes from "./routes/Recipes"
import Navbar from "./components/Navbar";
import Dry from '../src/components/species/Dry'

function App() {
  return (
    <div>
      <Navbar />
    <Routes>
    <Route path={'/'} element={<Home />}></Route>
    <Route path={'/meal'} element={<Meal />}></Route>
    <Route path={'/recipe'} element={<Recipes />}></Route>
    <Route path={'/dry'} element={<Dry />}></Route>
  </Routes>
  </div>
  );
}

export default App;
