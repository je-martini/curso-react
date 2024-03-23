import React from "react";

function useLocalStorage(itemName, inicialValue){

  const [ item, setItem ] = React.useState(inicialValue);
  const [ loading, setLoading] = React.useState(true);
  const [ error, setError] = React.useState(false);
  
  React.useEffect( () => {
        try {
          const localStorageItem = localStorage.getItem(itemName)
          
          let parsedItem;
          
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(inicialValue));
            parsedItem = inicialValue;
          } else{
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
    
          setLoading(false);
        } catch(error){
          setLoading(false);
          setError(true);
        }
    }, [ ]
  )
    
  
    // parsedTodos = JSON.parse(localStorageItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem);
    }
  
    return {
      item,
      saveItem, 
      error, 
      loading };
  }

  export { useLocalStorage}