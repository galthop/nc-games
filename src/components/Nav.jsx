import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <h1>Navigation bar</h1>
      <Link to="/">Reviews</Link>
      <br></br>
      <Link to="/categories">Categories</Link>
    </div>
  );
};

export default Nav;
