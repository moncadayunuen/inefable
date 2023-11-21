import React from'react';
import './App.scss';
import {Route, Routes} from "react-router";
import Landing from "./pages/landing";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
  );
}

export default App;
