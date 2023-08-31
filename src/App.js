import { useState } from "react"



export default function App(){
  const[items,setItem]=useState([])

  function handleAddItems(item){
    setItem(items =>[...items, item])
  }

  function handleDeleteItem(id){
    setItem(items=>items.filter(item=>item.id !==id))
  }
  return(
    <div className="app">
      <Logo/>
      <Form onAddItms={handleAddItems} />
      <PackingList itemsData = {items} onDeleteItems={handleDeleteItem} />
      <Stats/>
    </div>
  )
}


function Logo(){
  return <h1>😎 Your Manager</h1>
}

function Form({onAddItms}){
  const[description,setDescription]=useState("");
  const[quantity,setQuantity] = useState(1);

  function handleSubmit(e){
    e.preventDefault();
    if(!description) return null;

    const newItem = {description, id:Date.now(), packed: false,quantity};
    console.log(newItem)

    setDescription("")
    setQuantity(1)

    onAddItms(newItem);
  }

  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add What you want to Add 👀</h3>
      <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
        {Array.from({length:30} , (_,i)=>i+1).map(num => <option value={num} key={num}>
          {num}
        </option>)}
      </select>

      <input type="text" placeholder="Type here bitch" value={description} onChange={(e)=>setDescription(e.target.value)}/>
      <button>Add Bitch</button>
    </form>
  )
}

function PackingList({itemsData , onDeleteItems}){
  return(
    <div className="list">
      <ul>
        {itemsData.map(item=><Item itemObj={item} key={item.id}  onDeleteItems={onDeleteItems} />)}
      </ul>
    </div>
  )
}

function Item({itemObj , onDeleteItems}){
  return(
    <li>
      <span style={itemObj.packed ? {} : {textDecoration:"line-through"} }>{itemObj.quantity} {itemObj.description} </span>
      <button onClick={() => onDeleteItems(itemObj.id)}>😒</button>
    </li> 
  )
}

function Stats(){
  return(
    <footer className="stats">
      <em>You Know What You Want Bitch 😎</em>
    </footer>
  )
}
