import React, { useState } from "react";
import './Components.css';

const Login = () => {

    const [loginInput, setLoginInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    //! Call Axios Request
    const loginHandler = (event) => {
        event.preventDefault();
        console.log("Login");
    }

    return (
        <div className="Login">
            <div>
                <img className="SpiralLogo" src = "/spiral-name.png" alt = "Spiral Name"/>
            </div>
            <form onSubmit={loginHandler} className="LoginForm">
                <input className="textfields" type = "text" placeholder="User ID" value = {loginInput} onChange={e => setLoginInput(e.target.value)} />
                <input className="textfields" type = "password" placeholder="Password" value = {passwordInput} onChange={e => setPasswordInput(e.target.value)} />
                <input type = "submit" value = "Login" className="button LoginButton"/>
            </form>
        </div>
    )
} 

export default Login;