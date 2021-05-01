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
    </Card>
  );
}

export default Header;
