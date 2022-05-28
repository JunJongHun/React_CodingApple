import { Product } from "./Product";
import { Container, Row, Button } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

export function Main(props) {
  let [count, setCount] = useState(1);

  let pullShoes = async () => {
    try {
      console.log(count);
      let newShoes = await axios.get(
        `https://codingapple1.github.io/shop/data${count}.json`
      );
      let copy = [...props.shoes, ...newShoes.data];
      console.log(copy);
      props.setShoes(copy);
    } catch (error) {
      // console.log(error);
    }
    return;
  };

  useEffect(() => {
    pullShoes();
  }, [count]);

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
          setCount(count + 1);
        }}
      >
        상품 더 가져오기
      </Button>
    </>
  );
}
