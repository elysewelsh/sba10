
import { Link, useParams } from "react-router-dom"
import  useFetchData  from '../hooks/useFetch'


function FavoritesPage() {
 
    const {idMeals} = useParams()

    let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+strCategory

    const { data, loading, error } = useFetchData(url);

    return (
        <div>
            Category Page
            {loading ? <>loading...</>:
            <ul>
            {data.meals.map(meal => 
                    <Link key={meal.idMeal} to={"/category/"+ strCategory +"/meal/" + meal.idMeal}>
                        <li>{meal.strMeal}</li>
                    </Link>
                )}
            </ul>
            }


        </div>

    )
}

export default CategoryPage