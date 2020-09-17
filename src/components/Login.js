import React from "react";
import HomePage from "./Home";
import '../index.css';

export default function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [show, setShow] = React.useState(false)
    const [invalid, setInvalid] = React.useState(false)

 const  handelClick = (e)=>{
        console.log(show)
        e.preventDefault()
     return (
         email==='ahmedaliou94@gmail.com'&& password==='someFilly'
             ?setShow(true)
             : setInvalid(true),
             setEmail(''),
             setPassword('')
     )}
    if(show){
        return <HomePage/>
    }
    return(
        <React.Fragment>
            <div className="login-page">
                <div className="form">
                    <form className="register-form">
                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(event)=>{setEmail(event.target.value)}}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event => {setPassword(event.target.value)})}
                        />
                        <button onClick={handelClick}>login</button>
                       <span>
                            <p style={{display: invalid ? 'inline' :'none', color:'black'}}>
                            The credential entered is invalid
                            try again or <b/>
                            <a href='#' style={{color:'black'}}>reset your password</a>
                        </p>
                       </span>
                        <hr></hr>
                        <p><a href='C:\Users\ahmed\Desktop\sirus app\forgotPassword.html'> Forgot password ? </a></p>
                        <p><a href='C:\Users\ahmed\Desktop\sirus app\registration.html'> Register </a></p>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
};