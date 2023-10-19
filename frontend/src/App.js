import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Footer from './components/Footer';
import CreateAcc from './pages/CreateAcc';
import Home from './pages/Home';
import SelectionSection from './pages/SelectionSection';
import FashionFabrics from './pages/FashionFabrics';
import Navbar from './components/Navbar'; 
import AddProduct from './pages/AddProduct';
import About from './pages/About';
import Contact from './pages/Contact';
import UpdateProduct from './pages/UpdateProduct';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> 
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createacc" element={<CreateAcc />} />
            <Route path="/selectionsection" element={<SelectionSection />} />
            <Route path="/fashionfabrics" element={<FashionFabrics />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/updateproduct" element={<UpdateProduct />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
