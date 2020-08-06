import React from "react";

function Newbusinesspage() {
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
                      <input type="text" className="form-control" id="businessName" placeholder="" value="" required="" />
                      <div className="invalid-feedback">
                        Valid business name is required.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label for="businessCategory">Business Type</label>
                        <select className="custom-select d-block w-100" id="businessCategory" required="">
                            <option value="">Choose...</option>
                            <option>United States</option>
                        </select>
                    </div>
                  </div>
      
                  <div className="mb-3">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
      
                  <div className="mb-3">
                    <label for="businessPhone">Phone Number</label>
                    <input type="businessPhone" className="form-control" id="businessPhone" placeholder="416 123 4567" />
                    <div className="invalid-feedback">
                      Please enter a valid Business Phone for verification.
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
                    <input type="text" className="form-control" id="address2" placeholder="unit or suite" />
                  </div>
      
                  <div className="row">
                    <div className="col-md-5 mb-3">
                      <label for="businessCity">City</label>
                      <input type="text" className="form-control" id="businessCity" placeholder="" value="" required="" />
                      <div className="invalid-feedback">
                        Valid City name is required.
                      </div>
                    </div>
                    <div className="col-md-2 mb-2">
                      <label for="businessProvince">Province</label>
                      <input type="text" className="form-control" id="businessProvince" placeholder="" value="" required="" />
                      <div className="invalid-feedback">
                        Please select a valid businessProvince.
                      </div>
                    </div>
                    {/* may be we can delete this */}
                    <div className="col-md-3 mb-3">
                      <label for="zip">Postal Code</label> 
                      <input type="text" className="form-control" id="zip" placeholder="" required="" />
                      <div className="invalid-feedback">
                        Postal code required.
                      </div>
                    </div>
                  </div>
                  <div className ="row">
                    <div className="form-group col">
                        <label for="businessInformation">Business Information</label>
                        <textarea className="form-control" id="businessInformation" rows="3"></textarea>
                    </div>
                   </div>
                   <div className ="row">
                    <div className="form-group col-sm-4">
                        <label for="businessImg">Upload Your Business Image files</label>
                        <input type="file" className="form-control-file" id="businessImg" />
                    </div>
                    </div>
                    <div className ="row justify-content-md-center pb-4">
                        <button className="btn btn-primary col-5" type="submit">Save and Submit</button>
                    </div>
                </form>
  
  

              </div>
        </div>
    </div>
    </div>
  );
}

export default Newbusinesspage;