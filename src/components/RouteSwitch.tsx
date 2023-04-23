import { Route, Routes } from "react-router-dom";
import Home from "src/components/home/Home";
import BookComponent from "src/components/book/BookComponent";
import CategoryComponent from "src/components/category/CategoryComponent";
import AfterCheckout from "src/components/forms/AfterCheckout";
import AfterCreation from "src/components/forms/AfterCreation";
import CheckoutForm from "src/components/forms/CheckoutForm";
import CreateAccountForm from "src/components/forms/CreateAccountForm";
import SignInForm from "src/components/forms/SignInForm";
import LandingPage from "./landing-page/LandingPage";
import AfterSignIn from "./forms/AfterSignIn";
import SignOutForm from "./forms/SignOutForm";

const RouteSwitch = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage></LandingPage>}/>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/categories/:categoryFormattedName/:bookTitle" element={<BookComponent/>}></Route>
            <Route path="/categories/:categoryFormattedName" element={<CategoryComponent/>}></Route>
            <Route path="/checkout" element={<CheckoutForm/>}></Route>
            <Route path="/create-account" element={<CreateAccountForm/>}></Route>
            <Route path="/sign-in" element={<SignInForm/>}></Route>
            <Route path="/sign-out" element={<SignOutForm/>}></Route>
            <Route path="/after-checkout" element={<AfterCheckout/>}></Route>
            <Route path="/after-sign-in" element={<AfterSignIn/>}></Route>
            <Route path="/after-creation" element={<AfterCreation/>}></Route>
        </Routes>
    )

}

export default RouteSwitch;
