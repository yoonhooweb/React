import React, { Component, useCallback, useMemo, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import CountDispay from "./components/CountDispay";
import Alert from './components/Alert';

function App() {

    const [charge , setCharge ] = useState('')
    const [amount , setAmount ] = useState(0);
    const [alert, setAlert] = useState({show : false});
    const [edit, setEdit] = useState(false);
    let [id, setId] = useState('');

    const [data, setData] = useState([
        { id: 1, charge: "렌트비", amount: 1500 },
        { id: 2, charge: "교통비", amount: 1000 },
        { id: 3, charge: "식비", amount: 2000 },
    ]);

    let handleDelete = (id) => {
        const newArray = data.filter((item) => item.id !== id);
        setData(newArray);
        handleAlert ( {
            type : 'danger',
            text : '아이템이 정상 삭제되었습니다.'
        })
    };

    const pushDataCharge = (e) => {
        setCharge ( e.target.value);
    }

    const pushDataAmount = (e) => {
        setAmount ( e.target.valueAsNumber);
    }

    const handleAlert = ({type, text}) => {
        setAlert ({show : true, type, text})
        setTimeout(() => {
            setAlert ({show : false});
        }, 3000);
    }

    const submitData = (e) => {
        e.preventDefault();
        if (charge !== "" && amount > 0) {
            if (edit) {
                const updateData = data.map( (item) => {
                    return item.id === id ? {...item, charge, amount} : item }
                );
                setData(updateData);
                setEdit(false);
                setAlert ( {
                    type : "success",
                    text : '수정이 완료되었습니다.'
                })
                setId('');
            } else {
                const newData = {id : crypto.randomUUID(), charge : charge, amount : amount}
                const newDatas = [...data, newData]
                setId(id);
                setData(newDatas);
                setCharge("");
                setAmount(0);
                handleAlert ( {
                    type : 'success',
                    text : '아이템이 정상 생성되었습니다.'
                })    
            }
            
        } else {
            console.log("Error")
        }
    }

    const handleEdit = useCallback((id) => {
        const newArray = data.find ( (item) => { return item.id === id} )
        const { charge , amount } = newArray;
        setCharge ( charge ) ;
        setAmount(amount);
        setEdit(true);
        setId(id);
    })

    const clearItems = ( ) => {
        setData([]);
    }

    const totalCount = useMemo( () => {
        return data.reduce( ( acc, value) => acc + value.amount, 0 );
    }, [data])

    return (
        <>
        <main className='main-container' style={{ width: "90%", margin: "auto" }}>
            <h1>예산 계산기</h1>
            <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
                {alert.show ? <Alert type={ alert.type } text={ alert.text } /> : null}
                {/* Expense Form */}
                <ExpenseForm pushDataCharge={pushDataCharge} pushDataAmount={pushDataAmount} amount = { amount } charge = { charge } submitData={submitData} edit = {edit}/>
            </div>
            <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
                {/* Expense List */}
                <ExpenseList clearItems={clearItems} handleEdit = {handleEdit} data={data} handleDelete={handleDelete} />
            </div>

            <div style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}>
                <p style={{ fontSize: "1.2rem" }}>
                    총 지출 :<span> {totalCount} 원</span>
                </p>
            </div>
        </main>

        <CountDispay />
        </>
    );
}

export default App;
