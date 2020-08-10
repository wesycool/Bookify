import React, {useRef, useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import ReservationCard from '../components/ReservationCard.js'
import axios from 'axios'

function Usersdash() {
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

  const [ userInfo , setUserInfo ] = useState( {} )
  const [ reservationList, setReservationList ] = useState( [] )


  const sampleReview = [
    {
      'review':'review1',
      'rating':'rating1',
      'userID':'5f2cb22b41d8b9da4b160e27',
      'businessID': '5f2c9d930fc92fcfe04fe9cc'
    },
    {
      'review':'review2',
      'rating':'rating2',
      'userID':'5f2cb22b41d8b9da4b160e27',
      'businessID': '5f2c71acd7e4e0cac8181a94'
    },
    {
      'review':'review3',
      'rating':'rating3',
      'userID':'5f2cb22b41d8b9da4b160e27',
      'businessID': '5f2c71acd7e4e0cac8181a94'
    }

  ]
  const [ reviewList, setReviewList ] = useState( sampleReview )

  // ObjectId("5f2cb22b41d8b9da4b160e27")

  useEffect(() => {
    axios.get(`/api/get-user/${splitLocation[2]}`)
    .then(({data}) => {
      getFirstName.current.value = data.firstName
      getLastName.current.value = data.lastName
      getEmail.current.value = data.email
      getAddress.current.value = data.address
      getAddress2.current.value = data.address2
      getCity.current.value = data.city
      getProvince.current.value = data.province
      getPostalCode.current.value = data.postalCode

      const user = { 
        'firstName': data.firstName, 
        'lastName': data.lastName,
        'email': data.email,
        'address':data.address,
        'address2':data.address2,
        'city':data.city,
        'province':data.province,
        'postalCode':data.postalCode
      }
      setUserInfo(user)
      })
  })

  useEffect(() => {
      axios.get(`/api/user-reservation/${splitLocation[2]}`)
        .then(({data}) => {
          const sortList = data.sort((a,b) => {
            const condition = a.Date > b.Date
            return (condition - !condition)
          })

          const newArray = [...sortList]

          setReservationList(newArray)
          })

      // axio.get(`/api/user-review/${splitLocation[2]}`)
      //   .then(({data}) => {
      //     setReviewList(data)
      //     console.log(data)
      //     })
  }, [] )

  function editUser(){
    const data = { 
      "firstName": getFirstName.current.value,
      "lastName": getLastName.current.value,
      "email": getEmail.current.value,
      "address": getAddress.current.value,
      "address2": getAddress2.current.value,
      "city": getCity.current.value,
      "province": getProvince.current.value,
      "postalCode": getPostalCode.current.value,
      "archieve": false
    }
      axios.put(`/api/edit-user/${splitLocation[2]}`,{headers: {'Content-Type': 'application/json'},data})

  }

  return (
    <div className="container">
        <div className="row">

         {/* leftside */}
            <div className="col-md-4 order-md-1 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span>User Dashboard</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div className="col">
                        <div className="card-body text-center">
                          <img className="rounded-circle mb-3 mt-4" src="https://avatars1.githubusercontent.com/u/31528729?s=460&u=47436ea6b0f63a23dbe6fbbc71e75156dc05e40f&v=4" width="160" height="160" />
                        </div>

                        <div>{userInfo.firstName} {userInfo.lastName}</div>
                        <div>{userInfo.email}</div>
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


  



               {/* <!-- My Appoinment --> */}
               <div className="cardBusinessdash" id="reservationList">
                <h4 className="mb-3">My Appointments</h4>
                <div className='row'>
                { reservationList.map( (list) => <ReservationCard list={list}></ReservationCard> ) }
                </div>
                
                <hr className="mb-4" />

              </div>

              <div className="cardBusinessdash" id="reservationList">
                <h4 className="mb-3">My Reviews </h4>
                <div className='row'>
                { reviewList.map( (list) => <ReservationCard list={list}></ReservationCard> ) }
                </div>
                

              </div>

              <hr className="mb-4" />

              <h4 className="mb-3">Setting</h4>
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

                <div className ="row justify-content-md-center pb-4">
                          <button className="btn btn-primary col-5" onClick={editUser} type="button">Save and Submit</button>
                      </div>
              </form>



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
