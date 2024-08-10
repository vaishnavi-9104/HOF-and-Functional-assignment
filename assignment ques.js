// // Let's tackle each of these tasks one by one using JavaScript closures.

// // 1. Counter Application Using Closure
// // You can use closures to create a counter that tracks the number of times a button is clicked.
// function createCounter() {
//     let count = 0; // Private variable to keep track of the count

//     return function() {
//         count++;
//         console.log('Button clicked:', count);
//         return count;
//     };
// }

// // Example usage:
// const counter = createCounter();
// counter(); // Button clicked: 1
// counter(); // Button clicked: 2
// counter(); // Button clicked: 3


// // 2. Destructuring Object Properties
// // Given an object representing a customer order, you can use destructuring to extract and print the properties.
// const order = {
//     orderId: 123,
//     productName: 'Laptop',
//     quantity: 2
// };

// // Destructuring the object
// const { orderId, productName, quantity } = order;

// console.log(`Order ID: ${orderId}`);
// console.log(`Product Name: ${productName}`);
// console.log(`Quantity: ${quantity}`);

// // Cart Feature Using Closures
// // a) Create Cart and Get Cart Items
// function createCart() {
//     let cartItems = []; // Private array to store cart items

//     function getCartItems() {
//         return cartItems;
//     }

//     return {
//         getCartItems
//     };
// }

// // Example usage:
// const cart = createCart();
// console.log('Cart Items:', cart.getCartItems()); // Output: Cart Items: []

// function createCart() {
//     let cartItems = []; // Private array to store cart items

//     function getCartItems() {
//         return cartItems;
//     }

//     function addToCart(productId, name, quantity, price) {
//         const existingItemIndex = cartItems.findIndex(item => item.productId === productId);
//         if (existingItemIndex !== -1) {
//             // If the item already exists, increment its quantity
//             cartItems[existingItemIndex].quantity += quantity;
//         } else {
//             // Otherwise, add the new item
//             cartItems.push({ productId, name, quantity, price });
//         }
//     }

//     return {
//         getCartItems,
//         addToCart
//     };
// }

// // Example usage:
// cart.addToCart(1, 'Laptop', 1, 999.99);
// cart.addToCart(2, 'Mouse', 2, 25.99);
// cart.addToCart(1, 'Laptop', 1, 999.99); // Adding more of the same item
// console.log('Cart Items:', cart.getCartItems());

// function createCart() {
//     let cartItems = []; // Private array to store cart items

//     function getCartItems() {
//         return cartItems;
//     }

//     function addToCart(productId, name, quantity, price) {
//         const existingItemIndex = cartItems.findIndex(item => item.productId === productId);
//         if (existingItemIndex !== -1) {
//             // If the item already exists, increment its quantity
//             cartItems[existingItemIndex].quantity += quantity;
//         } else {
//             // Otherwise, add the new item
//             cartItems.push({ productId, name, quantity, price });
//         }
//     }

//     function removeItem(productId) {
//         cartItems = cartItems.filter(item => item.productId !== productId);
//     }

//     return {
//         getCartItems,
//         addToCart,
//         removeItem
//     };
// }

// // Example usage:
// cart.addToCart(1, 'Laptop', 1, 999.99);
// cart.addToCart(2, 'Mouse', 2, 25.99);
// cart.removeItem(2); // Removing item with productId 2
// console.log('Cart Items:', cart.getCartItems());


// // 4)Music Playlist Management System Using Closures
// // a) Create Playlist and Add Songs


// function createPlaylist(playlistName) {
//     let songs = []; // Private array to store songs

//     function addSong(songName, artist) {
//         songs.push({ songName, artist });
//     }

//     function listSongs() {
//         return songs;
//     }

//     return {
//         addSong,
//         listSongs
//     };
// }

// // Example usage:
// const myPlaylist = createPlaylist('My Favorite Songs');
// myPlaylist.addSong('Bohemian Rhapsody', 'Queen');
// myPlaylist.addSong('Imagine', 'John Lennon');

// console.log('Songs in Playlist:', myPlaylist.listSongs());


// Counter Application
function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log('Button clicked:', count);
        return count;
    };
}

// Destructuring Object Properties
const order = {
    orderId: 123,
    productName: 'Laptop',
    quantity: 2
};
const { orderId, productName, quantity } = order;
console.log(`Order ID: ${orderId}`);
console.log(`Product Name: ${productName}`);
console.log(`Quantity: ${quantity}`);

// Cart Feature
function createCart() {
    let cartItems = [];
    function getCartItems() {
        return cartItems;
    }
    function addToCart(productId, name, quantity, price) {
        const existingItemIndex = cartItems.findIndex(item => item.productId === productId);
        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity += quantity;
        } else {
            cartItems.push({ productId, name, quantity, price });
        }
    }
    function removeItem(productId) {
        cartItems = cartItems.filter(item => item.productId !== productId);
    }
    return {
        getCartItems,
        addToCart,
        removeItem
    };
}

// Playlist Management
function createPlaylist(playlistName) {
    let songs = [];
    function addSong(songName, artist) {
        songs.push({ songName, artist });
    }
    function listSongs() {
        return songs;
    }
    return {
        addSong,
        listSongs
    };
}
