import { useState} from "react";
import { Link } from 'react-router-dom';
import FavoritesPage from "../pages/FavoritesPage";

export function NavBar() {
    const [input, setInput] = useState('');
    
    return (
        <nav>
            <Link to="/">Home</Link>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="search for your fave meal..."
            />
            <Link to={"/search/"+input}>
                <button>Search</button>
            </Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
    )
};