import { createContext, useState } from "react"

// Step 1: Create the context (optional: add an argument for the default value)
export const FavoritesContext = createContext(null)

// OPTIONAL: Can create your own custom Provider component (removes a lot of logic from App)
function AppProviders({ children }) {

    const [fave, setFave] = useState('yuck')

    const toggleFave = () => setFave(fave === 'yuck' ? 'like' : 'yuck')


    return (
        // Step 2: Provide the context (add a value prop)
            <FavoritesContext.Provider value={{ fave, toggleFave }}>

                {children}

            </FavoritesContext.Provider>
    )
}

export default AppProviders