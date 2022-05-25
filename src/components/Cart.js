import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeCount } from "../store/product";

export function Cart(props) {
  let Dispatch = useDispatch();
  let a = useSelector((state) => {
    return state;
  });

  console.log(a);
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {a.product.map((s, index) => {
            return (
              <tr key={s.id}>
                <td>{index}</td>
                <td>{s.title}</td>
                <td>{s.count}</td>
                <td>
                  <button
                    onClick={() => {
                      Dispatch(changeCount(s.id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
