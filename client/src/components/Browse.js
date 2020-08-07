import React from "react";
import BusinessCard from './BusinessCard'
// import ReservationCard from './ReservationCard'

function Browse({list}) {
    return(
        <div className='container'>
            <h2 className="subtitle">Recommendation</h2>
            {/* <ReservationCard></ReservationCard> */}
            {list.map( (value) => <BusinessCard key={value._id} list={value}/>)}
        </div>
    )
}

export default Browse;