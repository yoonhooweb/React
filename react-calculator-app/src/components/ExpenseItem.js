import React, { Component } from 'react'
import { MdDelete, MdOutlineMode  } from "react-icons/md";
import '../../src/components_css/ExpenseItem.css'

export class ExpenseItem extends Component {
  render() {
    console.log(this.props.item);
    return (
      <>
        <li className='item'>
            <div className='info'>
                <span className='expense'>식비</span>
                <span className='amount'>원</span>
            </div>
            <div>
                <button className='edit-btn' ><MdOutlineMode /></button>
                <button className='clear-btn'><MdDelete></MdDelete></button>                
            </div>
        </li>
      </>
    )
  }
}

export default ExpenseItem;