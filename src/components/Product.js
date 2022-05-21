import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Product(props) {
  let navigate = useNavigate();

  return (
    <Col
      className="line"
      sm
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
    </Col>
  );
}
