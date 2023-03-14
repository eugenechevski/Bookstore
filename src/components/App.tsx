import { createContext } from 'react';
import RouteSwitch from './RouteSwitch';
import User from 'scripts/User';
import Book from 'scripts/Book';
import 'styles/App.css';
import 'tw-elements';

const UserContext = createContext({} as User);

function App() {
  return (
    <UserContext.Provider value={User('Guest', '', '', [1, 2, 3, 4, 5].map((i) => Book("1984" + i, require("src/assets/images/bookcover.png"), i, i, "synopsis")), 
                                                       [1, 2, 3, 4, 5].map((i) => Book("1984" + i, require("src/assets/images/bookcover.png"), i, i, "synopsis")), false)}>
      <RouteSwitch></RouteSwitch>
    </UserContext.Provider>
  );
}

export { App, UserContext };
