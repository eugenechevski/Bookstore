import { createContext, useEffect, useState } from 'react';
import {dummyUser} from 'utils/constants'
import DataObject from 'utils/DataObject';
import RouteSwitch from './RouteSwitch';
import 'styles/App.css';
import 'tw-elements';

// Load the environment variables

// Server-side initialization
if (window === undefined) {
  require('dotenv').config();
  import('utils/initFirebase').then((initFirebase) => initFirebase.default());
}

// Data
const DataContext = createContext({} as {user: User | {}, 
                                         categories: Category[] | [],
                                         categoryMap: CategoryMap | {},
                                         books: Book[] | [],
                                         bookMap: BookMap | {}});

function App() {
  const [user,] = useState(dummyUser);
  const [data, setData] = useState({} as DataObject | {});
  const [categories, setCategories] = useState([] as Category[] | []);
  const [categoryMap, setCategoryMap] = useState({} as CategoryMap | {});
  const [books, setBooks] = useState([] as Book[] | []);
  const [bookMap, setBookMap] = useState({} as BookMap | {});

  // Load the data
  useEffect(() => {
    DataObject().then((dataReceived) => setData(dataReceived));
  }, []);

  // Set the data
  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setCategories((data as DataObject).getCategories());
      setCategoryMap((data as DataObject).getCategoryMap());
      setBooks((data as DataObject).getBooks());
      setBookMap((data as DataObject).getBookMap());
    }
  }, [data]);
  
  return (
    <DataContext.Provider value={{
      user,
      categories,
      categoryMap,
      books,
      bookMap
    }}>
        <RouteSwitch></RouteSwitch>
    </DataContext.Provider>
  );
}

export { App, DataContext };
