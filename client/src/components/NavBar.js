import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Jumbo from "./Jumbo";
import Browser from "./Browse"
import axios from 'axios'
import "./NavBar.css"


function Navbar(props) {
    const location = useLocation();
    const [ businessList, setList ] = useState( [] )
    const [ fullList, setFullList ] = useState( [] )
    const [ storeid, setStoreId ] = useState( [] )
    
    useEffect(() => {
        axios.get("/api/business-list")
          .then(({data}) => {
                const list = data.filter( ({archieve}) => archieve === false)
                setList(list)
                setFullList(list)
            })
    }, [] )


    function searchList(){
        const searchCategory = document.querySelector('#category').value.trim()
        const filterCategory = (searchCategory === '')? fullList : fullList.filter( ({category}) => category.toLocaleLowerCase() === searchCategory.toLocaleLowerCase())

        // Location Filter
        const getLocation = document.querySelector('#location').value.trim()
        const splitLocation = getLocation.split(/[\s,]+/)

        const getCity =  fullList.filter( ({city}) => city.toLowerCase().indexOf( splitLocation[0].toLowerCase() )>-1 )
        const getProvince =  fullList.filter( ({province}) => province.toLowerCase().indexOf( splitLocation[0].toLowerCase() )>-1 )
        const concatCityProvince = [...getCity, ...getProvince].filter((item, pos) => [...getCity, ...getProvince].indexOf(item) === pos)

        const getCityProvince = (splitLocation.length > 1)? fullList.filter( ({province}) => province.toLowerCase().indexOf( splitLocation[1].toLowerCase() )>-1 ) : concatCityProvince
        const filterLocation = concatCityProvince.filter( location => getCityProvince.includes(location))

        // Search Filter on Both Category and Location Combination
        const filterCategoryLocation = filterCategory.filter( list => filterLocation.includes(list) )
        const filterLocationCategory = filterLocation.filter( list => filterCategory.includes(list) )
        const filterSearch = [...filterCategoryLocation, ...filterLocationCategory].filter((item, pos) => [...filterCategoryLocation, ...filterLocationCategory].indexOf(item) === pos)
    
        setList(filterSearch)
    }

    function changeID(){
        setStoreId(sessionStorage.id)
    }

    function signOut(){
        sessionStorage.clear()
        document.querySelector('#userAccountLink').setAttribute('style','display:none')
        document.querySelector('#businessAccountLink').setAttribute('style','display:none')
        document.querySelector('#signInLink').setAttribute('style','display:initial; color:white')
        document.querySelector('#signOutLink').setAttribute('style','display:none')
        
    }



    return (
        <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <Link to="/">
                    <h1 className="navbar-brand" ><i className="fas fa-bookmark"></i> Bookify</h1>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <div className='row'>
                        <div className='col-12 col-md-3 col-lg-12' id="signin">
                            <Link to={location.pathname == '/'? `./businessdashboard/${storeid}`: `../businessdashboard/${storeid}`} onClick={changeID} style={{display:'none'}} id="businessAccountLink">Business Account</Link>
                            <Link to={location.pathname == '/'? `./userdashboard/${storeid}`: `../userdashboard/${storeid}`} onClick={changeID} style={{display:'none'}} id="userAccountLink">My Account</Link>
                            <a href='' style={{color:'white'}} data-toggle="modal" data-target="#ModalSignIn" id='signInLink'>Sign In</a>
                            <a href='/' style={{color:'white'}} id='signOutLink' style={{display:'none'}} onClick={signOut}> Sign Out</a>
                        </div>
                        <div className='col'>
                            <form className="form-inline justify-content-end">
                                <input className="form-control mr-sm-2" type="search" placeholder="e.g. Hair Salon" aria-label="category" id="category"/>
                                <input className="form-control mr-sm-2" type="search" placeholder="e.g. Toronto, ON" aria-label="location" id="location"/>
                                <Link to="/">
                                    <button className="btn btn-secondary my-2 my-sm-0" onClick={searchList} type="button">
                                        <i className="fas fa-search"></i> <span id="searchBtn">Search</span></button>
                                </Link>
                                
                            </form>

                        </div>
                    </div>
                </div>
            </nav>
            {location.pathname === "/" ? <Jumbo /> : ''}
            {location.pathname === "/" ? <Browser list={businessList}></Browser> : ''}
    

        </div>
    )
}

export default Navbar;
