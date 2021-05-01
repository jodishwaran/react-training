import "./Fruit.css";
import Card from "./Card";

function Fruit(props) {
  const { name, price, img } = props;
  console.log("I am Fruit -  rendering");
  return (
    <Card className="fruit">
      <Card className="fruit__content">
        <div>{name}</div>
        <div>{price}$</div>
      </Card>
      <img className="fruit__img" src={img} alt="" />
    </Card>
  );
}

export default Fruit;
