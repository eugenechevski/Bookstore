import { Firestore } from "firebase/firestore";

export default function User(name?: string,
                             password?: string, 
                             email?: string, 
                             wishlist?: Book[], 
                             cart?: Book[],
                             signedin?: boolean,
                             db?: Firestore): User {
    
            
    var wishlistMap = {};
    var cartMap = {};
        
    if (wishlist !== undefined) {
        for (let i = 0; i < wishlist.length; i++) {
            wishlistMap[wishlist[i].getTitle()] = wishlist[i];
        }
    }

    if (cart !== undefined) {
        for (let i = 0; i < cart.length; i++) {
            cartMap[cart[i].getTitle()] = cart[i];;
        }
    }

    function getName(): string {
        return name;
    }

    function getPassword(): string {
        return password;
    }

    function getEmail(): string {
        return email;
    }

    function getWishlist(): Book[] {
        return Object.values(wishlistMap);
    }

    function getCart(): Book[] {
        return Object.values(cartMap);;
    }

    function getBookFromCart(bookTitle: string): Book {
        return cartMap[bookTitle];
    }

    function setName(newName: string): void {
        name = newName;
    }

    function setEmail(newEmail: string) {
        email = newEmail;
    }

    function setPassword(newPassword: string) {
        password = newPassword;   
    }

    function addToWishList(book: Book): void {
        wishlistMap[book.getTitle()] = book;
    }

    function addToCart(book: Book): void {
        cartMap[book.getTitle()] = book;
    }

    function removeFromCart(bookTitle: string): void {
        delete cartMap[bookTitle];
    }

    function removeFromWishlist(bookTitle: string): void {
        delete wishlistMap[bookTitle];
    }

    function isSignedIn(): boolean {
        return signedin;
    }

    function signIn(): void {
        signedin = true;
    }

    function signOut(): void {
        signedin = false;
    }

    function emptyCart(): void {
      Object.assign(cartMap, {});
    };

    return {
        getName,
        getPassword,
        getEmail,
        getWishlist,
        getCart,
        getBookFromCart,
        setName,
        setEmail,
        setPassword,
        addToWishList,
        addToCart,
        removeFromCart,
        removeFromWishlist,
        signIn,
        signOut,
        isSignedIn,
        emptyCart,
    }
}