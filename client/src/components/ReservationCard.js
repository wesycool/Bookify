import React,{useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import axios from 'axios'

function ReservationCard({list}) {
    const location = useLocation()
    const splitLocation = location.pathname.split('/')
    const [ name, setName ] = useState([])
    
    useEffect(() => {
        axios.get(`/api/get-${(list.userID === splitLocation[3])? `business/${list.businessID}` : `user/${list.userID}`}`)
          .then(({data}) => {
                setName(data)
            })
    }, [] )


  return (

    <div className='col-12' style={{marginBottom:'10px'}}>
        <div className="card shadow-sm rounded" style={{backgroundColor:'white'}}>
            <div className="card-body">
                <h5 className="card-title">{(list.userID === splitLocation[3])? `${name.businessName}`:`${name.firstName} ${name.lastName}`}</h5>
                    <h5 style={{color:'#ffc107'}}>
                    <i className={ !list.rating? '': list.rating >= 1? "fas fa-star text-warning" : "far fa-star"}></i>
                    <i className={ !list.rating? '': list.rating >= 2? "fas fa-star text-warning" : "far fa-star"}></i>
                    <i className={ !list.rating? '': list.rating >= 3? "fas fa-star text-warning" : "far fa-star"}></i>
                    <i className={ !list.rating? '': list.rating >= 4? "fas fa-star text-warning" : "far fa-star"}></i>
                    <i className={ !list.rating? '': list.rating >= 5? "fas fa-star text-warning" : "far fa-star"} ></i>
                    </h5>
                <h6 className="card-subtitle mb-2 text-muted">{ moment(list.Date).format('YYYY/MM/DD - hh:mm A')}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{ list.review }</h6>
            </div>
        </div>
    </div>


    );
}

export default ReservationCard;