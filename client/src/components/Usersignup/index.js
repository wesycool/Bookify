import React from "react";
import "./style.css"

function Usersignup() {

    return(
        <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
            Sign Up
            </button>
        <div className="modal fade bd-example-modal-lg" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg">
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
        </div>
    );

}

export default Usersignup;