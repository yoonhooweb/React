import Table from 'react-bootstrap/Table'; 
import { useDispatch, useSelector } from 'react-redux';
import { changeName, countPlus, removeItem } from './../store.js'

function Cart() {

    let state = useSelector( (state) => { return state});
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
                    {state.cartData.map((v,i)=>{
                        return (
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.title}</td>
                                <td>{v.count}</td>
                                {/* 현재 클릭한 버튼의 오브젝트 내 id 값 보내기기 */}
                                <td> <button onClick={()=> { dispatch(countPlus(v.id))}}> + </button> </td> 
                                <td> <button onClick={()=> { dispatch(removeItem(v.id))}}> - </button> </td> 
                            </tr>
                        )
                    })}
                    <tr>
                        <td>{state.userName.name}</td>
                        <td>{state.userName.age}</td>
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
