import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// import { products } from "../data"

function HomePage() {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        const getCategories = async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            const data = await response.json()
            setCategories(data.categories)
        }

        getCategories()

    }, [])

    console.log(categories);

    return (
        <div>
            Home Page
            <ul>
                {categories.map(category => 
                    <Link key={category.idCategory} to={"/category/" + category.strCategory}>
                        <li>{category.strCategory}</li>
                    </Link>
                )}
            </ul>

            {/* <Routes>
                <Route path="/:idCategory" element={<CategoryPage />} />
            </Routes> */}
        </div>



    )
}

export default HomePage


//List all categories: https://www.themealdb.com/api/json/v1/1/categories.php