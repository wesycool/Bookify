import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Browser from "./Browse"
import axios from 'axios'
import "./NavBar.css"


function Navbar(props) {
    const location = useLocation();
    const [ businessList, setList ] = useState( [] )
    const [ fullList, setFullList ] = useState( [] )
    
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



    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom:'10px'}}>
                <Link to="/">
                    <h1 className="navbar-brand" ><i class="fas fa-bookmark"></i> Bookify</h1>
                </Link>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <div className='row'>
                        <div className='col-12 col-md-3 col-lg-12' id="signin">
                            <Link to={location.pathname == '/'? "./businessdashboard/:id": "../businessdashboard/:id"} style={{color:'white'}}>Business Account</Link>
                            <Link to={location.pathname == '/'? "./userdashboard/:id": "../userdashboard/:id"} style={{color:'white'}}>My Account</Link>
                            <a href='' style={{color:'white'}} data-toggle="modal" data-target="#ModalSignIn"> Sign In</a>
                        </div>
                        <div className='col'>
                            <form className="form-inline justify-content-end">
                                <input className="form-control mr-sm-2" type="search" placeholder="e.g. Hair Salon" aria-label="category" id="category"/>
                                <input className="form-control mr-sm-2" type="search" placeholder="e.g. Toronto, Ontario" aria-label="location" id="location"/>
                                <Link to="/">
                                    <button className="btn btn-secondary my-2 my-sm-0" onClick={searchList} type="button">
                                        <i className="fas fa-search"></i> <span id="searchBtn">Search</span></button>
                                </Link>
                                
                            </form>

                        </div>
                    </div>
                </div>
            </nav>

            {location.pathname === "/" ? <Browser list={businessList}></Browser> : ''}
    

        </div>
    )
}

export default Navbar;
