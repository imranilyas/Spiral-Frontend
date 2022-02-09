import React, {useEffect, useState} from "react";
import Accounts from "../components/Accounts";
import Transactions from "../components/Transactions";

const AccountScreen = (props) => {

    const [viewAccounts, setViewAccounts] = useState();

    const viewTransactionsHandler = (input) => {
        setViewAccounts(input);
    }

    useEffect(() => {
        console.log("UseEffect")
        setViewAccounts(true);
    }, [props.reset]);

    return(
        <>
            {viewAccounts ?
                <Accounts viewTransactions = {viewTransactionsHandler}/>
                :
                <Transactions viewAllAccounts = {viewTransactionsHandler}/>
            }
        </>
    );
}

export default AccountScreen;