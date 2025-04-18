import Table from 'react-bootstrap/Table'; 
import { useSelector } from 'react-redux';

function Cart() {

    let data = useSelector( (state) => { return state.cartData });

    console.log(data);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>신발번호</th>
                        <th>신발이름</th>
                        <th>수량</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((v,i)=>{
                        return (
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.name}</td>
                                <td>{v.count}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default Cart
