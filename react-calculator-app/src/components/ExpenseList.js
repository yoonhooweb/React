import React, { Component } from 'react'
import '../../src/components_css/Expense.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

export class ExpenseList extends Component {
  render() {
    return (
        <>
            <ul>
                <ExpenseItem item={this.props.itemList} />
            </ul>
            <button className='btn'>
                목록 지우기
                <MdDelete className='btn-icon'/>
            </button>
        </>
    )
  }
}

export default ExpenseList