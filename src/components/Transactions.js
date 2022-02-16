import React, { useEffect, useState } from "react";

//! Will be removed once axios is connected
const data = [
    {reference_number: 765432, time: Date.now(), type: "Withdraw", amount: 45.00, current_balance: 44},
    {reference_number: 7432, time: Date.now(), type: "Deposit", amount: 465.00, current_balance: 920},
    {reference_number: 76, time: Date.now(), type: "Deposit", amount: 425.00, current_balance: 87765.465},
    {reference_number: 765, time: Date.now(), type: "Withdraw", amount: 5.00, current_balance: 76},
    {reference_number: 876, time: Date.now(), type: "Deposit", amount: 425.00, current_balance: 876},
];

const Transactions = (props) => {

    const [transactionList, setTransactionList] = useState([]);

    useEffect(() => {
        console.log("Inside useEffect for Transactions");
        setTransactionList(data);
    }, []);

    return (
        <div className="NewAccount">
            <div>
                <h1>Transactions</h1>
            </div>
            {transactionList.map(transaction => {
                let date = new Date(transaction.time);
                return (
                    <div className="Transaction" key = {transaction.reference_number}>
                        {date.toLocaleString('default', {month: 'long'}) + " " + date.getDate() + ", " + date.getFullYear() + " "}
                        {(transaction.type === "Withdraw" ? "-": "+")  + transaction.amount.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}
                        {transaction.current_balance.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}
                    </div>
                );
            })}
        </div>
    );
}

export default Transactions;