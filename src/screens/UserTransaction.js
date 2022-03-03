import React from "react";
import Transfer from "../components/Transfer";
import WithdrawDeposit from "../components/WithdrawDeposit";

const UserTransaction = () => {
    return (
        <div className="UserTransactionScreen">
            <WithdrawDeposit/>
            <Transfer/>
        </div>
    );
}

export default UserTransaction;