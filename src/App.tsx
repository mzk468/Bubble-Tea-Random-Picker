import "./App.css";
import { Button } from "./components/Button";
import { CheckBox } from "./components/CheckBox";

export default function App() {
  return (
    <>
      <div>
        <h1>Pick a Tea!</h1>
        <div>
          <CheckBox>Vegan?</CheckBox> <CheckBox>Warm?</CheckBox>
        </div>
        <Button isLarge={true} onClick={() => console.log("Any Pressed")}>
          Any
        </Button>
      </div>
      <Button onClick={() => console.log("OGs Pressed")}>OGs</Button>
      <Button onClick={() => console.log("Milk Pressed")}>Milk</Button>
      <Button onClick={() => console.log("Fruit Pressed")}>Fruit</Button>
    </>
  );
}
