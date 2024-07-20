import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import List from "./components/List";
function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  function addClick() {
    let polishedValue = value.trim();
    if (polishedValue) {
      setList([...list, value]);
    }

    setValue("");
  }
  return (
    <div className="App">
      <div className="header">TODO-List</div>
      <div className="container">
        <Input value={value} setValue={setValue} />
        <Button handleClick={addClick} />
        <div className="seprator"> </div>
        <List
          list={list}
          heading={list.length < 1 ? "Nothing To Do Now" : "Lists"}
        />
      </div>
    </div>
  );
}

export default App;
