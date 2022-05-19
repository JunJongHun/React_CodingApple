import {
  Route,
  Routes,
  Link,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { Product } from "./Product";
import { Navbar, Container, Nav, Row, Col, NavbarBrand } from "react-bootstrap";
export function Main(props) {
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
