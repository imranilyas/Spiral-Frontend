import React from "react";
import Accounts from "../components/Accounts";
import NewAccount from "../components/NewAccount";
import Transfer from "../components/Transfer";
import WithdrawDeposit from "../components/WithdrawDeposit";

const NavDisplay = (props) => {
    return (
        <div className = "NavDisplay">
            {props.active === "Create New Account" && <NewAccount />}
            {props.active === "Accounts" && <Accounts />}
            {props.active === "Withdrawl / Deposit" && <WithdrawDeposit />}
            {props.active === "Transfer" && <Transfer />}
        </div>
    );
}

export default NavDisplay;