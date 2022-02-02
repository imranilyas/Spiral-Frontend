import React from "react";

const Navbar = () => {
    //! Conditionally Render Create Customer Component...except Sign Out
    return (
        <div className = "Navbar">
            <img className="SpiralLogoHome" src = "/spiral-name.png" alt = "Spiral Name"/>
            <div>
                {/* Some sort of welcome here */}
                <h2>Spiral Banking</h2>
            </div>
            <div className = "Navlinks">
                <p>Create New Account</p>
                <p>Accounts</p> {/* //! Make transactions be found after clicking on each account !\\ */}
                <p>Withdrawl / Deposit</p>
                <p>Transfer</p>
                <p>Sign Out</p>
            </div>
        </div>
    );
}

export default Navbar;