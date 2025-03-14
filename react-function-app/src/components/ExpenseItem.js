import React from 'react';
import {MdOutlineMode, MdDelete} from 'react-icons/md';
import '../components_css/ExpenseItem.css';

const ExpenseItem = ({item, handleDelete}) => {
    return (
        <>
           <li key={item.id} className="item">
                <div className="info">
                    <span className="expense">{item.charge}</span>
                    <span className="amount">{item.amount}</span>
                </div>
                <div>
                <button className='edit-btn' ><MdOutlineMode /></button>
                <button className='clear-btn' onClick={() => {handleDelete(item.id)}}><MdDelete /></button>
            </div>
            </li>
        </>
    )
}

export default ExpenseItem;
