import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "react-bootstrap";
import "./Nosservice.css"
import anonce from "./img/anonce.jpeg";
import montage from "./img/montage.jpeg";
import web from "./img/web.png";

function NosServices() {

    return ( 
<div>
    <Navbar/>
    <div className="cervices">
 <h1>Nos Services</h1>
 </div>
 <div className="granddiv">
    <div style={{ backgroundImage: `url(${anonce})`}} className="montage">  </div>
    <div style={{ backgroundImage: `url(${montage})`}} className="web">  </div>
    <div style={{ backgroundImage: `url(${web})`}} className="pubs">  </div>
 </div>
 <div className="bbn"><a className="exit" href="/#">Exit</a></div>
   </div>

     );
}

export default NosServices;