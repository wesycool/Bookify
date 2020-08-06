import React from "react";
import { Link, useLocation } from "react-router-dom";

function Modal() {
  const location = useLocation();


  return (
    <div className='container'>
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
                                <Link to={ location ==='/' ? './signuppage' : '../signuppage' } >Sign Up</Link>
                                </form>

                        </div>
                    </div>
                </div>
            </div>  



    </div>
  );
}

export default Modal;