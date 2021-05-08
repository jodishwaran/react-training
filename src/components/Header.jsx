import { AuthContext } from "../context/authContext";
import Card from "./Card";
import "./Header.css";

function Header(props) {
  return (
    <Card className="header">
      <header>
        <h1>Fruit Basket</h1>
      </header>

      <div className="header__fruit-count">
        Available
        <span className="header__fruit-count-badge">{props.count}</span>
      </div>

      <AuthContext.Consumer>
        {(context) => {
          return (
            context.isLoggedIn && (
              <button className="btn" onClick={context.logout}>
                Logout
              </button>
            )
          );
        }}
      </AuthContext.Consumer>
    </Card>
  );
}

export default Header;
