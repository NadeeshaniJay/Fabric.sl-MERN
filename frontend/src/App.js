import './App.css';
import Header from './components/Header';
import Login from './pages/login';
import Footer from './components/Footer'
import CreateAcc from './pages/CreateAcc';
import Home from './pages/Home';
import SelectionSction from './pages/SelectionSction';

function App() {
  return (
      <div className='App'>
       
        <Header/>
        <Home/>
        <SelectionSction/>

        <Footer/>
      </div>
  )
}

export default App;
