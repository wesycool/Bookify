import React,{useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import axios from 'axios'

function ReservationCard({list}) {
    const location = useLocation()
    const splitLocation = location.pathname.split('/')
    const [ name, setName ] = useState([])
    
    useEffect(() => {
        axios.get(`/api/get-${(list.userID === splitLocation[2])? `business/${list.businessID}` : `user/${list.userID}`}`)
          .then(({data}) => {
                setName(data)
            })
    }, [] )


  return (

    <div className='col-12' style={{marginBottom:'10px'}}>
        <div className="card" style={{backgroundColor:'white'}}>
            <div className="card-body">
                <h5 className="card-title">{(list.userID === splitLocation[2])? `${name.businessName}`:`${name.firstName} ${name.lastName}`}</h5>
                
                <h6 className="card-subtitle mb-2 text-muted">{ moment(list.Date).format('YYYY/MM/DD - hh:mm A')}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{ list.review }</h6>
            </div>
        </div>
    </div>


    );
}

export default ReservationCard;