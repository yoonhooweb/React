import { useNavigate, useParams } from "react-router-dom";


function Detail({ data }) {

    console.log(data);

    let navi = useNavigate();
    let param = useParams();

    if (!data?.products) {
        return <p>로딩중...</p>;
    }

    let filterId = data?.products.find((item) => {
        return item.id == param.id;
    });

    if (!filterId) {
        return <p>해당 상품을 찾을 수 없습니다.</p>;
    }

    return (
        <>
            <div className="detail-wrapper">
                <div className="detail-card">
                    <div className="detail-image">
                        <img src={filterId.images} alt={filterId.images} />
                    </div>
                    <div className="detail-info">
                        <h1 className="detail-title">{filterId.title}</h1>
                        <p className="detail-desc">{filterId.description}</p>
                        <p className="detail-price">{filterId.price}</p>
                        <ul className="detail-meta">
                            <li>⭐ 평점: {filterId.rating}</li>
                            <li>📦 재고: {filterId.minimumOrderQuantity}개</li>
                            <li>🏷 브랜드: {filterId.brand}</li>
                            <li>📂 카테고리: {filterId.category}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <button onClick={()=> {navi('/')}}>홈으로</button>
        </>
    );
}

export default Detail;
