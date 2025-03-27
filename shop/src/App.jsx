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

            <div className="main-bg">
            </div>
			{
				shoes.map( (item , i) => {
					return (
					<Container>
						<Row>
							<Col className="" key={item.id}>
								<img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`}alt=""width="80%"/>
								<h3>{item.title}</h3>
								<p>{item.content}</p>
								<p>{item.price}</p>
							</Col>
						</Row>
					</Container>
					)
				})
			}


			<Routes>
				<Route path="/detail" element={ <DetailShop /> }>
					<Route path="/detail/show" element={ <div> 신발보여줘 </div> }> </Route>
					<Route path="/detail/hide" element={ <div> 없애줘 </div> }> </Route>
				</Route>
			</Routes>

        </div>
    );
}

export default App;
