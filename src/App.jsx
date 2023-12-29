import { useState } from "react";
import "./index.css";
import Bill from "./Bill";
import Message from "./Message";
import You from "./You";
import Friend from "./Friend";

function App() {
  const [billValue, setBillValue] = useState("");
  const [selectOption, setSelectOption] = useState(0);
  const [selectF, setSelectF] = useState(0);

  return (
    <>
      <Bill billValue={billValue} setBillValue={setBillValue} />
      <You selectOption={selectOption} setSelectOption={setSelectOption} />
      <Friend selectF={selectF} setSelectF={setSelectF} />
      <Message
        billValue={billValue}
        selectOption={selectOption}
        selectF={selectF}
      />
      <Reset />
    </>
  );
}

function Reset() {
  return <button>Reset</button>;
}

export default App;
