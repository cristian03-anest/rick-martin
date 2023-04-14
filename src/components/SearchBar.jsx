import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SearchBar(props) {   
   let [id, setID] = useState('')
   
   const handleChange = (event) => {
      setID(event.target.value)
   }

   return (      
      <div>
         <input type='search' onChange={handleChange} value={id}></input>
         <Link to='/home'>
            <button onClick={() => props.onSearch(id)}>Agregar</button> 
         </Link>
         
      </div>
   )
}
