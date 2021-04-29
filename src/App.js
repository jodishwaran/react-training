import Fruit from "./components/Fruit";

function App() {
  const fruits = [
    {
      name: "mano",
      description: "This is mango...",
      price: 10,
      img:
        "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "apple",
      price: 100,
      description: "This is apple...",
      img:
        "https://images.unsplash.com/photo-1582655299221-2b6bff351df0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "grapes",
      price: 48,
      description: "This is grapes...",
      img:
        "https://images.unsplash.com/photo-1596380862374-ad7fa9407822?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhcGVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    },
    {
      name: "berries",
      price: 200,
      description: "yummy yummy berries...",
      img:
        "https://images.unsplash.com/photo-1516659828014-fb21a5bd8ca3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVycmllc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=60",
    },
  ];

  return (
    <div>
      <div className="main">
        <Fruit
          name={fruits[0].name}
          price={fruits[0].price}
          description={fruits[0].description}
          img={fruits[0].img}
        ></Fruit>
        <Fruit
          name={fruits[1].name}
          price={fruits[1].price}
          description={fruits[1].description}
          img={fruits[1].img}
        />
        <Fruit
          name={fruits[2].name}
          price={fruits[2].price}
          description={fruits[2].description}
          img={fruits[2].img}
        />
        <Fruit
          name={fruits[3].name}
          price={fruits[3].price}
          description={fruits[3].description}
          img={fruits[3].img}
        />
      </div>
    </div>
  );
}

export default App;
