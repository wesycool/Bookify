import React, {useState, useEffect, useRef} from "react";
import { useLocation } from "react-router-dom";
import NumberFormat from 'react-number-format';

import ReservationCard from '../components/ReservationCard'
import axios from 'axios'
import './Temp.css'


function Temp() {
  const location = useLocation();
  const businessID = location.pathname.split('/')
  const [ starRating, setStarRating ] = useState()
  const [ averageRating, setAverageRating ] = useState()
  const [ business, setList ] = useState( [] )
  const [ reviewList, setReviewList ] = useState([])
  const [ roundRating, setRoundRating] = useState()
  const {category, businessName, address1, address2, city, province, postalCode, email, phone, information, imgSRC} = business
  const newReview = useRef()

  console.log(Math.floor(averageRating,0))
  useEffect(() => {
    fetch("/api/business-list")
      .then(res => res.json())
      .then(
        (result) => {
          const [getBusiness] = result.filter( ({_id}) =>  _id.includes(businessID[2]))
          setList(getBusiness)
        }
      )

      axios.get(`/api/business-review/${businessID[2]}`)
      .then(({data}) => {
        if (data.length !== 0) {
          const sortList = data.sort((a,b) => {
            const condition = a.Date < b.Date
            return (condition - !condition)
          })
  
          const newArray = [...sortList]
  
          const getRating = newArray.map( ({rating}) => rating)
          const total = getRating.reduce((acc,cur) => acc + cur)
          const average = total/getRating.length
          const roundAverage = average.toFixed(1)

          setAverageRating(average)
          setRoundRating(roundAverage)
          setReviewList(newArray)
        }

        })
  }, [])  

  function starClick(event){
    setStarRating(event.target.id) 
  }

  function saveReview(){
    if(sessionStorage.account !== 'business'){
      const data = {
        "review": newReview.current.value,
        "rating": starRating,
        "userID": sessionStorage.id,
        "businessID": businessID[2]
      }
      axios.post('/api/new-review', {
        headers: {'Content-Type': 'application/json'},
        data
      })
  
      window.location.reload(true)
    }
  }

  return (
  <div className="container mt-4">
    <div className="row">

      {/* main business card */}
      <div className="col mb-4">
        <div className="card" style={{height:'100%'}}>
          <img className="card-img-top" src={`../assets/img/${imgSRC}`} alt="Card cap" style={{height:"300px"}}/>
          <div className="card-body">
            <h1 className="card-text h1">{businessName}</h1>
            <h5 style={{color:'#ffc107', textAlign:'center'}} data-toggle="tooltip" data-placement="top" title={roundRating}>
              <p>{!averageRating? 'No Review' : ''}</p>
              <i className={ !averageRating? '': Math.floor(averageRating,0) >= 1? "fas fa-star text-warning" : Math.floor(averageRating,0) + averageRating%1 >= 0.5? "fas fa-star-half-alt" : "far fa-star"}></i>
              <i className={ !averageRating? '': Math.floor(averageRating,0) >= 2? "fas fa-star text-warning" : Math.floor(averageRating,0) + averageRating%1 >= 1.5? "fas fa-star-half-alt" : "far fa-star"}></i>
              <i className={ !averageRating? '': Math.floor(averageRating,0) >= 3? "fas fa-star text-warning" : Math.floor(averageRating,0) + averageRating%1 >= 2.5? "fas fa-star-half-alt" : "far fa-star"}></i>
              <i className={ !averageRating? '': Math.floor(averageRating,0) >= 4? "fas fa-star text-warning" : Math.floor(averageRating,0) + averageRating%1 >= 3.5? "fas fa-star-half-alt" : "far fa-star"}></i>
              <i className={ !averageRating? '': Math.floor(averageRating,0) >= 5? "fas fa-star text-warning" : Math.floor(averageRating,0) + averageRating%1 >= 4.5? "fas fa-star-half-alt" : "far fa-star"}></i>
            </h5>
            
            
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
            <p className="p"><i className="fas fa-envelope"></i> {email}</p>
            <p className="p"><i className="fas fa-phone"></i> <NumberFormat value={phone} displayType={'text'} format="(###) ###-####" /></p>
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
            <h1 className="h1">Write a Review</h1>

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

            <div className="input-group pl-4 pr-4">
              <input className="form-control" type="text" placeholder="Write your Review" ref={newReview} />
              <button className="btn btn-secondary" onClick={saveReview} type="submit"> Review </button> 
            </div>


          </div>
        </div>
      </div>
    </div>

    <form className='card'>
      <h4 className="h1 mb-3 pt-3">Reviews </h4>
      <div className='row pl-5 pr-5 pb-3'>
        { Object.entries(reviewList).map( ([key,list]) => <ReservationCard key={key} list={list}></ReservationCard> ) }
      </div>
    </form>

  </div>
  );
}

export default Temp;
