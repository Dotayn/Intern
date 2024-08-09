//import Header from "./Header";
import NewButton from "./NewButton";
import { useState } from "react";
import Navbar from "./Navbar";
const App = () => {
  const names = [
    'Abebe',
    'Kebede',
    'Chaltu',
    'Miki',
    'Beti'
  ]
  const [num, setNum] = useState(0);
  const [name, setName] = useState("Dotayn");

  function handleClick() {
    setNum(num + 1);
  }
  function changeName() {
    if (name === "Dotayn") {
      setName("Sofi");
    } else {
      setName("Dotayn");
    }
  }
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center place-content-center flex-col">
        <button onClick={handleClick} className="bg-red-600 text-5xl ju">
          Click me
        </button>
      </div>
      <p className="flex justify-center text-4xl font-extrabold text-red-700">{num}</p>
      <div className="flex justify-center">
      <button className="bg-orange-600 text-5xl" onClick={changeName}>My name is</button>
      </div>
      <p className="flex justify-center text-4xl font-extrabold text-orange-600">
        {name}</p>

      <NewButton arr={names}/>
    </div>
  );
};

export default App;
