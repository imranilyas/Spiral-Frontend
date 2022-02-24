import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {

    const navigate = useNavigate(); 

    // Uplifts current component name
    const currentComponent = (element) => {
        props.activeHandler(element);
    } 

    //! May have to reset some states here
    const logoutHandler = () => {
        navigate('/');
    }

    return (
        <div className = "Navbar">
            <img className="SpiralLogoHome" src = "/spiral-name.png" alt = "Spiral Name"/>
            <div className="Navheader">
                <h2>Welcome to Spiral Banking</h2>
                {/* Add Username here */}
                <h3 className="Username">Name</h3>
            </div>

            {props.role === "Account Holder" ?
                <>
                    <div className={"Navlinks " + (props.active === "Accounts" && "ActiveComponent")}>
                        <p onClick={e => currentComponent(e.target.innerHTML)}>Accounts</p>
                    </div>
                    <div className={"Navlinks " + (props.active === "Withdrawl / Deposit" && "ActiveComponent")}>
                        <p onClick={e => currentComponent(e.target.innerHTML)}>Withdrawl / Deposit</p>
                    </div>
                    <div  className={"Navlinks " + (props.active === "Transfer" && "ActiveComponent")}>
                        <p onClick={e => currentComponent(e.target.innerHTML)}>Transfer</p>
                    </div>
                </>
            :
                <div className={"Navlinks " + (props.active === "Create New Account" && "ActiveComponent")}>
                    <p onClick={e => currentComponent(e.target.innerHTML)}>Create New Account</p>
                </div>
            }
            <div className = "Navlinks">
                <p onClick={logoutHandler}>Sign Out</p>
            </div>
            
        </div>
    );
}

export default Navbar;