import logo from '../assets/img/digg.png';
import { Link } from "react-router-dom";
function Form2(){
    return(
        <div className="container-fluid backForm2">
             
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
                <div className="col-sm-5 col-md-5 col-lg-5 mt-5">
                    <p className="text1">Have you ever visited Dubai?</p>
                    <button className="bttn mr-3 no1">No</button>
                    <button className="bttn yes1">Yes</button>
                </div>
               
            </div>
            <div className="row no-gutters">
                <div className="col-sm-5 col-md-5 col-lg-5 mt-5">
                    <p className="text1">Do you have any friend or family in Dubai?</p>
                    <button className="bttn mr-3">No</button>
                    <button className="bttn">Yes</button>
                </div>
               
            </div>
            <div className="row no-gutters">
                <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
                    <p className="text1">Howlong do you want to stay in Dubai?</p>
                    <button className="bttn mr-3">upto 3 months</button>
                    <button className="bttn mr-3">3 to 6 months</button>
                    <button className="bttn mr-3">6 to 12 months</button>
                    <button className="bttn mr-3">+12 months</button>
                    <button className="bttn mr-3">+3years</button>
                </div>
               
            </div>

            <div className="mt-5">
                <Link to='/'><button className="backbtnPg2 mr-2">Back</button></Link>
                <Link to='/form3'><button className="nextbtnPg2">Next</button></Link>
            </div>

        </div>
    );
}
 
export default Form2;