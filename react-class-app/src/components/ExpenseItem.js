import React, { Component } from 'react'
import { MdDelete, MdOutlineMode  } from "react-icons/md";
import '../components_css/ExpenseItem.css'

export class ExpenseItem extends Component {
  render() {
    return (
      <>
        <li className='item'>
            <div className='info'>
                <span className='expense' >{this.props.item.charge}</span>
                <span className='amount'>{this.props.item.amount}</span>
            </div>
            <div>
                <button className='edit-btn' ><MdOutlineMode /></button>
                <button className='clear-btn' onClick={ () => {
                    this.props.delete(this.props.item.id);
                }}><MdDelete /></button>                
            </div>
        </li>
      </>
    )
  }
}

export default ExpenseItem;