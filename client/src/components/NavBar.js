import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Browser from "./Browse"


function Navbar(props) {
    const location = useLocation();
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
                <div className="navbar-collapse justify-content-end">
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
     
                            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#ModalSignUp">
                                Sign Up 
                            </button>
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

                                            <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Sign Up</button></div></form>
                                    </div>
                                </div>
                                </div>
                            </div>  
                        </li>


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
                                            <h2 className="text-center"><strong>Logo</strong> logIn</h2>
                                            <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email" /></div>
                                            <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" /></div>

                                            <div className="form-group"><button className="btn btn-primary btn-block" type="submit">Sign Up</button></div></form>
                                    </div>
                                </div>
                                </div>
                            </div>  
                        </li>
                    </ul>
                </div>

            </nav>

            {location.pathname === "/" ? <Browser list={businessList}></Browser> : ''}
    

        </div>
    )
}


// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//       <div className="container navbar-brand">
//       <Link className="navbar-brand" to="/" className={ window.location.pathname === "/" || window.location.pathname === "/landing"
//                   ? "nav-link active"
//                   : "nav-link"}>
//         Spart
//       </Link>
//       </div>
//       <div className="searchbar nav-item">
//           <p> temp Search area here</p>
//           {/* <SearchArea></SearchArea> */}
//       </div>
//         <div calssName="justify-content-end">
//             <ul className="navbar-nav nav ml-auto">
//             <li className="nav-item">
//             <Link
//                 to="/discover"
//                 className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
//                 >
//                 Discover
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link
//                 to="/discover"
//                 className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
//                 >
//                 About Us
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link
//                 to="/search"
//                 className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
//                 >
//                 My Page
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link
//                 to="/Sign In"
//                 className={window.location.pathname === "/singup" ? "nav-link active" : "nav-link"}
//                 >
//                 <button type="button" className="btn btn-secondary">Sing Up</button>
//                 </Link>
//             </li>
//             <li className="nav-item">
//                 <Link
//                 to="/Sign In"
//                 className={window.location.pathname === "/singin" ? "nav-link active" : "nav-link"}
//                 >
//                 <button type="button" className="btn btn-secondary">Sing In</button>
//                 </Link>
//             </li>
//             </ul>
//         </div>
//     </nav>
//   );
// }

export default Navbar;
