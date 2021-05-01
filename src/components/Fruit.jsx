import "./Fruit.css";
import Card from "./Card";

function Fruit(props) {
  const { name, price, description, img } = props;

  return (
    <Card className="fruit">
      <Card className="fruit__content">
        <div>Name : {name}</div>
        <div>Price : {price}</div>
        <div>Description : {description}</div>
      </Card>
      <img className="fruit__img" src={img} alt="" />
    </Card>
  );
}

export default Fruit;
