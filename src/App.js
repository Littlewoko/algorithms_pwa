import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/_base.css";
import "./styles/components/_header.css";
import Basics from './components/Basics';
import BasicsChallenge from './components/BasicsChallenge';
import Index from "./components/Index";
import Loops from "./components/Loops";
import ChallengeTwo from './components/Cond_LoopsChallenge';
import NotFoundPage from './components/NotFoundPage';
import Representation from './components/Representation';

const App = () => (
  <BrowserRouter>
    <Routes>
  
      <Route path="/" exact element={<Index />} />
      <Route path="/basics" exact element={<Basics />} />
      <Route path="/basics/challenge" exact element={<BasicsChallenge />} />
      <Route path="/loops" exact element={<Loops />} />
      <Route path="/loops/challenge" exact element={<ChallengeTwo />} />
      <Route path="/representation" exact element={<Representation />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;