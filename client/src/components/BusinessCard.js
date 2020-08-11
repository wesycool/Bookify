import React from "react";
import { Link } from "react-router-dom";

function BusinessCard({list}) {
    const {_id, businessName, category, city, information,imgSRC} = list

  return (
    
    <div className='row'>
        <div className="col col-lg-8">
            <Link to={`/business/${_id}`} style={{color:'black'}} className="text-decoration-none">
                <div className="row no-gutters rounded overflow-hidden flex-md-row mb-4 shadow h-md-250 position-relative">

                    <div className="col-12 col-md-4" style={{margin:'10px'}}>
                        <img src={`./assets/img/${imgSRC}`} width="95%" height="160" alt="" />

                    </div>
                    
                    <div className="col resultBoxContent " style={{margin:'10px'}}>
                        <h3 className="mb-0" id="businessName">{businessName}</h3>
                        <strong className="d-inline-block mb-2 textInfo" id="location">{category} - {city}</strong>
                        <p className="mb-auto information">{information}</p>
                        <div className="mb-auto reservationDate">
                        
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    </div>
    );
}

export default BusinessCard;
