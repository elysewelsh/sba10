import { useParams } from "react-router-dom"
import RecipeCard from "../components/RecipeCard"
import useFetchData from "../hooks/useFetch"
import { Spinner} from "../components/Spinner"
import { ErrorMessage } from "../components/ErrorMessage"


function RecipeDetailPage() {

    const { idMeal } = useParams()

    let url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal

    const { data, loading, error } = useFetchData(url);


    return (
        <div>
        {loading ? <Spinner/>: error ? <ErrorMessage/> :
        !data.meals[0].strMeal ? <></> :
        <RecipeCard recipe={data.meals[0]} />
        }
        </div>
    )
}

export default RecipeDetailPage

//Lookup full recipe details by ID: https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772