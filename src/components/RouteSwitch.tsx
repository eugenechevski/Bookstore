import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "src/components/home/Home";
import Book from "src/components/book/Book";
import Category from "src/components/category/Category";
import AfterCheckout from "src/components/forms/AfterCheckout";
import AfterCreation from "src/components/forms/AfterCreation";
import CheckoutForm from "src/components/forms/CheckoutForm";
import CreateAccountForm from "src/components/forms/CreateAccountForm";
import SignInForm from "src/components/forms/SignInForm";
import dataFetch from "src/utils/dataFetch";
import LandingPage from "./landing-page/LandingPage";
import AfterSignIn from "./forms/AfterSignIn";

const RouteSwitch = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<LandingPage></LandingPage>}/>
                <Route path="/home" element={<Home categories={dataFetch.getCategories()}/>}></Route>
                <Route path="/book" element={<Book/>}></Route>
                <Route path="/category" element={<Category/>}></Route>
                <Route path="/checkout" element={<CheckoutForm/>}></Route>
                <Route path="/create-account" element={<CreateAccountForm/>}></Route>
                <Route path="/sign-in" element={<SignInForm/>}></Route>
                <Route path="/after-checkout" element={<AfterCheckout/>}></Route>
                <Route path="/after-sign-in" element={<AfterSignIn/>}></Route>
                <Route path="/after-creation" element={<AfterCreation/>}></Route>
            </Routes>
        </HashRouter>
    )

}

export default RouteSwitch;
