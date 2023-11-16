import Navbar  from './Navbar';
import './App.css';
import './Webs.css'
import { useNavigate } from "react-router-dom";
import vitrine from "./img/vitrine.jpeg";
import dynamique  from "./img/dynamique.jpeg";
import maintenance from "./img/maintenance.jpeg";

function Website() {
    const navigate=useNavigate()
  return (
    <>
            <Navbar/>

      <div className='webs'>


        <div className='swv' onClick={()=> navigate("/nos/vitrine")} style={{ backgroundImage: `url(${vitrine})`}} >
       
        </div>


        <div  className='swd'  style={{ backgroundImage: `url(${dynamique})`}} >
            
            </div>



        <div  className='msw' style={{ backgroundImage: `url(${maintenance})`}} >

            </div>
      </div>
      <button className='button-85'  onClick={()=> navigate("/")}>Back To Home</button>
    </>

  );
}

export default Website;