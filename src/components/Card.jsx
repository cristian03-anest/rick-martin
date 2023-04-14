import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';
import { useState, useEffect } from 'react';



function Card(props) { 
   let [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {      
      if(isFav){
         setIsFav(false)
         props.removeFav(props.id)
      }
      else{
         setIsFav(true)
         props.addFav(props)
      }      
   }

   useEffect(() => {
      props.myFavorite.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorite]);

   return (
      
      <div>
         {
            isFav ? (<button onClick={handleFavorite}>❤️</button>)
               : (<button onClick={handleFavorite}>🤍</button>)
         }
         <button type='button' onClick={()=>{props.onClose(props.id)}}>X</button>
         <Link to={`/detail/${props.id}`}>
            <h3>{props.name}</h3>
         </Link>                  
         <img src={props.image} alt="" />
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (data) => dispatch(addFav(data)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
   return {
      myFavorite: state.myFavorite
   }
}


export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)