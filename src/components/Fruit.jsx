import "./Fruit.css";

function Fruit(props) {
  const { name, price, description, img } = props;

  return (
    <div className="fruit">
      {/* <img src={img} alt="" />
      <div className="fruit__content">
        <div>Name : {name}</div>
        <div>Price : {price}</div>
        <div>Description : {description}</div>
      </div> */}
      <div>{props.children}</div>
    </div>
  );
}

export default Fruit;
