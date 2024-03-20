import React from "react";

function useLocalStorage(itemName, inicialValue){

    const localStorageItem = localStorage.getItem(itemName)
    let parsedItem;
  
    if(!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(inicialValue));
      parsedItem = inicialValue;
    } else{
      parsedItem = JSON.parse(localStorageItem);
    }
  
    // parsedTodos = JSON.parse(localStorageItem);
    const [ item, setItem ] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem);
    }
  
    return [item, saveItem ];
  }

  export { useLocalStorage}