import {Link, Outlet, useParams } from 'react-router-dom';


function DetailShop(props) {

    let param = useParams();

    let number = props.data.find( (item) => {
        console.log(item.id);
        console.log(param.id);
        return item.id == param.id;
    })

    if (!number) {
        return <div> 존재하지 않는 상품입니다. </div>
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={`https://codingapple1.github.io/shop/shoes${number.id + 1}.jpg`} width="100%"/>
                        {
                            console.log(`number.id =============== ${number.id}`)
                        }
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{number.title}</h4>
                        <p>{number.content}</p>
                        <p>{number.price}</p>
                        <button className="btn btn-danger">주문하기</button>
                        <Link to="/">홈으로</Link>
                        
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default DetailShop;
