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
                    <p className="text1">Do you have any financial Savings?</p>
                    <button className="bttn3 mr-3 mt-2">No saving</button>
                    <button className="bttn3 mr-3 mt-2">0 t0 1000 aed</button>
                    <button className="bttn3 mr-3 mt-2">1000 to 5000 aed</button>
                    <button className="bttn3 mr-3 mt-2">5000 to 10,000aed</button>
                    <button className="bttn3 mr-3 mt-2">10,000 to 20,000 aed</button>
                    <button className="bttn3 mr-3 mt-2">20,000 t0 50,000aed</button>
                    <button className="bttn3 mr-3 mt-2">+50.000</button>
                </div>
               
            </div>
            
            <div className="mt-5">
            <Link to='/'><button className="nextbtnPg2 mr-4">Submit</button></Link>
            </div>

        </div>
    );
}
 
export default Form2;