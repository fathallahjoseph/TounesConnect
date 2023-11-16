import './App.css';
import Footer from './Footer';
import NosValeur from './NosValeur'

function Navbar() {
  return (
    <>
    <ul>
    <li><a href="#"><img src="https://tounesconnect.com/logo/logo.svg" alt="TounesConnect_logo "/></a></li>
    <li className='accueil'><a href="/">ACCUEIL</a></li>
    {/* <li className='qui sommes nous'><a href="#">QUI SOMMES NOUS</a></li> */}
    <li className=' services'><a href="nos">NOS SERVICES</a></li>
    {/* <li className=' blogs'><a href="home">NOS Valeurs</a></li> */}
    <li className='promotions'><a href="test">PROMOTIONS</a></li>
    <li className='contact'><a href="#">CONTACT</a></li>
  </ul>
      <br />
      <NosValeur/>
      <Footer/>
    </>


  );
}

export default Navbar;