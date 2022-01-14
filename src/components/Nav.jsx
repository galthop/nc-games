import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <h2 className="navHeader">NAVIGATION BAR:</h2>
      <Link to="/category/All" className="navContents">
        Reviews
      </Link>
      <Link to="/categories" className="navContents">
        Categories
      </Link>
    </div>
  );
};

export default Nav;
