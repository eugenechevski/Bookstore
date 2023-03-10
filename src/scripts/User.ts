export default function User(name: string,
                             password: string, 
                             email: string, 
                             wishlist: Book[], 
                             cart: Book[]): User {
    

    var wishlistMap = {};
    var cartMap = {};
        
    for (let i = 0; i < wishlist.length; i++) {
        wishlistMap[wishlistMap[i].getTitle()] = wishlistMap[i];
    }

    for (let i = 0; i < cart.length; i++) {
        cartMap[cartMap[i].getTitle()] = cartMap[i];
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
        console.log(wishlistMap);
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

    return {
        getName,
        getPassword,
        getEmail,
        getWishlist,
        getCart,
        setName,
        setEmail,
        setPassword,
        addToWishList,
        addToCart,
        removeFromCart,
        removeFromWishlist,
    }
}