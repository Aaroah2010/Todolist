import { useState, useEffect } from 'react';
import './App.css';
 let tifls = () => {
let tdi = localStorage.getItem('tdi')
 
if( tdi == null){
  return []
}else{
  return JSON.parse(tdi)
}

 }
function App() {
let [item , setItem] = useState({text : '', id :  null })
let [itemList , setItemList] = useState(tifls())

let style ={
height : '50px'
}

let type = (e)=>{
setItem({text : e.target.value , id : Date.now() })
}
let addItem =(e)=>{
  if(item.text === ''){
  return
}
  setItemList([...itemList , item])
  setItem({ text : '' , id : null})
  e.target.previousSibling.focus()
}
let remove =(id) =>{
  let newList = [];
  for( let x = 0 ; x < itemList.length; x++){
    if( id === itemList[x].id){
      // ..
    }
  
  else{
newList.push(itemList[x])
  }
}
  setItemList(newList)
}
useEffect(() => {localStorage.setItem('tdi', JSON.stringify(itemList));
},[itemList]);

  return (
    <div className="container">
      <div className="hello"><input type="text" placeholder='Enter text' value={item.text} onChange={type} />
      <button onClick={addItem } className='add-button'>Add item</button>
      </div>
  { 
      
        itemList.map(function(name) {
          return(
            <div className='item'>
              <div className="itme-text">{name.text}</div>
              <div className="checkbox"><input type="checkbox" /> </div>
              <div className="remove-div"><button className='remove' onClick={() =>{remove(name.id)}}>remove</button></div>
            </div>
          ) 
        })
      }
    
    </div>
  );
}

export { App}; 
