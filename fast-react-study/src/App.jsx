import React, { Component, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {

    const [charge , setCharge ] = useState('')
    const [amount , setAmount ] = useState();

    const [data, setData] = useState([
        { id: 1, charge: "렌트비", amount: 1500 },
        { id: 2, charge: "교통비", amount: 1000 },
        { id: 3, charge: "식비", amount: 2000 },
    ]);

    let handleDelete = (id) => {
        const newArray = data.filter((item) => item.id !== id);
        setData(newArray);
    };

    const pushDataCharge = (e) => {
        setCharge ( e.target.value);
    }

    const pushDataAmount = (e) => {
        setAmount ( e.target.valueAsNumber);
    }

    const submitData = (e) => {
        e.preventDefault();
        if (charge !== "" && amount > 0) {
            const newData = {id : crypto.randomUUID(), charge : charge, amount : amount}
            const newDatas = [...data, newData]
            setData(newDatas);
            setCharge("");
            setAmount();
        } else {
            console.log("Error")
        }
    }


    return (
        <main className='main-container' style={{ width: "90%", margin: "auto" }}>
            <h1>예산 계산기</h1>
            <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
                {/* Expense Form */}
                <ExpenseForm pushDataCharge={pushDataCharge} pushDataAmount={pushDataAmount} amount = { amount } charge = { charge } submitData={submitData}/>
            </div>
            <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
                {/* Expense List */}
                <ExpenseList data={data} handleDelete={handleDelete} />
            </div>

            <div style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}>
                <p style={{ fontSize: "1.2rem" }}>
                    총 지출 :<span> 0원</span>
                </p>
            </div>
        </main>
    );
}

export default App;
