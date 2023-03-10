export default function User(firstName: string, 
                             lastName: string, 
                             password: string, 
                             email: string, 
                             wishlist: Set<Book>, 
                             cart: Set<Book>): User {
    
    function getFirstName(): string {
        return firstName;
    }

    function getLastName(): string {
        return lastName;
    }

    function getFullName(): string {
        return firstName + " " + lastName;
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

    function setFirstName(first: string) {
        firstName = first;
    }

    function setLastName(last: string) {
        lastName = last;
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
        getFirstName,
        getLastName,
        getFullName,
        getPassword,
        getEmail,
        getWishlist,
        getCart,
        setFirstName,
        setLastName,
        setEmail,
        setPassword,
        addToWishList,
        addToCart,
        removeFromCart,
        removeFromWishlist,
    }
}