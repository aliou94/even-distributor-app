import React from "react";
import '../index.css';



export default function Login() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [show, setShow] = React.useState(false)
    const [invalid, setInvalid] = React.useState(false)

    const  handelClick = (e)=>{
        e.preventDefault()
        if(email === 'ahmedaliou94@gmail.com'&& password === 'somefilly'){
            return (
                setShow(true)
            )} else {
            return(
                setInvalid(true),
                    setEmail(''),
                    setPassword('')
            )
        }
    }

    if(show){
        return (
            <div>
                The main page component should be implemented here
            </div>
        )
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
                            type="text"
                            placeholder="password"
                            value={password}
                            onChange={(event => {setPassword(event.target.value)})}
                        />
                        <button onClick={handelClick}>login</button>
                        <p style={{display: invalid ? 'inline' :'none', color:'black'}}>
                            The credential entered is invalid
                            try again or <b/>
                            <a href='#' style={{color:'black'}}>reset your password</a>
                        </p>
                        <p><a href='C:\Users\ahmed\Desktop\sirus app\forgotPassword.html'> Forgot password ? </a></p>
                        <p><a href='C:\Users\ahmed\Desktop\sirus app\registration.html'> Register </a></p>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
};