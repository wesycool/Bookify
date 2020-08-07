import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Usersdash() {
  return (
    <div className="container">
        <div className="row">

         {/* leftside */}
            <div className="col-md-4 order-md-1 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span>Business Dashboard</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div className="col">
                        <div className="card-body text-center"><img className="rounded-circle mb-3 mt-4" src="https://avatars1.githubusercontent.com/u/31528729?s=460&u=47436ea6b0f63a23dbe6fbbc71e75156dc05e40f&v=4" width="160" height="160" />
                        </div>
                        <div>User Name</div>
                        <div>User Info</div>
                    </div>
                  </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">My Appointments</h6>
                  </div>  
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">My Reveiws</h6>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Setting</h6>
                  </div>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                  <div>
                    <h6 className="my-0">Privacy Policy</h6>
                  </div>
                </li>
              </ul>
            </div>

            {/* <!-- right contetns --> */}

            {/* <!-- user setting --> */}
            <div className="col-md-8 order-md-2">


              <h4 className="mb-3">User Setting</h4>
              <form className="needs-validation" novalidate="">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
    
                <div className="mb-3">
                  <label for="username">Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>
    
                <div className="mb-3">
                  <label for="email">Email <span>(Optional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
    
                <div className="mb-3">
                  <label for="address">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
    
                <div className="mb-3">
                  <label for="address2">Address 2 <span>(Optional)</span></label>
                  <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                </div>
    
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select className="custom-select d-block w-100" id="country" required="">
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select className="custom-select d-block w-100" id="state" required="">
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label for="zip">Zip</label>
                    <input type="text" className="form-control" id="zip" placeholder="" required="" />
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
              </form>


                <hr className="mb-4" />


               {/* <!-- My Appoinment --> */}
               <div className="cardBusinessdash" id="reservationList">
                <h4 className="mb-3">Appointments List</h4>

              
                <div className="card-body">
                    <div className="row mt-4 ml-0.8 mr-0.5 mb-5">
                        <div className="card-body col-3 d-none d-lg-block">
                            <img className="rounded-circle mb-3 mt-4" src="https://avatars1.githubusercontent.com/u/31528729?s=460&u=47436ea6b0f63a23dbe6fbbc71e75156dc05e40f&v=4" alt="" />
                        </div>
                        <div className="card resultBox col-md-8">
                            <div className="row no-gutters rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col">
                                    <h3 className="mb-0" id="bookTitle">Customer Name</h3>
                                    <p className="mb-auto" id="bookDescription">Customer / reservation Information</p>
                                    <div className="footer d-flex justify-content-end">
                                        <button className="btn btn-primary m-2">Accept</button>
                                        <button className="btn btn-primary m-2">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                </div>


                {/* <hr className="mb-4" /> */}

                {/* <!-- My Review -->
               <div className="cardBusinessdash" id="reservationList">
               <h4 className="mb-3">Review List</h4>

             
               <div className="card-body">
                   <div className="row mt-4 ml-0.8 mr-0.5 mb-5">
                       <div className="card-body col-3 d-none d-lg-block">
                           <img className="rounded-circle mb-3 mt-4" src="https://avatars1.githubusercontent.com/u/31528729?s=460&u=47436ea6b0f63a23dbe6fbbc71e75156dc05e40f&v=4" alt="" />
                       </div>
                       <div className="card resultBox col-md-8">
                           <div className="row no-gutters rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                               <div className="col">
                                   <h3 className="mb-0" id="bookTitle">Customer Name</h3>
                                   <p className="mb-auto" id="bookDescription">Customer / reservation Information</p>
                                   <div className="footer d-flex justify-content-end">
                                       <button className="btn btn-primary m-2">Accept</button>
                                       <button className="btn btn-primary m-2">Cancel</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
               <div className="card-body">
                   <div className="row mt-4 ml-0.8 mr-0.5 mb-5">
                       <div className="card-body col-3 d-none d-lg-block">
                           <img className="rounded-circle mb-3 mt-4" src="https://avatars1.githubusercontent.com/u/31528729?s=460&u=47436ea6b0f63a23dbe6fbbc71e75156dc05e40f&v=4" alt="" />
                       </div>
                       <div className="card resultBox col-md-8">
                           <div className="row no-gutters rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                               <div className="col">
                                   <h3 className="mb-0" id="bookTitle">Customer Name</h3>
                                   <p className="mb-auto" id="bookDescription">Customer / reservation Information</p>
                                   <div className="footer d-flex justify-content-end">
                                       <button className="btn btn-primary m-2">Accept</button>
                                       <button className="btn btn-primary m-2">Cancel</button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
            </div> */}



            </div>


        </div>



    </div>
  );
}

export default Usersdash;
