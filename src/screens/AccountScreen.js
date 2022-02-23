import React, {useEffect, useState} from "react";
import Accounts from "../components/Accounts";
import Transactions from "../components/Transactions";

const AccountScreen = (props) => {

    const [viewAccounts, setViewAccounts] = useState();
    const [accountNumber, setAccountNumber] = useState("");

    // Conditionally rendering Accounts or Transactions Component
    const viewTransactionsHandler = (input) => {
        setViewAccounts(input);
    }

    // Pass account number through props
    const captureAccountNumber = (input) => {
        setAccountNumber(input);
    }

    useEffect(() => {
        console.log("UseEffect")
        setViewAccounts(true);
    }, [props.reset]);

    return(
        <>
            {viewAccounts ?
                <Accounts viewTransactions = {viewTransactionsHandler} accountHandler = {captureAccountNumber}/>
                :
                <Transactions viewAllAccounts = {viewTransactionsHandler} accountNumber = {accountNumber}/>
            }
        </>
    );
}

export default AccountScreen;