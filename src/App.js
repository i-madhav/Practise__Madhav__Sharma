import { useState } from "react"

export default function App(){
const[items , setItems] = useState([])

function handleAddItem(item){
  setItems(items=>[...items , item])
}

function handleDeleteItem(id){
  setItems(items=>items.filter(item=> item.id !== id))
}

function handleUpdateItem(id){
  setItems(items=>items.map(item=> item.id === id ?{...item , packed:!item.packed} : item ))
}

function handleClearList(){
  
  setItems([]);
}
  return(
    <div className="app ">
<Logo/>
<Form onAddItem={handleAddItem} />
<PackingList itemData={items}  onDeleteItem={handleDeleteItem} onUpdateItem={handleUpdateItem} onClearList={handleClearList} />
<Stats itemsData ={items} />
    </div>
  )
}

function Logo(){
  return <h1>👀Madhav Sharma👀</h1>
}

function Form({onAddItem}){
const[description , setDescription] = useState("")
const[quantity , setQuantity] = useState(1)

function handleOnSubmit(e){
  e.preventDefault();
  if(!description) return null;
  const newItem = {description , id:new Date().getSeconds() ,quantity , packed:false}
  console.log(newItem)

  setDescription("")
  setQuantity(1)

  onAddItem(newItem)
}

  return(
    <form className="add-form" onSubmit={handleOnSubmit}>
      <h3>Add Stuff Here Bruh😒</h3>
      <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
        {
          Array.from({length:10} , (_,i)=>i+1).map(num=><option value={num} key={num}>
            {num}
          </option>)
        }
      </select>
      <input type="text" placeholder="Write Here💦 " value={description} onChange={(e)=>setDescription(e.target.value)}/>
      <button>Add Stuff💥</button>
    </form>
  )
}

function PackingList({itemData , onDeleteItem , onUpdateItem , onClearList}){
  const[sortBy , setSortBy] = useState("input")
let sortedItem;
if(sortBy === "input") sortedItem = itemData;
if(sortBy === "description") sortedItem = itemData.slice().sort((a,b)=>a.description.localeCompare(b.description));
if(sortBy === "packed") sortedItem = itemData.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))


  return(
    <div className="list">
      <ul>
        {sortedItem.map(item=><Item itemObj={item} key={item.id}  onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem} />)}
      </ul>

    <div className="actions">
    <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
      <option value="input"> Sort by input order</option>
      <option value="description">Sort by description</option>
      <option value="packed">Sort by packed status</option>
    </select>

    <button onClick={()=>onClearList(itemData)}>Boom💥</button>
    </div>

    </div>
  )
}

function Item({itemObj , onDeleteItem , onUpdateItem}){
  return(
    <li>
      <input type="checkbox" value ={itemObj} onClick={()=>onUpdateItem(itemObj.id)}/>
      <span  style={itemObj.packed ? {textDecoration:"line-through"} : {} }>{itemObj.quantity} {itemObj.description}</span>
      <button onClick={()=>onDeleteItem(itemObj.id)}>❌</button>
    </li>
  )
}

function Stats({itemsData}){
  const numItem = itemsData.length;
  return(
    <footer className="stats">
      <em>You have {numItem} items in your bag.</em>
    </footer>
  )
}