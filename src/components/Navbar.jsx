import { useState} from "react";
import { Link } from 'react-router-dom';
import FavoritesPage from "../pages/FavoritesPage";

export function NavBar() {
    const [input, setInput] = useState('');
    
    return (
        <nav className="flex flex-col m-10 p-5 border-b-1 w-full">
            <div className="flex flex-row justify-evenly">
            <Link className="" to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
            </div>
            <div className="flex flex-row gap-2 my-5">
            <input
            className="border-1 h-11 rounded-md p-4 bg-gray-700"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="search for your fave meal..."
            />
            <Link to={"/search/"+input}>
                <button>Search</button>
            </Link>
            </div>
        </nav>
    )
};