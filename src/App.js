import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import PostView from "./PostView/PostView";
import LandingPage from "./LandingPage/LandingPage";
import FormPage from "./FormPage/FormPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/posts" element={<PostView />} />
        <Route path="/formPage" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
