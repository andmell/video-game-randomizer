export default function UserGames({ gameList, handleClear }) {
  //   const listedGames = [
  //     "Mortal Kombat II",
  //     "Deep Rock Galacitc",
  //     "Warhammer Vermintide",
  //     "Gwen Stefani's Big Adventure",
  //   ];

  // function handleRandomize(gameList) {
  //   const finalGame = gameList[Math.floor(Math.random() * gameList.length)];
  //   console.log(finalGame);
  //   return finalGame;
  // }
  return (
    <section className="outline-dotted h-screen bg-gradient-to-b from-slate-700 flex-auto">
      <h2 className="text-4xl text-center">My Games</h2>
      {gameList.map((game) => {
        return <p key={game}>{game}</p>;
      })}
      {gameList.length > 0 && (
        <button
          onClick={handleClear}
          className=" bg-red-300 rounded-md mx-5 p-2"
        >
          Clear Games
        </button>
      )}
      {gameList.length > 1 && (
        <button
          // onClick={() => handleRandomize(gameList)}
          className=" bg-red-300 rounded-md mx-5 p-2"
        >
          Randomize
        </button>
        
      )}
      {console.log(gameList.length)}
    </section>
  );
}
