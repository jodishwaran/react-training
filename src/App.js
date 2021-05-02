import FruitList from "./components/FruitList";

function App() {
  console.log(
    "%c APP : Rendering to DOM (render)",
    "color: white; font-size: 1rem"
  );
  return (
    <div>
      <FruitList />
    </div>
  );
}

export default App;
