// cart.js

// Initialize cart
let cart = [];

// Load cart from localStorage
if (localStorage.getItem('shoppingCart')) {
    cart = JSON.parse(localStorage.getItem('shoppingCart'));
}

// Function to add an item to the cart
function addToCart(item) {
    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
        existingItem.quantity += item.quantity;
    } else {
        cart.push(item);
    }
    syncCart();
}

// Function to remove an item from the cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    syncCart();
}

// Function to update item quantity in the cart
function updateCartQuantity(itemId, quantity) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity = quantity;
    }
    syncCart();
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Function to synchronize cart data to localStorage
function syncCart() {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// Function to clear the cart
function clearCart() {
    cart = [];
    syncCart();
}

// Expose the cart functions
export { addToCart, removeFromCart, updateCartQuantity, calculateTotal, clearCart, cart };