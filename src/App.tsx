import "./App.css";
import { Button } from "./components/Button";
//import { CheckBox } from "./components/CheckBox";
import allTeas from "./public/bubble_teas.json";
import { TeaTypes } from "./utils/TeaTypes.ts";
import { pickATea } from "./utils/Picker.ts";

// Construct tea lists
//const veganTeas = allTeas.filter((tea) => tea.type.includes(TeaTypes.VEGAN));
//const warmTeas = allTeas.filter((tea) => (tea.canBeWarm = true));
const originalTeas = allTeas.filter((tea) =>
  tea.type.includes(TeaTypes.ORIGINAL)
);
const milkTeas = allTeas.filter((tea) => tea.type.includes(TeaTypes.MILK));
const fruitTeas = allTeas.filter((tea) => tea.type.includes(TeaTypes.FRUIT));

export default function App() {
  return (
    <>
      <div>
        <h1>Pick a Tea!</h1>
        {/*
        <div>
          <CheckBox>Vegan?</CheckBox> <CheckBox>Warm?</CheckBox>
        </div>
        */}
        <Button isLarge={true} onClick={() => alert(pickATea(allTeas))}>
          Any
        </Button>
      </div>
      <Button onClick={() => alert(pickATea(originalTeas))}>OGs</Button>
      <Button onClick={() => alert(pickATea(milkTeas))}>Milk</Button>
      <Button onClick={() => alert(pickATea(fruitTeas))}>Fruit</Button>
    </>
  );
}
