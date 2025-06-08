import React, { Component } from 'react'
import '../components_css/Expense.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

export class ExpenseList extends Component {
  render() {
    return (
        <>
            <ul>
                {this.props.itemList.map((item) => {
                    return <ExpenseItem 
                                key={item.id} 
                                item={item} 
                                delete={this.props.handleDelete} 
                            />
                  })
                }
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