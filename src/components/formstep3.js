import logo from '../assets/img/digg.png';
import redPatch from '../assets/img/Path-1000.png';
import { Link } from "react-router-dom";
function Form2(){
    return(
        <div className="container-fluid backForm3">
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
                    <p className="text1">What do you want to come to Dubai?</p>
                    <button className="bttn mr-3 mt-2">Lifestyle</button>
                    <button className="bttn3 mr-3 mt-2">Work opportunity</button>
                    <button className="bttn3 mr-3 mt-2">Education</button>
                    <button className="bttn3 mr-3 mt-2">Finance</button>
                    <button className="bttn3 mr-3 mt-2">Tourism</button>
                    <button className="bttn3 mr-3 mt-2">Family</button>
                    <button className="bttn3 mr-3 mt-2">Business</button>
                    <button className="bttn3 mr-3 mt-2">Security</button>
                    <button className="bttn3 mr-3 mt-2">The Weather</button>
                    <button className="bttn3 mr-3 mt-2">Meeting new people</button>
                    <button className="bttn3 mr-3 mt-2">culture</button>
                </div>
               
            </div>
            
            <div className="mt-5">
            <Link to='/form2'><button className="backbtnPg2 mr-2">Back</button></Link>
                <Link to='/form4'><button className="nextbtnPg2">Next</button></Link>
            </div>

        </div>
    );
}
 
export default Form2;