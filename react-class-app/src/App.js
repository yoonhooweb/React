import React, { Component } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expense : [
                {id: 1, charge: '렌트비', amount: 1500},
                {id: 2, charge: '교통비', amount: 1000},
                {id: 3, charge: '식비', amount: 2000},
            ]
        }
    }
    handleDelete = (id) => {
        const newArray = this.state.expense.filter(item => item.id !== id);
        this.setState({
            expense : newArray
        });
    }

  render() {
    return (
      <main className='main-container' style={{width: '90%', margin: 'auto'}}>
            <h1>예산 계산기</h1>
            <div style={{width: '100%', backgroundColor : "white", padding: '1rem'}}>
                {/* Expense Form */}
                <ExpenseForm />
            </div>
            <div style={{width: '100%', backgroundColor : "white", padding: '1rem'}}>
                {/* Expense List */}
                <ExpenseList itemList={this.state.expense} handleDelete = {this.handleDelete} />
            </div>

            <div style={{display : 'flex', justifyContent : 'end', marginTop : '1rem'}}>

                <p style={{fontSize : '1.2rem'}}>
                    총 지출 :
                    <span> 0원</span>
                </p>

            </div>
        </main>
    )
  }
}

export default App