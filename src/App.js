import "./App.css";
import s from "./data.js";
import { createFactory, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Detail } from "./components/Detail";
import { Error } from "./components/Error";
import { Main } from "./components/Main";
import { About } from "./components/About";

let YellowBtn = styled.button`
  background: yellow;
  color: black;
`;

let NewBtn = styled(YellowBtn)`
  margin: 10px;
  padding: 10px;
`;

function App() {
  let [shoes, setShoes] = useState(s);
  let navigate = useNavigate();

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
      <YellowBtn>버튼</YellowBtn>
      <NewBtn>눌러줘</NewBtn>
      <Routes>
        <Route path="/" element={<Main shoes={shoes}></Main>}></Route>
        <Route
          path="/details/:id"
          element={<Detail shoes={shoes}></Detail>}
        ></Route>
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
