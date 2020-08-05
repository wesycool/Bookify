import React, {useState, useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import './Temp.css'


function Temp() {
  const location = useLocation();
  const businessID = location.pathname.split('/')
  const [ business, setList ] = useState( [] )
  const {category, businessName,address1,address2,city,province,email,phone, imgSRC,information} = business
  

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
  

  return (
    <div className="container">
      <div className='row'>
        <div className='col' style={{marginBottom: '20px'}}>

          <div className="card" style={{height:'100%'}}>
          <img className="card-img-top" src={imgSRC} alt="Card image cap" style={{height:"300px"}}/>
            <div className="card-body">
              <h1 className="card-text">{businessName}</h1>
              <p>{category}</p>
              <p>{information}</p>
            </div>
          </div>

        </div>


          <div className="col-md-5 col-lg-3" style={{marginBottom: '20px'}}>
              <div className="card" style={{height:'100%'}}>
                <img src="https://snowmap.fast-sfc.com/base_snow_map/13/2182/2995.png" alt="map" style={{height:"200px"}}/>
                <div className="container" style={{marginTop:'10px'}}>
                  <h1>Contact Us</h1>
                  <p>{address1} {"\n"} {address2} {"\n"} {city}, {province}</p>
                  <p>Email: {email}</p>
                  <p>Phone: {phone}</p>
                </div>

              </div>
          </div>


        </div>

      <hr className="new1"/>

      <div className='row'>
        <div className="col-12 col-md-6" style={{marginBottom:"20px"}}>
          <div className="card">
              <div className="card-body">
                  <h1>Overall Star Rating </h1>
                  <div className="rating">
                    <input type="radio" name="rating" value="5" id="5"/>
                    <label for="5">☆</label>
                    <input type="radio" name="rating" value="4" id="4"/>
                    <label for="4">☆</label>
                    <input type="radio" name="rating" value="3" id="3"/>
                    <label for="3">☆</label>
                    <input type="radio" name="rating" value="2" id="2"/>
                    <label for="2">☆</label>
                    <input type="radio" name="rating" value="1" id="1"/>
                    <label for="1">☆</label>
                  </div>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>
          </div>


          <div className="col-12 col-md-6" style={{marginBottom:"20px"}}>
            <div className="card" style={{height:'100%'}}>
              <div  className="card-body">
                <h1>Make a Reservation </h1>
                <br/>
                <h5  style={{color: "white", textAlign: "center"}} className="card-title">{businessName}</h5>
                <div>
                  <a href="#" className="btn btn-danger  btn-block">Book It Now!</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Temp;
