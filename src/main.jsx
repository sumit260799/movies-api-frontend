import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppProvider from "./context.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./SinglePage.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/singlemovie/:name" exact element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);
