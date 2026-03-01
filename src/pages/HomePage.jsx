import { Link } from "react-router-dom"
import { Spinner } from "../components/Spinner"
import { ErrorMessage} from "../components/ErrorMessage"
import useFetchData from "../hooks/useFetch"



function HomePage() {

    let url = 'https://www.themealdb.com/api/json/v1/1/categories.php'

    const { data, loading, error } = useFetchData(url);

    return (
        <div>
            {loading ? <Spinner/> : error ? <ErrorMessage/> :
            <ul>
                {data.categories.map(category => 
                    <Link key={category.idCategory} to={"/category/" + category.strCategory}>
                        <li>{category.strCategory}</li>
                    </Link>
                )}
            </ul>
            }
        </div>



    )
}

export default HomePage


//List all categories: https://www.themealdb.com/api/json/v1/1/categories.php