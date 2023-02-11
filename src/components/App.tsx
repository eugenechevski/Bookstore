import React from 'react';
import LandingPage from 'components/landing-page/LandingPage';
import Home from 'components/home/Home';
import 'styles/App.css';
import 'tw-elements';

function App() {
  return (
    <div className="bg-secondary 
                    w-full 
                    h-full">
      <Home></Home>
    </div>
  );
}

export default App;
