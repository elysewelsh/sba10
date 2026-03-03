# 📋 Recipe Discovery

A client-side, feature-rich, single-page application helping users answer "what's for dinner?"

## 💻 Technologies Used

* **React:** Frontend library for building the user interface.
* **React Router:** Multi-strategy router for React bridging the gap from React 18 to React 19.
* **MealDB API:** Free Recipe API
* **Tailwind CSS:** Utility-first framework for styling.

## ✨ Features

* **Browse Recipes:** Users can browse recipes by category.
* **Recipe Search:** Users can search for specific recipes.
* **View Recipe Details:** Users can view detailed recipe information.
* **Manage Favorites:** Users can manage their personal list of "favorite" recipes. 

## ⚙️ Installation

To run this project locally, execute the following commands in your terminal:

```bash
# Clone the repository
git clone https://github.com/elysewelsh/sba10.git

# Navigate into the directory
cd recipe-discovery

# Install dependencies (React, TypeScript, Tailwind, etc.)
npm install

# Start the local development server
npm run dev
```

## 📖 References

* **Project References:** 
    - https://github.com/JadeTwo/2025-RTT-74/tree/main/mod-10
    - https://reactrouter.com/6.30.3/start/tutorial
    - https://dev.to/yuya0114/how-to-display-line-breaks-in-react-for-the-n-newline-character-3b0h
    - https://tailwindcss.com/docs/white-space
    - https://www.w3tutorials.net/blog/multiple-path-names-for-a-same-component-in-react-router/
    - https://bobbyhadz.com/blog/react-button-link
    - https://tailwindcss.com/docs/animation
    - Other references and code citations within components
* **To Format README:** These templates gave me formatting advice and inspiration:
     - [Scrimba README template](https://github.com/elysewelsh/lab2.1/blob/main/README.md)
     - [Frontend Mentor README template](https://github.com/elysewelsh/sba3/blob/main/README-template.md)
     - [asciiflow.com](https://asciiflow.com/#/) made the flow diagram for the architecture

## 💖 Acknowledgements

Permission has been given to use my repository as reference material to anyone else in class.

## 🧘 Reflections
1. What was the most challenging part of the project for you?
    > - Favorites, by far. I kept getting undefined data when I used the custom localStorage hook, so I had to keep adding more and more safeguards like try catch and "if null", "!variable ?". Then I had to make sure every single one of my variables matched because I was using "faves" for my favorite state/array and not "fave", singular. 
    > - I used catch {e} instead of catch (e) and almost died of exhaustion trying to figure it out.
    > - json stringify vs direct data when switching to custom fetch hook
    > - wasted time to write/understand/edit fetch for meals using state within category page vs. just using fetch hook
    > - learned to use loading as control instead of tenery based on if data exists
    > - use useFetchData's return data explicitly - can't rename/use variables/state to handle it
    > - installing tailwind fully
    > - Figuring out I needed to add a new route path to the same page (RecipeDetails from Search)
    > - Failed to add setTimeout on fetch in order to see/test spinner. It made the delay so bad (even at 500ms) that data was set to null and the pages wouldn't display.
    > - Can't center ingredients on RecipeCard.

1. Give a brief explanation of a design decision you made (e.g. why you structured a hook a certain way, how you decided to manage a piece of state).
    > - I think the only decisions I made where how to display the recipe details on the recipe card and deciding to have Home, Favorites, and the search bar all in the NavBar.