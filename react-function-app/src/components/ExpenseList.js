import React from "react";
import '../components_css/Expense.css';
import '../components_css/ExpenseItem.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({data, handleDelete}) => {
    return (
        <>
            <ul>
                {data.map( (data) => {
                    return <ExpenseItem item={data} handleDelete={handleDelete}/>
                })                    
            }
            </ul>
        </>
    );
};

export default ExpenseList;