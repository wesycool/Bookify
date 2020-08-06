import React, {useRef} from "react";
import axios from 'axios';

function SignUpPage() {
    const getName = useRef()
    const getEmail = useRef()
    const getPhone = useRef()
    const getPassword = useRef()
    const confirmPassword = useRef()
    

    function postNewUser(){
        if(getPassword.current.value != ''){
            if (getPassword.current.value === confirmPassword.current.value){
                const data = {
                    "name": getName.current.value,
                    "email": getEmail.current.value,
                    "phone": getPhone.current.value,
                    "password": getPassword.current.value,
                    "archieve": false
                }
      
                axios.post("/api/new-user", {
                    headers: {'Content-Type': 'application/json'},
                    data
                })

            }
        }
    }
    
    return (
        <div className='container'>
            <div className="modal fade bd-example-modal-lg" id="ModalSignUp" tabindex="-1" role="dialog" aria-labelledby="ModalSignUpTitle" aria-hidden="true">

                <div className="modal-dialog modal-lg">
                    <div className="userSignupForm modal-content">
                        <div className="form-container">
                        <div className="image-holder"></div>
                        <form method="post">
                            <h2 className="text-center"><strong>Create</strong> an account.</h2>
                            <div className="form-group"><input className="form-control" type="name" ref={getName} placeholder="Name" required/></div>
                            <div className="form-group"><input className="form-control" type="email" ref={getEmail} placeholder="Email" required/></div>
                            <div className="form-group"><input className="form-control" type="phone" ref={getPhone} placeholder="Phone" required/></div>
                            <div className="form-group"><input className="form-control" type="password" ref={getPassword} placeholder="Password" required/></div>
                            <div className="form-group"><input className="form-control" type="password" ref={confirmPassword} placeholder="Password (repeat)" required/></div>
                            <div className="form-group"><button className="btn btn-primary btn-block" type="button" data-dismiss="modal" onClick={postNewUser}>Sign Up</button></div>
                        </form>
                    </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default SignUpPage;