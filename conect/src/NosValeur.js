import "./App.css"
import YouTube from 'react-youtube';
function NosValeur() {
    return (
<div className="nos">
    <div>
        <h1>Nos Valeurs</h1>
    <p className="pn">✅ Professionnalisme et flexibilité</p>
    <p className="pn">✅ Créativité et réactivité</p>
    <p className="pn">✅ Intégrité et engagement</p>
    <p className="pn">✅ Encadrement et conseils</p>
    <svg className="tal" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.75 12.129L13.773 8.106L14.8335 9.1665L9 15L3.1665 9.1665L4.227 8.106L8.25 12.129V3L9.75 3V12.129Z" fill="white"></path>
          </svg><i className="pn" class="fa fa-download">  Consulter notre présentation</i>
    <br/>
    <button className="tele">TELECHARGER</button>
    </div>
    <div className="vd">
    <YouTube className="youtube" videoId="liJVSwOiiwg"/>
    </div>
</div>
    );
  }
  
  export default NosValeur;