import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import AppProviders from "../AppProviders"

// import { products } from "../data"

function ProductDetailPage() {

    const [product, setProduct] = useState({})

    const { id } = useParams()

    useEffect(() => {

        const getProduct = async () => {
            const response = await fetch('https://dummyjson.com/products/' + id)
            const data = await response.json()
            setProduct(data)
        }

        getProduct()

    }, [id])
    
    // const product = products.find(prod => prod.id == id)

    return (
        <AppProviders>
            <div>
                <h2>RecipeDetailPage</h2>
                <div>
                    <div>Details for Product: {id}</div>
                    <div>Name: {product.title}</div>
                </div>
            </div>
        </AppProviders>
    )
}

export default ProductDetailPage

//Lookup full recipe details by ID: https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772