import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import  useFetchData  from '../hooks/useFetch'
// import AppProviders from '../AppProviders'

// import { products } from "../data"

function CategoryPage() {
 
    const {strCategory} = useParams()

    let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='+strCategory

    const { data, loading, error } = useFetchData(url);

    return (
    // <AppProviders>
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

             {/* <Routes>
                <Route path="meal/:idMeal" element={<RecipeDetailPage />} />
            </Routes>  */}

        </div>
    // </AppProviders>


    )
}

export default CategoryPage

//Filter by category: https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood