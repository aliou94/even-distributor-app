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

function ResetCode() {
    return(
      <div className='login-page'>
          <form className="form ">
              <input type="password" placeholder="new-password"/>
              <input type="password" placeholder="confirm-password"/>
              <button>Update-Password</button>
          </form>
      </div>
    )
}

export function ResetPassword() {
    const[show,setShow]=React.useState(false)
    const [password, setPassword] = React.useState('')
    const [invalid, setInvalid] = React.useState(false)
    const  handelClick = (e)=>{
        e.preventDefault()
       return  (
           password ==='someFilly'
               ?setShow(true)
               : setInvalid(true)

    )}

    return(
        show?<ResetCode/>:null,
        <div className="login-page">
                <form className="form">
                    <input
                        type="password"
                        placeholder="Temporary Pass code"
                        value={password}
                        onChange={(event => {setPassword(event.target.value)})}
                    />
                    <span style={{display: invalid ? 'inline' :'none', color:'black'}}>
                       <p>Invalid pass code</p>
                    </span>
                    <hr/>
                    <span>
                            <button onClick={handelClick}>verify</button>
                    </span>

                </form>
        </div>
    )
}


