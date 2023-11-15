import Navbar from './Navbar';
import './App.css';
import NosValeur from './NosValeur';
import Test from "./Test";
import NosServices from './NosServices';
import {Route,Routes}from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path="/nos" element={<NosServices/>}/>
        <Route path="/home" element={<NosValeur/>}/>
        <Route path='/test' element={<Test/>}/>
      </Routes>
     
    
    </div>
  );
}

export default App;
