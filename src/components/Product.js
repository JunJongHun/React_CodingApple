import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

let ShoesDiv = styled.div`
  width: 33%;
`;

export function Product(props) {
  let navigate = useNavigate();

  return (
    <ShoesDiv
      className="line"
      onClick={() => {
        navigate(`/details/${props.sh.id}`);
      }}
    >
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.sh.id + 1}.jpg`}
        width="80%"
      ></img>
      <h4>{props.sh.title}</h4>
      <p>{props.sh.content}</p>
    </ShoesDiv>
  );
}
