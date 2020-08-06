import React, {useRef} from "react";
import axios from 'axios';

function Newbusinesspage() {
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
  const imgSRC = useRef()

  function postNewBusiness(){
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

    axios.post("/api/new-business", {
      headers: {'Content-Type': 'application/json'},
      data
    })
  }


  
  return (
    <div className='container'>
        <header id="mainHeader" className="masthead text-center text-blue d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1 className="text-center"><br/><br/><br/><br/>Boost Your Business with Bookify</h1>                
                    </div>
                </div>
                </div>
            </header>
            <div className="busineesForm">
        <div className="form-container">
            <div className="col">
                <h4 className="mb-3 pt-3">Register Your Business</h4>
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
                            <option value="">Choose...</option>
                            <option>Barber</option>
                            <option>Coffee Shop</option>
                            <option>Garage</option>
                            <option>Gym</option>
                            <option>Hair Salon</option>
                            <option>Pub</option>
                            <option>Restaurant</option>
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
                   <div className ="row">
                    <div className="form-group col-sm-4">
                        <label for="businessImg">Upload Your Business Image files</label>
                        <input type="file" className="form-control-file" ref={imgSRC} />
                    </div>
                    </div>
                    <div className ="row justify-content-md-center pb-4">
                        <button className="btn btn-primary col-5" onClick={postNewBusiness} type="submit">Save and Submit</button>
                    </div>
                </form>
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
                   <div className ="row">
                    <div className="form-group col-sm-4">
                        <label for="businessImg">Upload Your Business Image files</label>
                        <input type="file" className="form-control-file" ref={imgSRC} />
                    </div>
                    </div>
                    <div className ="row justify-content-md-center pb-4">
                        <button className="btn btn-primary col-5" onClick={postNewBusiness} type="submit">Save and Submit</button>
                    </div>
                </form>
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
                   <div className ="row">
                    <div className="form-group col-sm-4">
                        <label for="businessImg">Upload Your Business Image files</label>
                        <input type="file" className="form-control-file" ref={imgSRC} />
                    </div>
                    </div>
                    <div className ="row justify-content-md-center pb-4">
                        <button className="btn btn-primary col-5" onClick={postNewBusiness} type="submit">Save and Submit</button>
                    </div>
                </form>
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
                   <div className ="row">
                    <div className="form-group col-sm-4">
                        <label for="businessImg">Upload Your Business Image files</label>
                        <input type="file" className="form-control-file" ref={imgSRC} />
                    </div>
                    </div>
                    <div className ="row justify-content-md-center pb-4">
                        <button className="btn btn-primary col-5" onClick={postNewBusiness} type="submit">Save and Submit</button>
                    </div>
                </form>
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
                   <div className ="row">
                    <div className="form-group col-sm-4">
                        <label for="businessImg">Upload Your Business Image files</label>
                        <input type="file" className="form-control-file" ref={imgSRC} />
                    </div>
                    </div>
                    <div className ="row justify-content-md-center pb-4">
                        <button className="btn btn-primary col-5" onClick={postNewBusiness} type="submit">Save and Submit</button>
                    </div>
                </form>
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
                   <div className ="row">
                    <div className="form-group col-sm-4">
                        <label for="businessImg">Upload Your Business Image files</label>
                        <input type="file" className="form-control-file" ref={imgSRC} />
                    </div>
                    </div>
                    <div className ="row justify-content-md-center pb-4">
                        <button className="btn btn-primary col-5" onClick={postNewBusiness} type="submit">Save and Submit</button>
                    </div>
                </form>
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
                   <div className ="row">
                    <div className="form-group col-sm-4">
                        <label for="businessImg">Upload Your Business Image files</label>
                        <input type="file" className="form-control-file" ref={imgSRC} />
                    </div>
                    </div>
                    <div className ="row justify-content-md-center pb-4">
                        <button className="btn btn-primary col-5" onClick={postNewBusiness} type="submit">Save and Submit</button>
                    </div>
                </form>
              </div>
        </div>
    </div>
    </div>
  );
}

export default Newbusinesspage;