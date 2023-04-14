import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom'

const Nav = function(props){    

    return (
        <div>
            <SearchBar onSearch={props.onSearch}/>
            <Link to='/about'>
                <button type='button'>About</button>
            </Link>
            <Link to='/home'>
                <button type='button'>Home</button>
            </Link>
            <Link to='/'>
                <button type='button'>Log out</button>
            </Link>
        </div>
    )
}

export default Nav