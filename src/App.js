import { useState } from "react"

export default function App(){
  const[items , setItem]=useState([])

function handleAddItem(item){
setItem(items=>[...items , item])
}

function handleDeleteItem(id){
  setItem(items.filter(item=>item.id !== id))
}

function handleToggleItemm(id){
  setItem(items=>items.map(item=>item.id === id ? {...item , packed:!item.packed} : item))
}
  return(
    <div className="app">
      <Header/>
      <Form onAddItem={handleAddItem}/>
      <PackingList itemData={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItemm} />
      <Stats itemData={items} />
    </div>
  )
}

function Header(){
  return <h1>Add Some Sauce Bruuh😶‍🌫️</h1>
}

function Form({onAddItem}){
  const[description , setDescription] = useState("")
const[quantity , setQuantity] = useState(1)

function handleOnSubmit(e){
  e.preventDefault();
  if(!description) return null;
  const newItem = {description,id:new Date().getSeconds() , quantity,packed : false }
  console.log(newItem)
setDescription("")
setQuantity(1)

onAddItem(newItem)
}
  return(
         <form className="add-form" onSubmit={handleOnSubmit}>
         <h3>Add Sauce Here Bruh</h3>
    <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
      {Array.from({length:10} , (_,i)=>i+1).map(num=><option value={num} key={num}>
        {num}
      </option>)}
    </select>

    <input type="text" placeholder="Saurce💦" value={description} onChange={(e)=>setDescription(e.target.value)}/>
    <button>Add Sauce</button>
        </form>
  )
}

function PackingList({itemData , onDeleteItem ,onToggleItem}){
  return(
    <div className="list">
      <ul>
      {itemData.map(item=><Item itemObj={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />)}
      </ul>
    </div>
  )
}

function Item({itemObj , onDeleteItem , onToggleItem}){
  return(
    <li>
      <input type="checkbox" value={itemObj} onChange={()=>onToggleItem(itemObj.id)}/>
      <span style={itemObj.packed ? {textDecoration:"line-through"} :{} }>{itemObj.quantity} {itemObj.description}</span>
      <button onClick={()=>onDeleteItem(itemObj.id)}>👀</button>
    </li>
  )
}

function Stats({ itemData}){
  const numItem = itemData.length;
  return(
    <footer className="stats ">
      <em>You have {numItem} item on your list, and you already packed</em>
    </footer>
  )
}