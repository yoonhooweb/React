import { Component } from "react";
import '../components_css/Expense.css';
export class ExpenseList extends Component {
    render() {
        return (
         /* 
            <React.Fragment></React.Fragment> 를 사용하면 불필요한 div 가 생기지 않는다.
            <> </> 를 사용해도 된다.
         */
            <>
                <ul className="list">
                    <ExpenseList />
                </ul>
                <button className="btn">목록지우기</button>
            </>
        )
        
    }
}

export default ExpenseList;  