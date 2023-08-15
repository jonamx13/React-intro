import './TodoSearch.css'

function TodoSearch() {
    return (
      <input 
      placeholder="Cut Onion"
      className="TodoSearch"
      onChange={(event) => {
        console.log('Writing on "TODO search"');
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
      }}
      />
    );
}

export { TodoSearch };