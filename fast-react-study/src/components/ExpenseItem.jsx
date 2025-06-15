import { MdDelete, MdOutlineMode } from "react-icons/md";
import "../components_css/ExpenseItem.css";

function ExpenseItem({item, handleDelete, handleEdit}) {
    
    return (
        <>
            <li className='item'>
                <div className='info'>
                    <span className='expense'>{item.charge}</span>
                    <span className='amount'>{item.amount}</span>
                </div>
                <div>
                    <button className='edit-btn' onClick={ () => handleEdit(item.id)}>
                        <MdOutlineMode />
                    </button>
                    <button className='clear-btn' onClick={() => { handleDelete(item.id); }}>
                        <MdDelete />
                    </button>
                </div>
            </li>
        </>
    );
}

export default ExpenseItem;
