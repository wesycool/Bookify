import React, {useRef, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios'

function Businessdash() {
    const location = useLocation()
    const category = useRef()
    const businessName = useRef()
    const address1 = useRef()
    const address2 = useRef()
    const city = useRef()
    const province = useRef()
    const email = useRef()
    const phone = useRef()
    const postalCode = useRef()
    const information = useRef()
    const splitLocation = location.pathname.split('/')
    
    // ObjectId("5f2c71acd7e4e0cac8181a94")
    // 5f2c9d930fc92fcfe04fe9cc

    useEffect(() => {
      axios.get(`/api/get-business/${splitLocation[2]}`)
      .then(({data}) => {
          category.current.value = data.category
          businessName.current.value = data.businessName
          address1.current.value = data.address1
          address2.current.value = data.address2
          city.current.value = data.city
          province.current.value = data.province
          email.current.value = data.email
          phone.current.value = data.phone
          postalCode.current.value = data.postalCode
          information.current.value = data.information
        })
    })



    function editBusiness(){
      const data = { 
        "category": category.current.value,
        "businessName": businessName.current.value,
        "address1": address1.current.value,
        "address2": address2.current.value,
        "city": city.current.value,
        "province": province.current.value,
        "email": email.current.value,
        "phone": phone.current.value,
        "postalCode": postalCode.current.value,
        "information": information.current.value,
        "imgSRC": `${category.current.value.toLowerCase().replace(/\s/g, '')}.jpg`,
        "archieve": false
      }

      axios.put(`/api/edit-business/${splitLocation[2]}`,{headers: {'Content-Type': 'application/json'},data})
  
    }

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
                        <div className="card-body text-center">
                          <img className="rounded-circle mb-3 mt-4" src="https://avatars1.githubusercontent.com/u/31528729?s=460&u=47436ea6b0f63a23dbe6fbbc71e75156dc05e40f&v=4" width="160" height="160" />
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


{/* 
            <Route exact path="/businessdashboard/" component={Businessdash} />
            <Route exact path="/businessdashboard/" component={Businessdash} />
            <Route exact path="/businessdashboard/" component={Businessdash} /> */}

<div className="col">
                  <h4 className="mb-3 pt-3">Business Account</h4>
                  <form className="" style={{width: "100%"}}>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label for="businessName">Business Name</label>
                        <input type="text" className="form-control" placeholder="" ref={businessName} required="" />
                        <div className="invalid-feedback">
                          Valid business name is required.
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                          <label for="businessCategory">Business Type</label>
                          <select className="custom-select d-block w-100" ref={category} required="">
                              <option>Choose...</option>
                              <option {...category === 'Barber'? 'selected': ''} >Barber</option>
                              <option {...category === 'Coffee Shop'? 'selected': ''} >Coffee Shop</option>
                              <option {...category === 'Garage'? 'selected': ''} >Garage</option>
                              <option {...category === 'Gym'? 'selected': ''} >Gym</option>
                              <option {...category === 'Hair Salon'? 'selected': ''} >Hair Salon</option>
                              <option {...category === 'Pub'? 'selected': ''} >Pub</option>
                              <option {...category === 'Restaurant'? 'selected': ''} >Restaurant</option>
                          </select>
                      </div>
                    </div>
        
                    <div className="mb-3">
                      <label for="email">Email</label>
                      <input type="email" className="form-control" ref={email} placeholder="you@example.com" />
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>
        
                    <div className="mb-3">
                      <label for="businessPhone">Phone Number</label>
                      <input type="businessPhone" className="form-control" ref={phone} placeholder="416 123 4567" />
                      <div className="invalid-feedback">
                        Please enter a valid Business Phone for verification.
                      </div>
                    </div>
        
                    <div className="mb-3">
                      <label for="address">Address</label>
                      <input type="text" className="form-control" ref={address1} placeholder="1234 Main St" required="" />
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>
        
                    <div className="mb-3">
                      <label for="address2">Address 2 <span>(Optional)</span></label>
                      <input type="text" className="form-control" ref={address2} placeholder="unit or suite" />
                    </div>
        
                    <div className="row">
                      <div className="col-md-5 mb-3">
                        <label for="businessCity">City</label>
                        <input type="text" className="form-control" ref={city} placeholder="" required="" />
                        <div className="invalid-feedback">
                          Valid City name is required.
                        </div>
                      </div>
                      <div className="col-md-2 mb-2">
                        <label for="businessProvince">Province</label>
                        <select className="custom-select d-block w-100" ref={province} required="">
                            <option {...province === 'AB'? 'selected': ''}>AB</option>
                            <option {...province === 'BC'? 'selected': ''}>BC</option>
                            <option {...province === 'MB'? 'selected': ''}>MB</option>
                            <option {...province === 'NB'? 'selected': ''}>NB</option>
                            <option {...province === 'NL'? 'selected': ''}>NL</option>
                            <option {...province === 'NS'? 'selected': ''}>NS</option>
                            <option {...province === 'NT'? 'selected': ''}>NT</option>
                            <option {...province === 'NU'? 'selected': ''}>NU</option>
                            <option {...province === 'ON'? 'selected': ''}>ON</option>
                            <option {...province === 'PE'? 'selected': ''}>PE</option>
                            <option {...province === 'QC'? 'selected': ''}>QC</option>
                            <option {...province === 'SK'? 'selected': ''}>SK</option>
                            <option {...province === 'YT'? 'selected': ''}>YT</option>
                          </select>
                        <div className="invalid-feedback">
                          Please select a valid businessProvince.
                        </div>
                      </div>
                      {/* may be we can delete this */}
                      <div className="col-md-3 mb-3">
                        <label for="zip">Postal Code</label> 
                        <input type="text" className="form-control" ref={postalCode} placeholder="" required="" />
                        <div className="invalid-feedback">
                          Postal code required.
                        </div>
                      </div>
                    </div>
                    <div className ="row">
                      <div className="form-group col">
                          <label for="businessInformation">Business Information</label>
                          <textarea className="form-control" ref={information} rows="3"></textarea>
                      </div>
                    </div>

                      <div className ="row justify-content-md-center pb-4">
                          <button className="btn btn-primary col-5" onClick={editBusiness} type="button">Save and Submit</button>
                      </div>
                  </form>
                </div>
                <hr className="mb-4" />


               {/* <!-- My Appoinment --> */}
               <div className="cardBusinessDash" id="reservationList">
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





            </div>


        </div>



    </div>
  );
}

export default Businessdash;
