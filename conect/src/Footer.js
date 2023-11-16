import tele from './img/tele.png';
import email from './img/email.png';
import fb from './img/fb.png';
import map from './img/map.jpeg';
import insta from './img/ins.png';
import link from './img/lin.png';
import twi from './img/twi.png';
import youtu from './img/fb.png';
import topfl from './img/topfl.png';
import './Footer.css'
import { useNavigate } from "react-router-dom";
function Footer() {
    const navigate=useNavigate()
  return (
    <>
        <div className='petit'>


<div className='first'>
<b>qui sommes nous</b>
<br/>
<p>
    Tounes Connect se démarque par sa créativité et sa réactivité très 
    appréciée par ses clients qui trouvent un environnement convivial pour rêver et promouvoir leurs marques
    </p>
    <p><img className='imgtel' src={tele}/> Nous Appelez +216 99 389 501</p>
    <p><img className='imgtel' src={email}/> tounes.connect@gmail.com </p>
    <p><img className='imgtel' src={map}/> SAHLOUL avenue yesser arafet, immeuble tartella 3eme etage appartement 3.3 4051 Sousse, Tunisia. </p>
    
</div>


 <div  className='second' >
 <b>Blogs</b>
 <br/>
 <p>Tunisia IoT & AI Challenge
TUNISIA IOT & AI CHALLENGE
JAN 13 / BY AMIRA MEDDEB</p>


<br/>
<p>
Intervention Radio JEUNES: les tendances digitales en 2021!
INTERVENTION RADIO JEUNES: LES TENDANCES DIGITALES EN 2021!
MAR 04 / BY AMIRA MEDDEB</p>

    </div>



<div  className='dern'  >
<p>
<img className='' src={youtu}/>
</p>
<p>
<img className='' src={link}/>
</p>
<p>
<img className='' src={insta}/>
</p>
<p>
<img className='' src={fb}/>
</p>
<p>
<img className='' src={twi}/>
</p>



    </div>
    <button className='topfl'>
<img onClick={()=> navigate("/")}  src={topfl}/>
</button>
    <h3 className='copy'>© TOUNESCONNECT - © COPYRIGHT - TOUS DROITS RÉSERVÉS</h3>
</div>

</>
 
  );
}

export default Footer;