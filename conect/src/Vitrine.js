
import { useNavigate } from "react-router-dom";
import zarbiya from "./img/zarbiya.jpg";
import tawzi  from "./img/tawzi.jpg";
import solei from "./img/solei.png";
import './Vitrine.css'

function Vitrine() {
    const navigate=useNavigate()
  return (
    <>
        <div className='grand'>


<div className='sv' style={{ backgroundImage: `url(${solei})`}} >

</div>


<div  className='sd'  style={{ backgroundImage: `url(${tawzi})`}} >
    
    </div>



<div  className='sm' style={{ backgroundImage: `url(${zarbiya})`}} >

    </div>
</div>
<button className='button-81'  onClick={()=> navigate("/")}>Back To Home</button>
</>
 
  );
}

export default Vitrine;