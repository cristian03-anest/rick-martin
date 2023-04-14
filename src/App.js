import './App.css';
import Cards from './components/Cards.jsx';
import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import axios from 'axios'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Detail from './components/Detail';
import About from './components/About';
import Form from './components/Form';

const PASSWORD = 'manolito1'
const EMAIL = 'manolito@dominiounknown.com'

function App() {
   let location = useLocation()
   let [characters, setCharacters] = useState([])
   let [access, setAccess] = useState(false)
   let navigate = useNavigate()   
   
   const onSearch = (id) => {      
      let repeatedId = characters.filter((element) => Number(id) === element.id)      
      if(repeatedId.length > 0){
         return
      }
      
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   

   const loginAccess = (userData) => {
      if(userData.email === EMAIL || userData.password === PASSWORD){
         setAccess(true)
         navigate('/home')          
      }            
   }

   const onClose = (id) => {        
      let filterIdRemove = characters.filter((element) => element.id !== id)
      setCharacters(filterIdRemove)   
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]); 
   
   return (
      <div className='App'> 
         {location.pathname !== '/' ? <Nav onSearch={onSearch}/> : null}         
         <Routes> 
            <Route path='/' element={<Form loginAccess={loginAccess}/>}/>           
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/detail/:id' element={<Detail/>} />
            <Route path='/about' element={<About/>} />
         </Routes>
         
              
      </div>
   );
}



export default App;
