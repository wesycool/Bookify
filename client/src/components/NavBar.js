import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Browser from "./Browse"
import UserSignup from "./Usersignup"


function Navbar(props) {
    const location = useLocation();
<<<<<<< HEAD
    const [ businessList, setList ] = useState( list )
    console.log(businessList)

    // useEffect(() => {
    //     fetch("/api/business-list")
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           setList(result.items);
    //         }
    //       )
    //   }, [])
=======
    const [ businessList, setList ] = useState( [] )
    const [ fullList, setFullList ] = useState( [] )
    
    useEffect(() => {
        fetch("/api/business-list")
          .then(res => res.json())
          .then((result) => {
                const list = result.filter( ({archieve}) => archieve === false)
                setList(list)
                setFullList(list)
            })
    }, [] )

>>>>>>> develop

    function searchList(){
        const searchCategory = document.querySelector('#category').value.trim()
        const filtered = (searchCategory === '')? fullList : fullList.filter( ({category}) => category.toLocaleLowerCase() === searchCategory.toLocaleLowerCase())
        setList(filtered)
    }



    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom:'10px'}}>
                <Link to="/">
                    <h2 className="navbar-brand" ><i class="fas fa-bookmark"></i> Bookify</h2>
                </Link>
                <div className="navbar-collapse justify-content-center">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2 " type="search" placeholder="e.g. Hair Salon" aria-label="category" id="category"/>
                        <Link to="/">
                            <button className="btn btn-secondary my-2 my-sm-0" onClick={searchList} type="button">
                                <i className="fas fa-search"></i> <span id="searchBtn">Search</span></button>
                        </Link>
                        
                    </form>
                </div> 



                <div calssName="justify-content-end">
                    <ul className="navbar-nav nav ml-auto">
                        <li className="nav-item">
                            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#ModalSignIn">
                                Sign In
                            </button>
                            <div className="modal fade bd-example-modal-lg" id="ModalSignIn" tabindex="-1" role="dialog" aria-labelledby="ModalSignInTitle" aria-hidden="true">

                                <div className="modal-dialog modal-lg">
                                <div className="userSignupForm modal-content">
                                    <div className="form-container">
                                        <div className="image-holder"></div>
                                        <form method="post">

                                            <h2 className="text-center"><strong>Logo</strong> Log In</h2>
                                            <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                                            <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" /></div>

                                            <div className="form-group"><button className="btn btn-primary btn-block" type="button" data-dismiss="modal">Sign In</button></div>
                                            <a href="" data-toggle="modal" data-target="#ModalSignUp">Sign Up</a>
                                            </form>

                                    </div>
                                </div>
                                </div>
                            </div>  
                            <div className="modal fade bd-example-modal-lg" id="ModalSignUp" tabindex="-1" role="dialog" aria-labelledby="ModalSignUpTitle" aria-hidden="true">

                                <div className="modal-dialog modal-lg">
                                <div className="userSignupForm modal-content">
                                    <div className="form-container">
                                        <div className="image-holder"></div>
                                        <form method="post">
                                            <h2 className="text-center"><strong>Create</strong> an account.</h2>
                                            <div className="form-group"><input className="form-control" type="username" name="username" placeholder="User Name" /></div>
                                            <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                                            <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                                            <div className="form-group"><input className="form-control" type="password" name="password-repeat" placeholder="Password (repeat)" /></div>

                                            <div className="form-group"><button className="btn btn-primary btn-block" type="button" data-dismiss="modal">Sign Up</button></div></form>

                                    </div>
                                </div>
                                </div>
                            </div>  
                        </li>
                    </ul>
                </div>
<<<<<<< HEAD
                

                <div calssName="justify-content-end">
                    <ul className="navbar-nav nav ml-auto">
                        <li className="nav-item">
                            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#ModalSignIn">
                                Sign In
                            </button>
                            <div className="modal fade bd-example-modal-lg" id="ModalSignIn" tabindex="-1" role="dialog" aria-labelledby="ModalSignInTitle" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="userSignupForm modal-content">
                                        <div className="form-container">
                                            <div className="image-holder"></div>
                                            <form method="post">
                                                <h2 className="text-center"><strong>Logo</strong>Sign In</h2>
                                                <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                                                <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                                                <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Sign In</button></div>
                                                <a herf="" data-toggle="modal" data-dismiss="modal" data-target="#ModalSignUp">Sign Up</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade bd-example-modal-lg" id="ModalSignUp" tabindex="-1" role="dialog" aria-labelledby="ModalSignUpTitle" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                <div className="userSignupForm modal-content">
                                    <div className="form-container">
                                        <div className="image-holder"></div>
                                        <form method="post">
                                            <h2 className="text-center"><strong>Create</strong> an account.</h2>
                                            <div className="form-group"><input className="form-control" type="username" name="username" placeholder="User Name" /></div>
                                            <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                                            <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
                                            <div className="form-group"><input className="form-control" type="password" name="password-repeat" placeholder="Password (repeat)" /></div>
                                            <div className="form-group"><button className="btn btn-primary btn-block" type="button" data-dismiss="modal" data-target="#ModalSignIn">Sign Up</button></div>
                                        </form>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
=======
>>>>>>> develop

            </nav>

            {location.pathname === "/" ? <Browser list={businessList}></Browser> : ''}
    

        </div>
    )
}

export default Navbar;
