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

    const returnToAccountsHandler = () => {
        props.viewAllAccounts(true);
    }

    useEffect(() => {
        console.log("Inside useEffect for Transactions");
        setTransactionList(data);
    }, []);

    return (
        <div className="NewAccount">
            <div>
                <h1>Transactions</h1>
                <p onClick={returnToAccountsHandler}>{"< Back"}</p>
            </div>
            {transactionList.map(transaction => {
                // Formatting the date and time
                let date = new Date(transaction.time);
                let hours = date.getHours();
                let minutes = date.getMinutes();
                let time = "AM";
                if(hours > 12) {
                    hours -= 12;
                    time = "PM";
                }
                if(minutes < 10) {
                    minutes = "0" + minutes;
                }
                return (
                    <div className="Transaction" key = {transaction.reference_number}>
                        <div className="TransColumn">
                            <label>{date.toLocaleString('default', {month: 'long'}) + " " + date.getDate() + ", " + date.getFullYear() + " "}</label>
                            <label>{hours + ":" + minutes + time + " "}</label>
                        </div>
                        <div className="TransColumn Right">
                            <label className={transaction.type === "Withdraw" ? "Red" : "Green"}>{(transaction.type === "Withdraw" ? "-" : "+")  + transaction.amount.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</label>
                            <label>${transaction.current_balance.toLocaleString(undefined, {minimumFractionDigits:2, maximumFractionDigits:2})}</label>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Transactions;