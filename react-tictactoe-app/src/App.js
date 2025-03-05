import { Component } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm.js'; /* 다른 js 사용하기 위한 기본 셋팅 */


class App extends Component {
  render() {
    return (
        <main className='main-container'>
            <h1>예산 계산기</h1>
            <div style={{width: '100%', backgroundColor : "white", padding: '1rem'}}>
                {/* Expense Form */}
                <ExpenseForm />
            </div>
            <div style={{width: '100%', backgroundColor : "white", padding: '1rem'}}>
                {/* Expense List */}
            </div>

            <div style={{display : 'flex', justifyContent : 'end', marginTop : '1rem'}}>

                <p style={{fontSize : '1.2rem'}}>
                    총 지출 :
                    <span> 0원</span>
                </p>

            </div>
        </main>
    );
  }
}

export default App;