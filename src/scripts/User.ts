export default function User(name: string,
                             password: string, 
                             email: string, 
                             wishlist: Set<Book>, 
                             cart: Set<Book>): User {
    

    function getName(): string {
        return name;
    }

    function getPassword(): string {
        return password;
    }

    function getEmail(): string {
        return email;
    }

    function getWishlist(): Set<Book> {
        return wishlist;
    }

    function getCart(): Set<Book> {
        return cart;
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

    function addToWishList(book: Book) {
        wishlist.add(book);
    }

    function addToCart(book: Book) {
        cart.add(book);
    }

    function removeFromCart(book: Book) {
        cart.delete(book);
    }

    function removeFromWishlist(book: Book) {
        wishlist.delete(book);
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