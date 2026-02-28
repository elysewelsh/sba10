import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
// import AppProviders from '../AppProviders'

// import { products } from "../data"

function CategoryPage() {

    const [mealList, setMealList] = useState([])
    
    const {strCategory} = useParams()

    useEffect(() => {
        const getMeals = async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+strCategory)
            const data = await response.json()
            setMealList(data.meals)
        }

        getMeals()

    }, [strCategory])

    // 
    return (
    // <AppProviders>
        <div>
            Category Page
            <ul>
                {mealList.map(meal => 
                    <Link key={meal.idMeal} to={"/category/"+ strCategory +"/meal/" + meal.idMeal}>
                        <li>{meal.strMeal}</li>
                    </Link>
                )}
            </ul>


             {/* <Routes>
                <Route path="meal/:idMeal" element={<RecipeDetailPage />} />
            </Routes>  */}

        </div>
    // </AppProviders>


    )
}

export default CategoryPage

//Filter by category: https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood