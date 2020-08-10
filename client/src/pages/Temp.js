import React, {useState, useEffect, useRef} from "react";
import { Link, useLocation } from "react-router-dom";
import NumberFormat from 'react-number-format';
import axios from 'axios'
import './Temp.css'


function Temp() {
  const location = useLocation();
  const businessID = location.pathname.split('/')
  const [ starRating, setStarRating ] = useState()
  const [ business, setList ] = useState( [] )
  const {category, businessName, address1, address2, city, province, postalCode, email, phone, information, imgSRC} = business
  const newReview = useRef()

  useEffect(() => {
    fetch("/api/business-list")
      .then(res => res.json())
      .then(
        (result) => {
          const [getBusiness] = result.filter( ({_id}) =>  _id.includes(businessID[2]))
          setList(getBusiness)
        }
      )
  }, [])  

  function starClick(event){
    setStarRating(event.target.id) 
  }

  function saveReview(){
    const data = {
      "review": newReview.current.value,
      "rating": starRating,
      "userID": sessionStorage.id,
      "businessID": businessID[2]
    }

    console.log(data)

    axios.post('/api/new-review', {
      headers: {'Content-Type': 'application/json'},
      data
    })


  }

  return (
    <div className="container mt-4">
      <div className="row">

        {/* main business card */}
        <div className="col mb-4">
          <div className="card" style={{height:'100%'}}>
            <img className="card-img-top" src={`../assets/img/${imgSRC}`} alt="Card image cap" style={{height:"300px"}}/>
            <div className="card-body">
              <h1 className="card-text h1">{businessName}</h1>
              <p className="p">{category}</p>
              <p className="p">{information}</p>
            </div>
          </div>
        </div>
 

        {/* contact info */}
        <div className="col-md-5 col-lg-3 mb-4">
          <div className="card" style={{height:'100%'}}>
            <img src="https://snowmap.fast-sfc.com/base_snow_map/13/2182/2995.png" alt="map" style={{height:"200px"}}/>
            <div className="card-body" style={{marginTop:'10px'}}>
              <h1 className="h1">Contact Us</h1>
              <p className="p">{address1} <br/> {(address2)? `${address2}<br/>` : ''} {`${city}, ${province}  ${postalCode}`}</p>
              <p className="p"><i class="fas fa-envelope"></i> {email}</p>
              <p className="p"><i class="fas fa-phone"></i> <NumberFormat value={phone} displayType={'text'} format="(###) ###-####" /></p>
              <a href="" className="btn btn-danger mb-4 btn-block" data-toggle="modal" data-target="#ModalBooking" >Book It Now!</a>
            </div>
          </div>
        </div>

      </div>

      <hr className="new1"/>

      <div className="row">
        <div className="col" style={{marginBottom:"20px"}}>
          <div className="card">
            <div className="card-body">
              <h1 className="h1">Overall Star Rating </h1>

              <div className="rating">
                <input type="radio" name="rating" value="5" id="5" onClick={starClick}/>
                <label for="5">☆</label>
                <input type="radio" name="rating" value="4" id="4" onClick={starClick}/>
                <label for="4">☆</label>
                <input type="radio" name="rating" value="3" id="3" onClick={starClick}/>
                <label for="3">☆</label>
                <input type="radio" name="rating" value="2" id="2" onClick={starClick}/>
                <label for="2">☆</label>
                <input type="radio" name="rating" value="1" id="1" onClick={starClick}/>
                <label for="1">☆</label>
              </div>

              <div className="input-group">
                <input className="form-control" type="text" placeholder="Write your Review" ref={newReview} />
                <button onClick="publishReview" class="btn btn-secondary" type="button" onClick={saveReview}> Review </button> 
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
    // <div className="container mt-5">
    //   <div className='row'>
    //     <div className='col' style={{marginBottom: '20px'}}>

    //       <div className="card" style={{height:'100%'}}>

    //       <img className="card-img-top" src={`../assets/img/${imgSRC}`} alt="Card image cap" style={{height:"300px"}}/>
    //         <div className="card-body">
    //           <h1 className="card-text h1">{businessName}</h1>

    //           <p className="p">{category}</p>
    //           <p className="p">{information}</p>

    //         </div>
    //       </div>

    //     </div>
 


    //       <div className="col-md-5 col-lg-3" style={{marginBottom: '20px'}}>
  

    //           </div>


    //       </div>


    //     </div>

    //   <hr className="new1"/>
    // <div className="container">
    //   <div className='row'>
        
    //       </div>

    //   </div>
    // </div>
  );
}

export default Temp;
