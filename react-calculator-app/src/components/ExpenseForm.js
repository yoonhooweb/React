import { Component } from 'react'
import '../../src/components_css/Expense.css'
import { MdSend } from 'react-icons/md';

export class ExpenseForm extends Component {
  render() {
    return (
        <form>
            <div className='form-center'>
                <div className='form-group'>
                    <label htmlFor='expense'>지출 내역</label>
                    <input type='text' className='form-control' id='charge' placeholder='예) 식비' />
                </div>
                <div className='form-group'>
                    <label htmlFor='amount'>금액</label>
                    <input type='number' className='form-control' id='amount' placeholder='금액을 입력하세요' />
                </div>
            </div>
            <button type='submit' className='btn'>
                제출<MdSend className='btn-icon'/>
            </button>
        </form>
    )
  }
}

export default ExpenseForm;