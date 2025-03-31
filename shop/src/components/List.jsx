import React from 'react'
import "../../src/App.css";
import { useState } from 'react';
import {Container, Nav, Navbar, Row, Col} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

export default function List({data}) {
    console.log(data);
    let navi = useNavigate();

    const orderBy = () => {
        let newArray = [...shoes].sort((a, b) => a.title.localeCompare(b.title));
        setDisplayShoes(newArray);
    };

    return (
        <>
            <div className="main-bg">
            </div>
            {
                data.map( (item , i) => {
                    return (
                    <Container>
                        <Row>
                            <Col className="1" key={item.id} onClick={() => navi(`/detail/${item.id}`) }>
                                <img src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`}alt="" width="80%"/>
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <p>{item.price}</p>
                            </Col>
                        </Row>
                        <button onClick={ () => orderBy()}>정렬</button>
                    </Container>
                    )
                })
            }
        </>
    )
}
