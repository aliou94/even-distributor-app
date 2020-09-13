import React from "react";
import '../index.css';

export function ForgotPassword() {
    return(
        <div className="login-page">
            <div className="form">
                <form className="register-form">
                    <input type="text" placeholder="Email"/>
                    <button>send Temporary code</button>

                </form>

            </div>

        </div>
    )
}

export function Registrtion() {
    return(
        <React.Fragment>
            <form action="action_page.php">
                <div className="container">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>


                    <label htmlFor="f-name"><b>First Name</b></label>
                    <input type="text" placeholder="First Name" name="f-name" required/>

                    <label htmlFor="l-name"><b>last Name</b></label>
                    <input
                        type="text"
                        placeholder="last Name"
                        name="l-name"
                        required
                    />

                    <span>
                        <label htmlFor="email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email"/>
                    </span>
                    <br/>
                    <span> <label htmlFor="Phone"><b>Phone Number</b></label>
                        <input type="number" placeholder="123-45-678" name="cel-number" required/>
                       </span>

                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                    <button type="submit" className="registerbtn">Register</button>
                </div>

                <div className="container sign-in">
                    <p>Already have an account? <a href="C:\Users\ahmed\Desktop\sirus app\login.html">Sign in</a>.</p>
                </div>
            </form>
        </React.Fragment>
    )
}