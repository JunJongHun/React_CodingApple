import { useParams } from "react-router-dom";

export function Detail(props) {
  let { id } = useParams();
  console.log(id);
  let num = props.shoes.findIndex((e) => {
    return e.id === Number(id);
  });

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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
