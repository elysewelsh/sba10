# 📋 Recipe Discovery

A client-side, feature-rich, single-page application helping users answer "what's for dinner?"

## 💻 Technologies Used

* **React:** Frontend library for building the user interface.
* **React Router:** Multi-strategy router for React bridging the gap from React 18 to React 19.
* **MealDB API:** Free Recipe API

## ✨ Features

* **Browse Recipes:** Users can browse recipes by category.
* **Recipe Search:** Users can search for specific recipes.
* **View Recipe Details:** Users can view detailed recipe information.
* **Manage Favorites:** Users can manage their personal list of "favorite" recipes.

## 🏛️ Component Architecture

    🚧 This will be re-written when functionality is understood.


    🚧 The diagram below is not currently representative of the actual flow, but is kept as a placeholder and formatting tool.

                     [ App ]                           
            (State: tasks, filterState)                            
              │                     │                  
              ▼                     ▼                  
        onFilterChange()    filteredTasks (data)  
              │               onStatusChange()    
              │                 onDelete()             
              │                     │             
              ▼                     ▼             
        [ TaskFilter ]          [TaskList]              
                                    │             
                                    ▼             
                                task (data)       
                              onStatusChange()    
                                 onDelete()       
                                    │             
                                    ▼             
                                [ TaskItem ]     

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

* **Project References:** References and code citations within components
* **To Format README:** These templates gave me formatting advice and inspiration:
     - [Scrimba README template](https://github.com/elysewelsh/lab2.1/blob/main/README.md)
     - [Frontend Mentor README template](https://github.com/elysewelsh/sba3/blob/main/README-template.md)
     - [asciiflow.com](https://asciiflow.com/#/) made the flow diagram for the architecture

## 💖 Acknowledgements

Anyone in the list below has full access to this code and can fork or clone it because they directly contributed to it in some way. Permission has been given to use my repository as reference material to anyone else in class as well.

* **TBD**

## 🧘 Reflections
1. What was the most challenging part of the project for you?
    >
    >
1. Give a brief explanation of a design decision you made (e.g. why you structured a hook a certain way, how you decided to manage a piece of state).
    >
    >