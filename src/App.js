const initialItems = [
  {id:1,description:"Passport",quantity:2,packed:false},
  {id:2,description:"socks",quantity:12,packed:true},
  {id:3,description:"Madhav",quantity:2,packed:true}
]

export default function App(){
  return(
    <div className="app">
      <Logo/>
    </div>
  )
}


function Logo(){
  return <h1>😎 Your Manager</h1>
}

function Form(){
  return(
    <div className="add-form">

    </div>
  )
}

function PackingList(){
  return(
    <div className="list">

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
    <footer className="stats">

    </footer>
  )
}
