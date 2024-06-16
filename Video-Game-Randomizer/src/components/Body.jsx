import UserInput from "./UserInput";
import UserGames from "./UserGames";
import { useState } from "react";

export default function Body() {
  const [input, setInput] = useState("");
  const [gameList, setGameList] = useState([])
  
function resetField(fieldId){
    document.getElementById(fieldId).value='';
    setInput('');
}

  function handleInputChange(value) {
    setInput(value);
  }

  function handleClear(){
    setGameList([]);
  }

  function handleSubmit() {
    console.log(input);
    setGameList([...gameList, input])
    resetField('game')
    
  }



  return (
    <main className="flex flex-row">
      <UserInput
        onGameSubmit={handleSubmit}
        onInputChange={handleInputChange}
      />
      <UserGames gameList={gameList} handleClear={handleClear}/>
    </main>
  );
}
