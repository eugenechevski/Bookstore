import React from 'react';
import LandingPage from 'components/landing-page/LandingPage';
import Home from 'components/home/Home';
import Book from 'components/book/Book';
import Category from 'components/category/Category';
import AfterCreation from 'components/forms/AfterCreation';
import CreateAccountForm from 'components/forms/CreateAccountForm';
import SignInForm from 'components/forms/SignInForm';
import CheckoutForm from 'components/forms/CheckoutForm';
import AfterCheckout from 'components/forms/AfterCheckout';
import 'styles/App.css';
import 'tw-elements';
import uniqid from 'uniqid';

const pages = {
  'landing-page': <LandingPage></LandingPage>,
  'home': <Home></Home>,
  'book': <Book></Book>,
  'category': <Category></Category>,
  'after-creation': <AfterCreation></AfterCreation>,
  'create-account': <CreateAccountForm></CreateAccountForm>,
  'sign-in': <SignInForm></SignInForm>,
  'checkout': <CheckoutForm></CheckoutForm>,
  'after-checkout': <AfterCheckout></AfterCheckout>
}

function App() {
  const [isShown, setIsShown] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(pages['landing-page']);
  const [navMenuPosition, setNavMenuPosition] = React.useState([0, 0]);

  const handleDragNavMenu = (e) => {
    setNavMenuPosition([e.clientX, e.clientY]);
  };

  return (
    <div >
      {/* Navigation menu */}
      <div draggable
           onDragEnd={handleDragNavMenu}
           style={{
            left: navMenuPosition[0],
            top: navMenuPosition[1],
           }} 
           className="nav-menu 
                      absolute 
                      top-3 
                      left-3
                      z-[100] ">
        <button onClick={() => setIsShown(!isShown)} 
                className="absolute 
                           top-3 
                           left-3 
                           text-base-100 
                           bg-primary 
                           rounded-full 
                           p-1">{isShown ? 'hide' : 'show'}</button>
        <div className={`btn-group 
                         btn-group-vertical 
                         w-48 
                         ${!isShown ? 'hidden' : ''}`}>
          { Object.keys(pages).map((page) => <button key={uniqid()} 
                                                     className="btn" 
                                                     onClick={() => setCurrentPage(pages[page])}>{page}</button>) }
        </div>
      </div>
      {/* Page content */}
      <div>
        {currentPage}
      </div>
    </div>
  );
}

export default App;
