import { useEffect, useState } from 'react';
import {json, Link, Outlet, useParams } from 'react-router-dom';
import {Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addItems } from './../store.js'


function DetailShop({data}) {

    let [ count , setCount ] = useState(0);
    let [alertSwitch , setAlertSwitch] = useState(true);
    let [ noKorea, setNoKorea ] = useState("0");
    let [ tab , setTab] = useState(0);
    let [ fade , setFade ] = useState('');

    let state = useSelector( (state) => {return  state.cartData } )
    let dispatch = useDispatch();

    let param = useParams();
    let number = data.find( (item) => {
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

    useEffect ( () => {
        setTimeout (( ) => {
            setFade('noneColor')
        }, 500)
    }, [fade])


    if (!number) {
        return <div> 존재하지 않는 상품입니다. </div>
    }

    /* 로컬스토리지에 최근본 데이터 id 값으로 저장 중복 데이터 제거*/
    useEffect(() => {
        let watchedArray = JSON.parse(localStorage.getItem('watched')) || []

        if (!watchedArray.includes(number.id)) {
            watchedArray.push(number.id);
            localStorage.setItem('watched', JSON.stringify(watchedArray));
        } else {
            return false;
        }
    }, [number])
    


    return (
        <>
            <div className={`container colorCard ${fade}`}>
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
                        <button className="btn btn-danger" onClick={() => { dispatch(addItems(number)) }}>주문하기</button>
                        <Link to="/">홈으로</Link>
                        
                    </div>
                    <Outlet />
                </div>

                <TabNav tabIndex = { tab } tabSetData = { setTab } shoesData={data}/>
                {state.cartData}
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

function TabNav ({ tabIndex, tabSetData, shoesData}) {
    return (
        <>
            <Nav justify variant="tabs" defaultActiveKey="link-0" >
                <Nav.Item>
                    <Nav.Link href="" eventKey="link-0" onClick={ () => tabSetData(0) } >Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={ () => tabSetData(1)} >Loooonger NavLink</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" onClick={ () => tabSetData(2)} >Link</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContents tabData={tabIndex} data = {shoesData} />
        </>
    )
}

function TabContents ( { tabData , data}) {
    if ( tabData === 0) {
        return <div>이것은 탭1일때 작동합니다.</div>
    } else if (tabData === 1) {
        return <div>이것은 탭2일때 작동합니다.</div>
    } else if ( tabData === 2) {
        return <div>이것은 탭3일때 작동합니다.</div>
    }
}


export default DetailShop;