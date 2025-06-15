import '../components_css/Expense.css'
import { MdSend } from 'react-icons/md';

function ExpenseForm ({ pushDataCharge, pushDataAmount, charge, amount, submitData, edit }) {
    return (
        <form onSubmit={ submitData }>
            <div className='form-center'>
                <div className='form-group'>
                    <label htmlFor='expense'>지출 내역</label>
                    <input type='text' name='charge' className='form-control' id='charge' placeholder='예) 식비' onChange={pushDataCharge} value={charge} />
                </div>
                <div className='form-group'>
                    <label htmlFor='amount'>금액</label>
                    <input type='number' name='amount' className='form-control' id='amount' placeholder='금액을 입력하세요' onChange={pushDataAmount} value={amount}/>
                </div>
            </div>
            <button type='submit' className='btn'>
                {edit ? "수정" : "제출"}
                <MdSend className='btn-icon'/>
            </button>
        </form>
    )
  }

export default ExpenseForm;