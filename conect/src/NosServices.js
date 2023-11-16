import { Navbar } from "react-bootstrap";
import "./Nosservice.css"
import anonce from "./img/anonce.jpeg";
import montage from "./img/montage.jpeg";
import web from "./img/web.png";
import { useNavigate } from "react-router-dom";

function NosServices() {
  const navigate=useNavigate()
    return ( 
<div>
    <Navbar/>
    <div className="cervices">
 <h1>Nos Services</h1>
 </div>
 <div className="granddiv">
    <div onClick={()=> navigate("website")} style={{ backgroundImage: `url(${anonce})`}} className="montage"> </div>
    <div onClick={()=> navigate("anonce")} style={{ backgroundImage: `url(${montage})`}} className="web">  </div>
    <div onClick={()=> navigate("montage")} style={{ backgroundImage: `url(${web})`}} className="pubs">  </div>
 </div>
 <div className="bbn"><a className="exit" href="/#">Exit</a></div>
   </div>

     );
}

export default NosServices;