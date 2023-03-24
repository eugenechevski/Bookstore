import { createContext } from 'react';
import DataObject from 'utils/DataObject';
import RouteSwitch from './RouteSwitch';
import User from 'scripts/User';
import Book from 'scripts/Book';
import 'styles/App.css';
import 'tw-elements';

const DataContext = createContext({} as {user: User, data: DataObject});
const user = User('Guest', '', '', [1, 2, 3, 4, 5].map((i) => Book('1984', 'George Orwell', 'Fiction', require('src/assets/images/bookcover.png'), i, i, 'synopsis')), 
[1, 2, 3, 4, 5].map((i) => Book('1984', 'George Orwell', 'Fiction', require('src/assets/images/bookcover.png'), i, i, 'synopsis')), false);
const data = DataObject;

function App() {
  return (
    <DataContext.Provider value={{
      user,
      data,
    }}>
        <RouteSwitch></RouteSwitch>
    </DataContext.Provider>
  );
}

export { App, DataContext };
