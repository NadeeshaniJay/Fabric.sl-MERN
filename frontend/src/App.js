import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter, NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './pages/login';
import Footer from './components/Footer'
import CreateAcc from './pages/CreateAcc';
import Home from './pages/Home';
import SelectionSction from './pages/SelectionSection';
import FashionFabrics from './pages/FashionFabrics';
import DisplayItems from './pages/DisplayItems'


function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createacc" element={<CreateAcc />} />
        <Route path="/selectionsection" element={<SelectionSction />} />
        <Route path="/fashionfabrics" element={<FashionFabrics />} />
        <Route path="/displayitems" element={<DisplayItems />} />
        <Route path="/footer" element={<Footer />} />  
      </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App;
