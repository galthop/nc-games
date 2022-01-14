import { Link } from "react-router-dom";

const Nav = () => {
  const user = "jessjelly";
  return (
    <div className="Nav">
      <h2 className="navHeader">NAVIGATION BAR:</h2>
      <div className="navvy">
        <Link to="/category/All" className="navContents">
          Reviews
        </Link>
        <Link to="/categories" className="navContents">
          Categories
        </Link>
        <Link
          to="/"
          className="disabledCursor navContents"
          onClick={(event) => event.preventDefault()}
        >
          Logged in user: {user}
        </Link>
      </div>
    </div>
  );
};

export default Nav;
