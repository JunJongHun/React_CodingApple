import "./App.css";
import s from "./data.js";
import { useState } from "react";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
function App() {
  let [shoes, setShoes] = useState(s);
  console.log(shoes);
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <Container>
        <Row>
          {shoes.map((value) => {
            return <Product sh={value} key={value.id}></Product>;
          })}
        </Row>
      </Container>
    </div>
  );
}

function Product(props) {
  return (
    <div>
      <Col sm>
        <img
          src="https://codingapple1.github.io/shop/shoes3.jpg"
          width="80%"
        ></img>
        <h4>{props.sh.title}</h4>
        <p>{props.sh.content}</p>
      </Col>
    </div>
  );
}

export default App;
