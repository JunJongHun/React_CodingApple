import "./App.css";
import s from "./data.js";
import { createFactory, useState } from "react";
import { Navbar, Container, Nav, Row, Col, NavbarBrand } from "react-bootstrap";
import {
  Route,
  Routes,
  Link,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { Detail } from "./components/Detail";
import { Error } from "./components/Error";
import { Main } from "./components/Main";
import { About } from "./components/About";

function App() {
  let [shoes, setShoes] = useState(s);
  let navigate = useNavigate();
  console.log(shoes);
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/details");
              }}
            >
              details
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes}></Main>}></Route>
        <Route path="/details/:id" element={<Detail></Detail>}></Route>
        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<div>member</div>}></Route>
          <Route path="show" element={<div>show</div>}></Route>
        </Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
