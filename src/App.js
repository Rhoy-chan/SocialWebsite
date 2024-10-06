import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(false);
  const [text, setText] = useState("MAMA MO");

  const [number, setNumber] = useState(0);

  const handleValue = () => {setValue(!value)};

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const addNumber = () => {
    setNumber(number + 1);
  };
  const minusNumber = () => {
    setNumber(number - 1);
  };

  const zeroNumber = () => {
    setNumber(0);
  };

  return (
    <div>
      <button onClick={handleValue}>CLick Me</button>
      {value && <h1>AKO AI LAGI NA LANG NAG IISA AT LAGING INIISIP KA</h1>}
      <input type="text" onChange={handleInputChange} />
      {text}
      <button onClick={addNumber}>ADD</button>
      <button onClick={minusNumber}>MINUS</button>
      <button onClick={zeroNumber}>ZERO</button>
      {number}
    </div>
  );
}

// const User = (meow) => {
//   return (
//     <div>
//       <h1>{meow.name}</h1>
//       <h1>{meow.age}</h1>
//       <h1>{meow.email}</h1>
//     </div>
//   );
// };

export default App;
