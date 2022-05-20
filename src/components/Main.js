import { Product } from "./Product";
import { Container, Row } from "react-bootstrap";
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
