import React, {useRef, useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

function UserSetting({list}){
  const location = useLocation()
  const getFirstName = useRef()
  const getLastName = useRef()
  const getEmail = useRef()
  const getAddress = useRef()
  const getAddress2 = useRef()
  const getCity = useRef()
  const getProvince = useRef()
  const getPostalCode = useRef()
  const splitLocation = location.pathname.split('/')

  useEffect(() =>{
    getFirstName.current.value = list.firstName
    getLastName.current.value = list.lastName
    getEmail.current.value = list.email
    getAddress.current.value = list.address
    getAddress2.current.value = list.address2
    getCity.current.value = list.city
    getProvince.current.value = list.province
    getPostalCode.current.value = list.postalCode
})

  function editUser(){
    const data = { 
      "firstName": getFirstName.current.value,
      "lastName": getLastName.current.value,
      "email": getEmail.current.value,
      "address1": getAddress.current.value,
      "address2": getAddress2.current.value,
      "city": getCity.current.value,
      "province": getProvince.current.value,
      "postalCode": getPostalCode.current.value,
      "archieve": false
    }
      axios.put(`/api/edit-user/${splitLocation[3]}`,{headers: {'Content-Type': 'application/json'},data})

  }

return (
  <div>
    <form className="needs-validation">

      <div className="row">
        <div className="col-md-6 mb-3">
          <label>First name</label>
          <input type="text" className="form-control" ref={getFirstName} placeholder="" required="" />
        </div>

        <div className="col-md-6 mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" ref={getLastName} placeholder="" required="" />
          <div className="invalid-feedback">
            Valid last name is required.
          </div>
        </div>
      </div>


      
      <div className="mb-3">
        <label>Email</label>
        <input type="email" className="form-control" ref={getEmail} placeholder="you@example.com" />
        <div className="invalid-feedback">
          Please enter a valid email address for shipping updates.
        </div>
      </div>
      
      <div className="mb-3">
        <label>Address</label>
        <input type="text" className="form-control" ref={getAddress} placeholder="1234 Main St" required="" />
        <div className="invalid-feedback">
          Please enter your shipping address.
        </div>
      </div>
      
      <div className="mb-3">
        <label>Address 2 <span>(Optional)</span></label>
        <input type="text" className="form-control" ref={getAddress2} placeholder="Apartment or suite" />
      </div>

      <div className="row">
        <div className="col-md-5 mb-3">
          <label>City</label>
          <input type="text" className="form-control" ref={getCity} />
          <div className="invalid-feedback">
            Please select a valid country.
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <label>Province</label>
          <select className="custom-select d-block w-100" ref={getProvince} required="">
              <option {...getProvince === 'AB'? 'selected': ''}>AB</option>
              <option {...getProvince === 'BC'? 'selected': ''}>BC</option>
              <option {...getProvince === 'MB'? 'selected': ''}>MB</option>
              <option {...getProvince === 'NB'? 'selected': ''}>NB</option>
              <option {...getProvince === 'NL'? 'selected': ''}>NL</option>
              <option {...getProvince === 'NS'? 'selected': ''}>NS</option>
              <option {...getProvince === 'NT'? 'selected': ''}>NT</option>
              <option {...getProvince === 'NU'? 'selected': ''}>NU</option>
              <option {...getProvince === 'ON'? 'selected': ''}>ON</option>
              <option {...getProvince === 'PE'? 'selected': ''}>PE</option>
              <option {...getProvince === 'QC'? 'selected': ''}>QC</option>
              <option {...getProvince === 'SK'? 'selected': ''}>SK</option>
              <option {...getProvince === 'YT'? 'selected': ''}>YT</option>
          </select>
        </div>

        <div className="col-md-3 mb-3">
          <label>Postal Code</label>
          <input type="text" className="form-control" ref={getPostalCode} placeholder="" required="" />
          <div className="invalid-feedback">
            Zip code required.
          </div>
        </div>

      </div>
    </form>

    <div className ="row pb-4">
        <div className='col-6 col-lg-4 offset-3 offset-lg-4'>
          <button className="btn btn-primary" style={{width:'100%'}} onClick={editUser} type="button">Save and Submit</button>
        </div>          
    </div>

  </div>

  )
}


export default UserSetting;