import UserInput from "./UserInput";
import UserGames from "./UserGames";
import { useState } from "react";

export default function Body() {
  const [input, setInput] = useState("");
  const [gameList, setGameList] = useState([])
  
  function handleInputChange(value) {
    setInput(value);
  }

  function handleClear(){
    setGameList([]);
  }

  function handleSubmit() {
    console.log(input);
    setGameList([...gameList, input])
  }



  return (
    <main className="grid grid-cols-2 gap-2">
      <UserInput
        onGameSubmit={handleSubmit}
        onInputChange={handleInputChange}
      />
      <UserGames gameList={gameList} handleClear={handleClear}/>
    </main>
  );
}
