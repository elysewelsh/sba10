import { useContext } from 'react'
import  AppProviders, { FavoritesContext }  from '../AppProviders';

function RecipeCard ({recipe}) {

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
    const instructions = recipe.strInstructions

    const {fave, toggleFave} = useContext(FavoritesContext);
    const isFave = fave?.includes(recipe.idMeal)

    return (
        <AppProviders>
            <div className="text-center">
                <h2 className="font-bold">{recipe.strMeal}</h2>
                <div className="flex flex-col">
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
                </div>
                <div>
                    <h3 className="font-bold">Instructions</h3>
                    <div className="whitespace-pre-wrap">{instructions}</div>
                </div>
                <button className="m-5" onClick ={() => toggleFave(recipe.idMeal)}>
                    {isFave ? 'unfave' : 'fave'}
                </button>
            </div>
            </AppProviders>
    )
}

export default RecipeCard