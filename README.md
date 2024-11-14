# Recipe App

# Features Implemented

1. Basic Authentication
- Implemented sign up, login, log out functionality to authenticate a user. Local-storage is used to save user's data.
- A new user can register, registered user can login and logout.
2. All Recipes Page
- All recipes data loaded by calling API and displayed using card.
- Users can view all recipes by navigating to all recipes route.
3. Add Recipe to Cart
- Implemented adding recipe to cart using local-storage for both logged in user and not logged in user. Displayed cart data using card and ensured cart is persisting.
- Users can add recipes to cart and view their recipes cart. Cart can store data as guest if the user is not logged in. On the contrary, cart can store data to the user’s account when user is logged in.

# Bug Fixes

1. Fixed Modal
- Added missing await on getrecipedetails on httpkit.js
- Get id which was undefined for specific meal by specifying children on modal.jsx
- Set loading to true on singlerecipe.jsx 

2. Fixed Search Functionality
- Set search input value to search input state as string which was setting as an object
- Updated handleSearch function on recipeslist.jsx by passing search input for API call based on the input value and then set the recipes state by the search value 

3. Handled Some Warning
- Unique key prop on recipeslist.jsx
- LCP (largest contentful paint) on hero.jsx by setting priority to true and removing lazy loading
- Extension mismatch setting suppressHydrationWarning to true on layout.jsx

# Time Estimate

Total Time Spent: Approximately 16 Hours.
