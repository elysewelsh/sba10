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


    return (
        <div>
            <ul>
                {categories.map(category => 
                    <Link key={category.idCategory} to={"/category/" + category.strCategory}>
                        <li>{category.strCategory}</li>
                    </Link>
                )}
            </ul>
        </div>



    )
}

export default HomePage


//List all categories: https://www.themealdb.com/api/json/v1/1/categories.php