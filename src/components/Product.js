import { Navbar, Container, Nav, Row, Col, NavbarBrand } from "react-bootstrap";
export function Product(props) {
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
