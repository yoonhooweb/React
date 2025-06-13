import { MdDelete, MdOutlineMode } from "react-icons/md";
import "../components_css/ExpenseItem.css";

function ExpenseItem(props) {
    
    return (
        <>
            <li className='item'>
                <div className='info'>
                    <span className='expense'>{props.item.charge}</span>
                    <span className='amount'>{props.item.amount}</span>
                </div>
                <div>
                    <button className='edit-btn'>
                        <MdOutlineMode />
                    </button>
                    <button className='clear-btn' onClick={() => { props.onDelete(props.item.id); }}>
                        <MdDelete />
                    </button>
                </div>
            </li>
        </>
    );
}

export default ExpenseItem;
