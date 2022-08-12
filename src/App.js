import React from "react";
import Layout from "./layout";
import List from "./pages/Listing";
import Add from "./pages/AddLink";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/index.scss";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="list" element={<List />} />
          <Route path="add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;