import "./Fruit.css";
import Card from "./Card";

function Fruit(props) {
  const { name, price, description, img } = props;
  console.log("I am Fruit -  rendering");
  return (
    <Card className="fruit">
      <Card className="fruit__content">
        <div>
          <b>Name :</b> {name}
        </div>
        <div>
          <b>Price :</b> {price}$
        </div>
        <div>
          <b>Description :</b> {description}
        </div>
      </Card>
      <img className="fruit__img" src={img} alt="" />
    </Card>
  );
}

export default Fruit;
