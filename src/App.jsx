import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ShoesStore from "./shoe/shoe-store";

function App() {
  const [count, setCount] = useState(0);

  return <ShoesStore/>

}

export default App;
