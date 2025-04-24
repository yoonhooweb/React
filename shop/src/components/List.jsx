import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

let aa = 20;

export default function List({ data, orderBy, getData }) {
    const navi = useNavigate();

    return (
        <>
            <div className="main-bg"></div>
            <Container>
                <Row>
                    {data.map((item, i) => (
                        <Col xs key={item.id + i} onClick={() => navi(`/detail/${item.id}`)}>
                            <img src={`https://codingapple1.github.io/shop/shoes${ item.id + 1}.jpg`} alt="" width="80%" />
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                            <p>{item.price}</p>
                        </Col>
                    ))}
                    <button onClick={getData} className="none">더보기</button>
                    <button onClick={orderBy}>정렬</button>
                </Row>
            </Container>
        </>
    );
}
