import { useState} from "react";
import { Link } from 'react-router-dom';

export function NavBar() {
    const [input, setInput] = useState('');
    
    return (
        <nav>
            <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="search for your fave meal..."
            />
            <Link to={"/search/"+input}>
                <button>Search</button>
            </Link>
        </nav>
    )
};