import "../components_css/Expense.css";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";

function ExpenseList({ data, handleDelete }) {
    return (
        <>
            <ul>
                {data.map((item) => {
                    return <ExpenseItem key={item.id} item={item} onDelete={handleDelete} />;
                })}
            </ul>
            <button className='btn'>
                목록 지우기
                <MdDelete className='btn-icon' />
            </button>
        </>
    );
}

export default ExpenseList;
