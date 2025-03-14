import React from "react";
import '../components_css/Expense.css';
import '../components_css/ExpenseItem.css';

const ExpenseForm = () => {
    return (
        <>
            <form>
                <div className="form-center">
                    <div className="form-group">
                        <label htmlFor="expense">지출 내역</label>
                        <input type="text" id="expense" name="expense" className="form-control" placeholder="예) 점심식사"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">금액</label>
                        <input type="number" id="amount" name="amount" className="form-control" placeholder="예) 5000"/>
                    </div>
                </div>
                <button type="submit" className="btn">
                    추가
                </button>
            </form>
        </>
    );
}

export default ExpenseForm;