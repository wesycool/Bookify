import React from "react";

function BusinessCard({list}) {
    const {business, category, location, rating, imgSRC, information} = list
    console.log('Business Card: ', list)
  return (
    <div className='row'>
        <div className="col col-lg-8">
            <div className="row no-gutters rounded overflow-hidden flex-md-row mb-4 shadow h-md-250 position-relative">

                <div className="col-12 col-md-4" style={{margin:'10px'}}>
                    <img src={imgSRC} width="95%" height="160" alt="" />
                </div>
                
                <div className="col resultBoxContent" style={{margin:'10px'}}>
                    <h3 className="mb-0" id="businessName">{business} - {rating}</h3>
                    <strong className="d-inline-block mb-2 textInfo" id="location">{category} - {location}</strong>
                    <p className="mb-auto information">{information}</p>
                    <a href="gotoBusinessPage" className="stretched-link btn btn-secondary">See more information</a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default BusinessCard;
