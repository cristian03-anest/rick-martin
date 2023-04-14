import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Detail = () => {    
    let [character, setCharacter] = useState({})
    let id = useParams().id    
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]); 

     return (
        <div>
            <p>{character?.name}</p>
            <p>{character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.gender}</p>
            <p>{character?.origin?.name}</p>            
        </div>
     );
}

export default Detail