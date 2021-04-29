import "./Fruit.css";
import Card from "./Card";

function Fruit(props) {
  const { name, price, description, img } = props;

  return (
    // <div className="fruit">
    //   <img src={img} alt="" />
    //   <div className="fruit__content">
    //     <div>Name : {name}</div>
    //     <div>Price : {price}</div>
    //     <div>Description : {description}</div>
    //   </div>
    //   <div>{props.children}</div>
    // </div>
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
