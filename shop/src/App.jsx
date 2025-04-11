import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import shoesData from "./data.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import DetailShop from "./components/detail.jsx";
import List from "./components/List.jsx";
import Sub from "./components/sub/sub.jsx";
import { orderBy, getData} from './js/function.js'

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

    return (
        <div className="app">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Shop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navi("/")}>Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<List data={shoes} orderBy={handleOrderBy} getData={handleData}/>}/>
                <Route path="/detail/:id" element={<DetailShop data={shoes} />}>
                    <Route path="test" element={<Sub />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
