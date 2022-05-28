import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { InputGroup, FormControl } from "react-bootstrap";
import { Tap } from "./Tap";
import "../App.css";
import { pushProduct } from "../store/product.js";

import { useSelector, useDispatch } from "react-redux";

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
  let [fade, setFade] = useState("end");
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, []);

  // console.log(props.shoes[num]);

  let dispatch = useDispatch();

  useEffect(() => {
    let arr = localStorage.getItem("recentlyItem");
    arr = JSON.parse(arr);
    arr.push(id);
    arr = new Set(arr);
    arr = Array.from(arr);
    localStorage.setItem("recentlyItem", JSON.stringify(arr));
    console.log(localStorage.getItem("recentlyItem"));
  });

  return (
    <div className={`container start ${fade}`}>
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
          <button
            className="btn btn-primary"
            onClick={() => {
              dispatch(pushProduct(props.shoes[num]));
            }}
          >
            장바구니 담기
          </button>
        </div>
        <Tap></Tap>
      </div>
    </div>
  );
}
