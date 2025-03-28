import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import {Container, Nav, Navbar, Row, Col} from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import shoesData from './data.jsx'
import {Route, Routes, Link, useNavigate, Outlet} from 'react-router-dom'
import DetailShop from './components/Detail.jsx'

function App() {
	let [shoes , setShoes] = useState( shoesData )
	let [displayShoes, setDisplayShoes] = useState(shoesData); // 화면에 표시할 데이터
	let navi = useNavigate();

	const orderBy = () => {
        let newArray = [...shoes].sort((a, b) => a.title.localeCompare(b.title));
        setDisplayShoes(newArray);

		console.log(shoes);
    };

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

            <div className="main-bg">
            </div>
			{
				displayShoes.map( (item , i) => {
					return (
					<Container>
						<Row>
							<Col className="" key={item.id} onClick={ navi("/detail/:id") }>
								<img src={`https://codingapple1.github.io/shop/shoes${item.id + 1}.jpg`}alt="" width="80%"/>
								<h3>{item.title}</h3>
								<p>{item.content}</p>
								<p>{item.price}</p>
							</Col>
						</Row>
					</Container>
					)
				})
			}
			
			<button onClick={ () => orderBy()}>정렬</button>

			<Routes>
				<Route path="/detail/:id" element={ <DetailShop data={shoes}/> }>
				</Route>
			</Routes>

        </div>
    );
}

export default App;
