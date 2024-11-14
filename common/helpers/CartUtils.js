// recipe adding to cart
export const addToCart = (recipe) => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
        let userCart = JSON.parse(localStorage.getItem('userCart')) || [];
        userCart.push(recipe);
        localStorage.setItem('userCart', JSON.stringify(userCart));
    } else {
        let guestCart = JSON.parse(localStorage.getItem('guestCart')) || [];
        guestCart.push(recipe);
        localStorage.setItem('guestCart', JSON.stringify(guestCart));
    }
};

// get recipes cart
export const getCart = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    
    if (user) {
        return JSON.parse(localStorage.getItem('userCart')) || [];
    }
    return JSON.parse(localStorage.getItem('guestCart')) || [];
};
