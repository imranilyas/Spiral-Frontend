import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
    //! Conditionally Render Create Customer Component...except Sign Out
    //! Feed props in here
    const [role, setRole] = useState("Account Holder");
    const navigate = useNavigate(); 

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

            {role === "Account Holder" ?
                <div className = "Navlinks">
                    <p>Create New Account</p>
                </div>
                    :
                <>
                    <div className="Navlinks">
                        <p>Accounts</p> {/* //! Make transactions be found after clicking on each account !\\ */}
                    </div>
                    <div className="Navlinks">
                        <p>Withdrawl / Deposit</p>
                    </div>
                    <div className="Navlinks">
                        <p>Transfer</p>
                    </div>
                </>
            }
            <div className = "Navlinks">
                <p onClick={logoutHandler}>Sign Out</p>
            </div>
            
        </div>
    );
}

export default Navbar;