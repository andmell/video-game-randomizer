
export default function UserInput({onGameSubmit, onInputChange}) {
  
    function handleEnterKey(e){
        if (e.key === 'Enter'){
            onGameSubmit()
            document.getElementById('game').value='';
        }
      }

  return (
    <section className='outline-dashed bg-gradient-to-b from-slate-700 flex-auto '>
      <label htmlFor="game"></label>
      <input
        type="text"
        id="game"
        onChange={(event) => onInputChange(event.target.value)}
        onKeyDown={handleEnterKey}
        className='bg-slate-300 rounded-md shadow-md outline w-2/5 m-5'
      />
      <button onClick={onGameSubmit} className='bg-red-300 rounded-md px-4 py-2'>Submit</button>
    </section>
  );
}
