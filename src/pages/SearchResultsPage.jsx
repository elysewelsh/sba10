import { Link, useParams } from "react-router-dom"
import  useFetchData  from '../hooks/useFetch'

function SearchResultsPage() {
 
    const {searchInput} = useParams()

    let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+searchInput

    const { data, loading} = useFetchData(url);

    return (
        <div>
            {
                loading ? <>loading...</>: (!data.meals) ? <p>"No recipes found for {searchInput}"</p> :
                <div>
                <h2> Search Results for {searchInput}</h2>
                <ul>
                {data.meals.map(meal => (
                    <li key={meal.idMeal}>
                        <Link to={"/meal/" + meal.idMeal}>
                            {meal.strMeal}
                        </Link>
                    </li>
                ))}
                </ul>
                </div>
            }
        </div>
    )
}

export default SearchResultsPage;
// Search meal by name: https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata