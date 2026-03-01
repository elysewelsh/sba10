import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import { NavBar } from './components/Navbar'
import SearchResultsPage from './pages/SearchResultsPage'
import AppProviders from './AppProviders'

function App() {
  

  return (
    <AppProviders>
    <>
    <NavBar/>
      <nav>
        <ul>
          <li className="font-white"><Link to="/">Home</Link></li>
          {/* <li><Link to="/category">Category</Link></li> */}
        </ul>
      </nav>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="category/:strCategory" element={<CategoryPage />} />
        <Route path="category/:strCategory/meal/:idMeal" element={<RecipeDetailPage />} /> 
        <Route path="meal/:idMeal" element={<RecipeDetailPage/>}/>
        <Route path="search/:searchInput" element={<SearchResultsPage />} />
        <Route path="*" element={<>Not found</>} />
      </Routes>
      
    </>
    </AppProviders>
  )
}

export default App
