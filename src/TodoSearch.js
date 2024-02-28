import './TodoSearch.css';

function TodoSearch(){
    return(
      <input 
      placeholder="Hacer dinamico la lista"
      className='TodoSearch' 
      onChange={
        (event) => {
          console.log(event);
          console.log(event.target)
          console.log(event.target.value)
        }
      }/>
    );
  }

export { TodoSearch }