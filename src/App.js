import { useState, useRef } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import List from "./components/List";
// import Login from "./components/Login";
function App() {
  // const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const valueRef = useRef();
  function addClick() {
    let currentValue = valueRef.current.value;
    let polishedValue = currentValue.trim();
    if (polishedValue) {
      setList([...list, polishedValue]);
    }
    valueRef.current.value = "";
    // setValue("");
  }
  return (
    <div className="App">
      <div className="header">TODO-List</div>
      <div className="container">
        <Input valueRef={valueRef} />
        <Button handleClick={addClick} />
        <div className="seprator"> </div>
        <List
          list={list}
          heading={list.length < 1 ? "Nothing To Do Now" : "Lists"}
        />
      </div>
      {/* <Login /> */}
    </div>
  );
}

export default App;
