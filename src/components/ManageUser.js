import React from "react";
import '../index.css';
import Usercontext from "../context/Usercontext";

export function Registration() {
    const [show,setShow] = React.useState(false)
    const[fname,setFname] = React.useState([])
    const[lname,setLname] = React.useState([])
    return(
        <React.Fragment>
    <form action="action_page.php">
        <div className="container">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <label htmlFor="f-name"><b>First Name</b></label>
            <input type="text" placeholder="First Name"
                   name="f-name" value={fname}
                   onChange={(e)=>setFname(e.target.value)}  required />
            <label htmlFor="l-name"><b>last Name</b></label>
            <input type="text" placeholder="last Name"
                   name="l-name" value={lname}
                   onChange={(e)=>setLname(e.target.value)} required />
            <label htmlFor="email"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" name="email" required/>
            <span/>
            <label htmlFor="Phone"><b>Phone Number</b></label>
            <input type="number" placeholder="123-45-678" name="cel-number" required/>
            <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
            <button  className="registerbtn">Register</button>
        </div>
        <p>Already have an account? <a href="C:\Users\ahmed\Desktop\sirus app\login.html">Sign in</a>.</p>
    </form>
</React.Fragment>
    )
}

function ManageUser() {
    return(
        <div>

        </div>
    )
}

function generateId() {
    return ''+ Math.random().toString(36).substr(2,9)
}

export default function Todo() {
    const[todos, setTodos] = React.useState([{
        fname:'samuel',
        lname:'eTO'
    }])
    const [finput, setFinput] = React.useState('')
    const [linput, setLinput] = React.useState('')
    const handleSubmit = ()=>{
        setTodos((todos)=>todos.concat({
            fname : finput,
            lname: linput,
            id: generateId()
        }))
        setFinput('')
        setLinput('')
    }
    const removeTodo = (id)=>setTodos((todos)=>
        todos.filter((t)=>t.id!==id))

    return(
        <Usercontext.Provider value={todos}>
    <div>
        <input
            type='text'
            placeholder='first name'
            value = {finput}
            onChange={(e)=>setFinput(e.target.value)}/>
        <input
            type='text'
            placeholder='last name'
            value = {linput}
            onChange={(e)=>setLinput(e.target.value)}/>
        <button onClick={handleSubmit}>register</button>
        <Register/>
    </div>
        </Usercontext.Provider>
    )
}

export function Register() {
    const  fullName= React.useContext(Usercontext);
    return(
       <ul>
           {fullName.map(({fname,lname,id})=> (
               <li key={id}>
                   <span>{fname},{lname}</span>
               </li>
           ))}
       </ul>
           )
}


