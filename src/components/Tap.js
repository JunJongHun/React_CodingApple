import { Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
export function Tap(props) {
  let [num, SetNum] = useState(0);

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              SetNum(0);
            }}
            eventKey="0"
          >
            Option 0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              SetNum(1);
            }}
            eventKey="1"
          >
            Option 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              SetNum(2);
            }}
            eventKey="2"
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TapText num={num}></TapText>
    </>
  );
}

function TapText(props) {
  let [fade, setFade] = useState("end");

  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 10);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [props.num]);

  return (
    <div className={`start ${fade}`}>
      {[<div>0</div>, <div>1</div>, <div>2</div>][props.num]}
    </div>
  );
}
