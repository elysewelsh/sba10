import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import AppProviders from "../AppProviders"

// import { products } from "../data"

function RecipeDetailPage() {

    const [recipe, setRecipe] = useState({})

    const { idMeal } = useParams()

    useEffect(() => {

        const getRecipe = async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + idMeal)
            const data = await response.json()
            console.log(data.meals);
            setRecipe(data.meals[0])
        }

        getRecipe()
        

    }, [idMeal])

    const ingredients = [];
    for(let i=1; i < 21; i++ ) {
        const ingredient = recipe[`strIngredient${i}`];
        if (ingredient && ingredient !== "") {
            ingredients.push(
                <li key={i}>{ingredient}</li>
            );
        }
    }
    console.log(ingredients);
    
    // const product = products.find(prod => prod.id == id)

    return (
        // <AppProviders>
        !recipe.strMeal ? <></> :
            <div>
                <h2>{recipe.strMeal}</h2>
                <div>
                    <div>Details for Product: {recipe.idMeal}</div>
                    <div>Name: {recipe.strMeal}</div>
                </div>
                <ul>
                    {ingredients}
                </ul>
            </div>

    )
}

export default RecipeDetailPage

//Lookup full recipe details by ID: https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772