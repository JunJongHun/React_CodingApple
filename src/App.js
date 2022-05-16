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
import Test from "./Test";
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
        <Route path="/details" element={<Detail></Detail>}></Route>
        <Route path="/about" element={<About></About>}>
          <Route path="member" element={<Test />}></Route>
          <Route path="show" element={<div>show</div>}></Route>
        </Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

function Error(props) {
  return <div>404 page</div>;
}
const id = 1;
function About(props) {
  return (
    <>
      <div>어바웃페이지</div>
      <Link to="member" state={id}>
        aa
      </Link>
      <Outlet></Outlet>
    </>
  );
}

function Main(props) {
  return (
    <>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {props.shoes.map((value) => {
            return <Product sh={value} key={value.id}></Product>;
          })}
        </Row>
      </Container>
    </>
  );
}

function Detail(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

function Product(props) {
  return (
    <Col sm>
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.sh.id + 1}.jpg`}
        width="80%"
      ></img>
      <h4>{props.sh.title}</h4>
      <p>{props.sh.content}</p>
    </Col>
  );
}

export default App;
