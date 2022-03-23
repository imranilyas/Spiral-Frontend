import React from "react";
import Transfer from "../components/Transfer";
import WithdrawDeposit from "../components/WithdrawDeposit";

const UserTransaction = (props) => {
    return (
        <div className="UserTransactionScreen">
            <WithdrawDeposit modal = {props.modal} />
            <Transfer modal = {props.modal} />
        </div>
    );
}

export default UserTransaction;