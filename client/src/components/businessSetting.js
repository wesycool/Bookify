import React, {useRef, useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

function BusinessSetting({list}){
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

  useEffect(() =>{
    category.current.value = list.category
    businessName.current.value = list.businessName
    address1.current.value = list.address1
    address2.current.value = list.address2
    city.current.value = list.city
    province.current.value = list.province
    email.current.value = list.email
    phone.current.value = list.phone
    postalCode.current.value = list.postalCode
    information.current.value = list.information
})

  function editBusinessInfo(){
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
      axios.put(`/api/edit-business/${splitLocation[3]}`,{headers: {'Content-Type': 'application/json'},data})

  }

return (
  <div>

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
    </form>


    <div className ="row pb-4">
        <div className='col-6 col-lg-4 offset-3 offset-lg-4'>
          <button className="btn btn-primary" style={{width:'100%'}} onClick={editBusinessInfo} type="button">Save and Submit</button>
        </div>          
    </div>

  </div>

  )
}


export default BusinessSetting;