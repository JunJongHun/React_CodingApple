import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { InputGroup, FormControl } from "react-bootstrap";

let CountInput = styled.h4`
  margin-bottom: 10px;
  background: red;
  color: white;
  border-color: white;
`;

export function Detail(props) {
  let { id } = useParams();
  let num = props.shoes.findIndex((e) => {
    return e.id === Number(id);
  });
  let [check, setCheck] = useState(true);

  let checkNumber = (e) => {
    let result =
      isNaN(Number(e.target.value)) === false
        ? setCheck(true)
        : setCheck(false);

    return result;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${num + 1}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[num].title}</h4>
          <p>{props.shoes[num].content}</p>
          <p>{props.shoes[num].price}</p>
          {check == true ? null : <CountInput>WARNING!!</CountInput>}
          <div>
            <InputGroup
              onChange={(e) => {
                checkNumber(e);
              }}
              size="sm"
              className="mb-3"
            >
              <InputGroup.Text id="inputGroup-sizing-sm">수량</InputGroup.Text>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
          </div>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
