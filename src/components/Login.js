import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Components.css';

const Login = () => {

    const [loginInput, setLoginInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const navigate = useNavigate();

    //! Call Axios Request
    const loginHandler = (event) => {
        event.preventDefault();
        console.log("Login");
        navigate('/user');
    }

    return (
        <div className="Login">
            <div>
                <img className="SpiralLogo" src = "/spiral-name.png" alt = "Spiral Name"/>
            </div>
            <form onSubmit={loginHandler} className="LoginForm">
                <input className="LoginTextfields" type = "text" placeholder="User ID" value = {loginInput} onChange={e => setLoginInput(e.target.value)} />
                <input className="LoginTextfields" type = "password" placeholder="Password" value = {passwordInput} onChange={e => setPasswordInput(e.target.value)} />
                <input type = "submit" value = "Login" className="button LoginButton"/>
            </form>
        </div>
    )
} 

export default Login;