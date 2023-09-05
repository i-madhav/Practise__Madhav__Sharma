import { useState } from "react"

export default function App(){
  return(
    <div className="app">
      <Header/>
      <Form/>
    </div>
  )
}

function Header(){
  return <h1>Add Some Sauce Bruuh😶‍🌫️</h1>
}

function Form(){
  const[description , setDescription] = useState("")
const[quantity , setQuantity] = useState(1)

function handleOnSubmit(e){
  e.preventDefault();


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

function PackingList(){
  return(
    <div>

    </div>
  )
}

function Item(){
  return(
    <li>

    </li>
  )
}

function Stats(){
  return(
    <div>
      
    </div>
  )
}