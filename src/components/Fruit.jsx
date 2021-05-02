import "./Fruit.css";
import Card from "./Card";
import PropTypes from "prop-types";

function Fruit(props) {
  const { name, price, img, onFruitDelete } = props;

  const onDeleteFruit = () => {
    onFruitDelete(name);
  };

  console.log(
    "%c Fruit : Rendering changes (render)",
    "color: lightPink; font-size: 1rem"
  );

  return (
    <Card className="fruit">
      <Card className="fruit__content">
        <div>Name : {name.toUpperCase()}</div>
        <div>Price : {price}</div>
        <button className="btn" onClick={onDeleteFruit}>
          Delete
        </button>
      </Card>
      <img className="fruit__img" src={img} alt="" />
    </Card>
  );
}

Fruit.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string.isRequired,
  onFruitDelete: PropTypes.func,
};

export default Fruit;
