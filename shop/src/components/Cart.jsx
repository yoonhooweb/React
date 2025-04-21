import Table from 'react-bootstrap/Table'; 
import { useDispatch, useSelector } from 'react-redux';
import { changeName, countPlus } from './../store.js'

function Cart() {

    let data = useSelector( (state) => { return state.cartData });
    let userName = useSelector( (state) => { return state.userName });
    let dispatch = useDispatch();

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>신발번호</th>
                        <th>신발이름</th>
                        <th>수량</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((v,i)=>{
                        return (
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.count}</td>
                                <td> <button onClick={()=> { dispatch(countPlus(data))}}> + </button> </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td>
                            {userName}
                        </td>
                        <td>
                            <button onClick={()=> { dispatch(changeName())}}> 이름바꾸기 </button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Cart
