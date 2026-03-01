import { Link } from "react-router-dom"
import { useContext} from 'react'
import { FavoritesContext } from "../AppProviders"

function FavoritesPage() {
 
    const {fave} = useContext(FavoritesContext) || {fave:[]};

    return (
        <div>
            <h2>Favorites</h2>
            {
                fave.length === 0 ? <p>No faves</p> :
                <div>
                <ul>
                {fave.map(meal => (
                    <li key={meal}>
                        <Link to={"/meal/" + meal}>
                            {meal}
                        </Link>
                    </li>
                ))}
                </ul>
                </div>
            }
        </div>
    )
}

export default FavoritesPage;