import { Link, Outlet } from "react-router-dom";
export function About(props) {
  return (
    <>
      <div>어바웃페이지</div>
      <Link to="member"></Link>
      <Outlet></Outlet>
    </>
  );
}
