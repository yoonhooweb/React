import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import { useEffect, useState } from "react";
import shoesData from "./data.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import DetailShop from "./components/detail.jsx";
import List from "./components/List.jsx";
import Sub from "./components/sub/Sub.jsx";
import { orderBy, getData} from './js/function.js';
import Cart from './components/Cart.jsx';
import axios from "axios";
import {useQuery} from '@tanstack/react-query';


function App() {
    let [shoes, setShoes] = useState(shoesData);
    let [ count, setCount ] = useState(2);
    let navi = useNavigate();

    const handleOrderBy = () => {
        let sort = orderBy(shoes);
        setShoes(sort);
    }

    const handleData = async () =>{
        let none = document.querySelector(".none");
        if ( count >= 4) {
            setTimeout(() => {
                none.style.display = 'none';
            },100);
            alert("더이상 상품을 가지고 올수 없습니다.");
        } else {
            let updateData = await getData(shoes, count);
            setCount(count + 1);
            setShoes(updateData);
            none.style.display = 'block';
        }
        
    }

    let result = useQuery({
        queryKey: ['userdata'],
        queryFn: async () => {
          const res = await axios.get('https://codingapple1.github.io/userdata.json');
          console.log('유저 데이터:', res.data);
          return res.data;
        },
      });

    return ( 
        <div className="app">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className="gkgldkgld">
                    <Navbar.Brand>Shop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navi("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navi("/Cart")}>Cart</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto text-white">
                        {result.isLoading ? '로딩중' : result.data.name}
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<List data={shoes} orderBy={handleOrderBy} getData={handleData}/>}/>
                <Route path="/detail/:id" element={<DetailShop data={shoes} />} >
                    <Route path="test" element={<Sub />} />
                </Route>
                <Route path="/Cart" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
