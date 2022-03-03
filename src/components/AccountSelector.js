import React from "react";

import './Components.css';

const data = [
    {"account_number": 23424, "current_balance": 365445365.46},
    {"account_number": 897654, "current_balance": 4.20},
    {"account_number": 2345, "current_balance": 3454.20},
    {"account_number": 98765434567, "current_balance": 57467.65},
    {"account_number": 987654, "current_balance": 574467.65}
];

const AccountSelector = () => {
    return(
        <select>
            {data.map((account) => {
                return(
                    <option value={account.account_number}>{account.account_number}</option>
                );
            })}
        </select>
    );
}

export default AccountSelector;