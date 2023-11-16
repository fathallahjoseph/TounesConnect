import Navbar from './Navbar';
import './App.css';
import NosValeur from './NosValeur';
import NosServices from './NosServices';
import {Route,Routes}from 'react-router-dom'
import Website from './Website';
import Vitrine from './Vitrine';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar/>}/>
        <Route path="/nos" element={<NosServices/>}/>
        <Route path="/home" element={<NosValeur/>}/>
        <Route path="/nos/website" element={<Website/>}/>
        <Route path="/nos/vitrine" element={<Vitrine/>}/>
      </Routes>
    </div>
  );
}

export default App;
