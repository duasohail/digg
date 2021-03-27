import { Link } from "react-router-dom";
import digg from '../assets/img/digg1.png'
import avatar from '../assets/img/form1avatar.png'
function Form1(){
    return(
        <div className="container-flex">
            <div className="row no-gutters">
                <div className="col-lg-6 col-md-6 col-sm-6 backform1 ">
                    <div><img className="pl-3" src={digg} alt="" width="120px"></img></div>
                    <div className="pl-5"><img className="ml-5 mt-5"  src={avatar} alt="" width="310px" height="310px"></img></div>
                    <div className="customdiv pt-4"><q className="qout">Coming to Dubai with one step Dubai has been the best decision of my life. I am now living in Dubai with a good job and I will be getting married next year!</q></div>
                    <div className="afterqout"><sapn>Mohammed, One Step Dubai student.<br/>Pakistan</sapn></div>

                </div>
                <div className="col-lg-5 col-md-6 col-sm-6 mt-5 pt-5">
                  <div className="item-align-center" >
                        <h2 className="pt-4 heading1 text-center">Apply now to work at Dubai</h2>
                    
                        <div className="mt-4 d-flex customInput justify-content-between">
                            <input className="form-control" type="text" placeholder="First Name"></input>
                            <input className="form-control" type="text" placeholder="Last Name"></input>
                        </div>
                        <div className="mt-4 d-flex customInput justify-content-between">
                            <input className="form-control" type="Date" placeholder="Date Of Birth"></input>
                            <div className="position-relative customcol">
                                <span className="gender d-block">Gender</span>
                                <input className="" type="radio" name="gender"></input><span>Male</span>
                                <input className="" type="radio" name="gender"></input><span>Female</span>
                            </div>
                        </div>
                        
                        <div className="mt-4 d-flex customInput justify-content-between">
                            <select className="form-control" >
                                <option value="">Nationality</option>
                                <option value="">Pakistan</option>
                                <option value="">UK</option>
                            </select>
                            <select className="form-control" >
                                <option value="">Country Of Residence</option>
                                <option value="">Pakistan</option>
                                <option value="">UK</option>
                            </select>
                        </div>
                        
                        <span className="heading2 my-3">How we can contact you ?</span>
                        <div className="d-flex customInput justify-content-between">
                            <input className="form-control "  type="text" placeholder="Contact Number"></input>
                            <input className="form-control "  type="text" placeholder="Email"></input>
                        </div>
                       
                        <div className="d-flex justify-content-end mt-4 pt-2">
                        
                        <Link to='/form2' ><button className="next">Apply Now</button></Link>
                        
                        </div>
                  </div>
                </div>
            </div>

        </div>
    );
}
 
export default Form1;