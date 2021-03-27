import logo from '../assets/img/digg.png';
import redPatch from '../assets/img/Path-1000.png';
import { Link } from "react-router-dom";
function Form2(){
    return(
        <div className="container-fluid backForm4">
            <div className="row no-gutters">
                <div className="col-sm-4 col-md-4 col-lg-4">
                    <img src={logo}></img>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8">
                    <div class="progress">
                        <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" ></div>
                    </div>
                </div>
               
            </div>


            <div className="row no-gutters">
                <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
                    <p className="text1">What industry would you prefer to work?</p>
                    <button className="bttn3 mr-3 mt-2">Construction</button>
                    <button className="bttn3 mr-3 mt-2">Hospitility</button>
                    <button className="bttn3 mr-3 mt-2">Real state</button>
                    <button className="bttn3 mr-3 mt-2">Tourism</button>
                    <button className="bttn3 mr-3 mt-2">Manufacturing</button>
                    <button className="bttn3 mr-3 mt-2">Technology</button>
                    <button className="bttn3 mr-3 mt-2">Media</button>
                    <button className="bttn3 mr-3 mt-2">Farming</button>
                    <button className="bttn3 mr-3 mt-2">Fishing</button>
                    <button className="bttn3 mr-3 mt-2">Education</button>
                    <button className="bttn3 mr-3 mt-2">Public service</button>
                    <button className="bttn3 mr-3 mt-2">Asministration</button>
                    <button className="bttn3 mr-3 mt-2">Financial service</button>
                    <button className="bttn3 mr-3 mt-2">legal</button>
                    <button className="bttn3 mr-3 mt-2">Healthcare</button>
                    <button className="bttn3 mr-3 mt-2">Government</button>
                    <button className="bttn3 mr-3 mt-2">Medical</button>
                    <button className="bttn3 mr-3 mt-2">Security</button>
                    <button className="bttn3 mr-3 mt-2">Logistics</button>
                    <button className="bttn3 mr-3 mt-2">Robotics</button>
                    <button className="bttn3 mr-3 mt-2">Fashion</button>
                    <button className="bttn3 mr-3 mt-2">Automotive</button>
                    <button className="bttn3 mr-3 mt-2">Transportation </button>
                    <button className="bttn3 mr-3 mt-2">Customer support </button>
                </div>
               
            </div>
            
            <div className="mt-5">
            <Link to='/form3'><button className="backbtnPg2 mr-2">Back</button></Link>
                <Link to='/form5'><button className="nextbtnPg2">Next</button></Link>
            </div>

        </div>
    );
}
 
export default Form2;