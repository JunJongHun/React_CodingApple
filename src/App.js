import "./App.css";

import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
function App() {
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
          <Col sm>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>

          <Col sm>
            <img
              src={process.env.PUBLIC_URL + "/logo192.png"}
              width="80%"
            ></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
