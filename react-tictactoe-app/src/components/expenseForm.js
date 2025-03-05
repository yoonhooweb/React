import { Component } from "react";
export class ExpenseForm extends Component {
    render() {
        return (
            <div>
                <h2>지출 내역 추가</h2>
                <form>
                    <div>
                        <label>지출 내역</label>
                        <input type="text" placeholder="지출 내역을 입력하세요" />
                    </div>
                    <div>
                        <label>금액</label>
                        <input type="number" placeholder="금액을 입력하세요" />
                    </div>
                    <button>지출 내역 추가</button>
                </form>
            </div>
        )
        
    }
}

export default ExpenseForm;

