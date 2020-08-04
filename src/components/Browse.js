import React from "react";
import BusinessCard from './BusinessCard'

function Browse({list}) {
    console.log('from Browse',list)

    return(
        <div>
            {list.map( (value) => <BusinessCard list={value}/>)}

        </div>
    )

}

export default Browse;