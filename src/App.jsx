import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
// import ProductsPage from './pages/ProductsPage'
// import ProductDetailPage from './pages/ProductDetailPage'

function App() {
  

  return (
    <>
      <nav>
        <ul>
          <li className="font-white"><Link to="/">Home</Link></li>
          <li><Link to="/category">Category</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:idCategory" element={<CategoryPage />} />
        {/* <Route path="/products/:id" element={<ProductDetailPage />} />  */}
        <Route path="*" element={<>Not found</>} />
      </Routes>
      
    </>
  )
}

export default App
