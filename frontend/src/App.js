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
      <div className='App'>
       
        <Header/>
        <Login/>
        <Footer/>
      </div>
  )
}

export default App;
