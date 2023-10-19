import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Navbar';
import Login from './pages/login';
import Footer from './components/Footer';
import CreateAcc from './pages/CreateAcc';
import Home from './pages/Home';
import SelectionSection from './pages/SelectionSection';
import FashionFabrics from './pages/FashionFabrics';
import DisplayItems from './pages/DisplayItems';
import Navbar from './components/Navbar'; 
import AddProduct from './pages/AddProduct';// Import the Navbar component

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Include the Navbar component here */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createacc" element={<CreateAcc />} />
            <Route path="/selectionsection" element={<SelectionSection />} />
            <Route path="/fashionfabrics" element={<FashionFabrics />} />
            <Route path="/displayitems" element={<DisplayItems />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/addproduct" element={<AddProduct />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
