import { useState } from 'react'
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import CarTable from './components/CarTable';
import CreateCar from './components/CreateCar';
import CarInfo from './components/CarInfo';

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cars" element={<CarTable />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<CreateCar />} />
          <Route path="products/:id" element={<CarInfo />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
