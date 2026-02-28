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
    const measurements = [];
    for(let i=1; i < 21; i++ ) {
        const measure = recipe[`strMeasure${i}`];
        if (measure && measure !== "") {
            measurements.push(
                <li key={i}>{measure}</li>
            );
        }
    }
    console.log(ingredients);
    console.log(measurements);
    
    // const product = products.find(prod => prod.id == id)

    return (
        // <AppProviders>
        !recipe.strMeal ? <></> :
            <div className="text-center">
                <h2 className="font-bold">{recipe.strMeal}</h2>
                <h3 className="font-bold mt-10">Ingredients</h3>
                <div className="flex flex-row gap-3 mt-3">
                    <div>
                        <h4 className="mb-2 font-bold">Measurement</h4>
                        <ul>
                        {measurements}
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-2 font-bold">Ingredient</h4>
                        <ul>
                        {ingredients}
                        </ul>
                    </div>

                </div>
                <h3 className="font-bold">Instructions</h3>

            </div>

    )
}

export default RecipeDetailPage

//Lookup full recipe details by ID: https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772