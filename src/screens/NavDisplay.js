import React, {useState} from "react";
import NewAccount from "../components/NewAccount";
import Transfer from "../components/Transfer";
import WithdrawDeposit from "../components/WithdrawDeposit";
import AccountScreen from "./AccountScreen";

const NavDisplay = (props) => {

    const [reset, setReset] = useState(true);

    const resetHandler = () => {
        console.log("resetHandler");
        setReset(prev => !prev);
    }

    return (
        <div className = "NavDisplay">
            {props.active === "Create New Account" && <NewAccount />}
            {props.active === "Accounts" && <AccountScreen reset = {reset}/>}
            {props.active === "Withdrawl / Deposit" && <WithdrawDeposit />}
            {props.active === "Transfer" && <Transfer />}
        </div>
    );
}

export default NavDisplay;