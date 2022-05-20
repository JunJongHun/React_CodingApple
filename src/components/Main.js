import { Product } from "./Product";
import { Container, Row, Button } from "react-bootstrap";
import axios from "axios";
export function Main(props) {
  let pullShoes = async () => {
    let copy = [...props.shoes];
    try {
      let data = await axios.get(
        `https://codingapple1.github.io/shop/data2.json`
      );
      for (const i of data.data) {
        copy.push(i);
        console.log(i);
      }
      props.setShoes(copy);
    } catch (error) {
      console.log(error);
    }
    return;
  };

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
      <Button
        variant="primary"
        onClick={() => {
          pullShoes();
        }}
      >
        상품 더 가져오기
      </Button>
    </>
  );
}
