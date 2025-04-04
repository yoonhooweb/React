import { useEffect, useState } from 'react';
import {Link, Outlet, useParams } from 'react-router-dom';


function DetailShop(props) {

    let alert = document.querySelector(".alert");
    let [ count , setCount ] = useState(0);
    let [alertSwitch , setAlertSwitch] = useState(true);
    let [ noKorea, setNoKorea ] = useState("0");

    let param = useParams();
    let inputNumber = document.querySelector('#data');
    let number = props.data.find( (item) => {
        return item.id == param.id;
    })

    useEffect( () => {
        let time =  setTimeout(() => {
            setAlertSwitch(false);
        }, 2000);

        return () => {
            clearTimeout(time)
        }
    }, [])


    if (!number) {
        return <div> 존재하지 않는 상품입니다. </div>
    }

    

    return (
        <>
            <div className="container">
                {
                    alertSwitch == true ? <Alert /> : null
                }
                
                <div className="row">
                    <div className="col-md-6">
                        <img src={`https://codingapple1.github.io/shop/shoes${number.id + 1}.jpg`} width="100%"/>
                    </div>
                    <div className="col-md-6">
                        {
                            noKorea == 0 ? <Warning/> : null
                        }
                        <input type='text' id='data'/>
                        <h4 className="pt-5">{number.title}</h4>
                        <p>{number.content}</p>
                        <p>{number.price}</p>
                        <button className="btn btn-danger" onClick={() => { setCount(count + 1)}}>주문하기</button>
                        <Link to="/">홈으로</Link>
                        
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

function Alert() {
    return (
        <div className='alert alert-warning'> 박스</div>
    )
}

function Warning () {
    return (
        <div> 한글 입력 ㄴㄴ </div>
    )
}

export default DetailShop;
