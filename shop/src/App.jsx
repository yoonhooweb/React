import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Nav, Navbar, Row, Col} from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import shoesData from './data.jsx'
import {Route, Routes, Link, useNavigate, Outlet} from 'react-router-dom'
import DetailShop from './components/detail.jsx'
import List from './components/List.jsx'
import Sub from './components/sub/sub.jsx'

/* 
	
*/
function App() {
	let [shoes , setShoes] = useState( shoesData )
	let [displayShoes, setDisplayShoes] = useState(shoesData); // 화면에 표시할 데이터
	let navi = useNavigate();

    return (
        <div className="app">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navi("/")}>Home</Nav.Link>
                        <Nav.Link onClick={() => navi("/detail")}>Detail</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
			
			

			<Routes>
				<Route path="/" element={ <List data={shoes}/> }></Route>
				<Route path="/detail/:id" element={ <DetailShop data={shoes}/> }>
					<Route path="/detail/:id/test" element={ <Sub /> } />
				</Route>
				
			</Routes>

        </div>
    );
}

export default App;
