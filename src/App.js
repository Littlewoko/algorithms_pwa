import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Basics from './components/Basics';
import Index from "./components/Index";
import Loops from "./components/Loops";
import NotFoundPage from './components/NotFoundPage';
import Representation from './components/Representation';

const App = () => (
  <BrowserRouter>
    <Routes>
  
      <Route path="/" exact element={<Index />} />
      <Route path="/basics" exact element={<Basics />} />
      <Route path="/loops" exact element={<Loops />} />
      <Route path="/representation" exact element={<Representation />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;