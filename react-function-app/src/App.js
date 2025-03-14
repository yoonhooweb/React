import React, { useState } from 'react';
import './App.css';
import './index.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {

    const [expense, setState] = useState([
        { id: 1, charge: '렌트비', amount: 1500 },
        { id: 2, charge: '교통비', amount: 1000 },
        { id: 3, charge: '식비', amount: 2000 },
    ])

    let Delete = (id) => {
        let newArray = expense.filter( item => item.id !== id);
        setState(newArray);
    };
    return (
        <>
            <main className='main-container'>
                <h1>예산 계산기</h1>
                <div className='expense-form' >
                    <ExpenseForm />
                </div>
                <div className='expense-list'>
                    <ExpenseList handleDelete={Delete} data={expense}/>
                </div>

                <div className='footer'>
                    <p>
                        총 지출 :
                        <span> 0원</span>
                    </p>

                </div>
            </main>
        </>
    );
}

export default App;
