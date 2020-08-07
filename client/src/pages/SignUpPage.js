import React, {useRef} from "react";
import axios from 'axios';

function SignUpPage() {
    const getFirstName = useRef()
    const getLastName = useRef()
    const getEmail = useRef()
    const getAddress = useRef()
    const getAddress2 = useRef()
    const getCity = useRef()
    const getProvince = useRef()
    const getPostalCode = useRef()
    const getPassword = useRef()
    const confirmPassword = useRef()
    

    function postNewUser(){
        if(getPassword.current.value !== ''){
            if (getPassword.current.value === confirmPassword.current.value){
                const data = {
                    "firstName": getFirstName.current.value,
                    "lastName": getLastName.current.value,
                    "email": getEmail.current.value,
                    "address": getAddress.current.value,
                    "address2": getAddress2.current.value,
                    "city": getCity.current.value,
                    "province": getProvince.current.value,
                    "postalCode": getPostalCode.current.value,
                    "password": getPassword.current.value,
                    "archieve": false
                }
      
                axios.post("/api/new-user", {
                    headers: {'Content-Type': 'application/json'},
                    data
                })

            }
        }
    }
    
    return (
        <div className='container'>
            <h4 className="mb-3">New Account Sign Up</h4>
              <form className="needs-validation" novalidate="">
                <div className="row">

                  <div className="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" className="form-control" ref={getFirstName} placeholder="" required="" />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" className="form-control" ref={getLastName} placeholder="" required="" />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>

    
                <div className="mb-3">
                  <label for="email">Email</label>
                  <input type="email" className="form-control" ref={getEmail} placeholder="you@example.com" />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
    
                <div className="mb-3">
                  <label for="address">Address</label>
                  <input type="text" className="form-control" ref={getAddress} placeholder="1234 Main St" required="" />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
    
                <div className="mb-3">
                  <label for="address2">Address 2 <span>(Optional)</span></label>
                  <input type="text" className="form-control" ref={getAddress2} placeholder="Apartment or suite" />
                </div>
    
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label for="country">City</label>
                    <input type="text" className="form-control" ref={getCity} />
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>

                  <div className="col-md-4 mb-3">
                    <label for="state">Province</label>
                    <select className="custom-select d-block w-100" ref={getProvince} required="">
                        <option>AB</option>
                        <option>BC</option>
                        <option>MB</option>
                        <option>NB</option>
                        <option>NL</option>
                        <option>NS</option>
                        <option>NT</option>
                        <option>NU</option>
                        <option selected>ON</option>
                        <option>PE</option>
                        <option>QC</option>
                        <option>SK</option>
                        <option>YT</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <label for="zip">Postal Code</label>
                    <input type="text" className="form-control" ref={getPostalCode} placeholder="" required="" />
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label for="address">Password</label>
                  <input type="text" className="form-control" ref={getPassword} required="" />
                </div>
                
                <div className="mb-3">
                  <label for="address">Confirm Password</label>
                  <input type="text" className="form-control" ref={confirmPassword} required="" />
                </div>

                <div className ="row justify-content-md-center pb-4">
                    <button className="btn btn-primary col-5" onClick={postNewUser} type="submit">Save and Submit</button>
                </div>
              </form>

        </div>
    )
}

export default SignUpPage;