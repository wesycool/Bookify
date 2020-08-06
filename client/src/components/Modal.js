import React from "react";

function Modal() {
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
                            <div className="form-group"><button className="btn btn-primary btn-block" type="button" data-dismiss="modal">Sign Up</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  );
}

export default Modal;