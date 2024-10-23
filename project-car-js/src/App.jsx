import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import CarTable from './components/CarTable';

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cars" element={<CarTable />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
