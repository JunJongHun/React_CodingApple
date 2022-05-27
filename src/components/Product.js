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
        let newRecntlyItem = JSON.parse(localStorage.getItem("recentlyItem"));
        newRecntlyItem.push(props.sh.id);
        console.log(newRecntlyItem);
        let arr = new Set(newRecntlyItem);
        localStorage.setItem("recentlyItem", JSON.stringify([...arr]));

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
