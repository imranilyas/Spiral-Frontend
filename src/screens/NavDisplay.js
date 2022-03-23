import React from "react";
import NewAccount from "../components/NewAccount";
import Transfer from "../components/Transfer";
import AccountScreen from "./AccountScreen";
import UserTransaction from "./UserTransaction";

const NavDisplay = (props) => {

    //! Need to remove the transfer section in the future

    return (
        <div className = "NavDisplay">
            {props.active === "Create New Account" && <NewAccount />}
            {props.active === "Accounts" && <AccountScreen />}
            {props.active === "User Transaction" && <UserTransaction modal = {props.modal} />}
            {/* Remove transfer in the future */}
            {props.active === "Transfer" && <Transfer />}
        </div>
    );
}

export default NavDisplay;