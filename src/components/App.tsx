import { createContext } from 'react';
import DataObject from 'utils/DataObject';
import RouteSwitch from './RouteSwitch';
import User from 'scripts/User';
import Book from 'scripts/Book';
import 'styles/App.css';
import 'tw-elements';

const UserContext = createContext({} as User);
const DataContext = createContext({} as DataObject);

function App() {
  return (
    <DataContext.Provider value={DataObject}>
      <UserContext.Provider value={User('Guest', '', '', [1, 2, 3, 4, 5].map((i) => Book("1984" + i, 'Fiction', 'George Orwell', require("src/assets/images/bookcover.png"), i, i, "synopsis")), 
                                                         [1, 2, 3, 4, 5].map((i) => Book("1984" + i, 'Fiction', 'George Orwell', require("src/assets/images/bookcover.png"), i, i, "synopsis")), false)}>
        <RouteSwitch></RouteSwitch>
      </UserContext.Provider>
    </DataContext.Provider>
  );
}

export { App, UserContext, DataContext };
