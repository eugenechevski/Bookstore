import { createContext, useEffect, useState } from 'react';
import {dummyUser} from 'utils/constants'
import DataObject from 'utils/DataObject';
import RouteSwitch from './RouteSwitch';
import 'styles/App.css';
import 'tw-elements';


// Data
const DataContext = createContext({} as {user: User | {}, 
  categories: Category[] | [],
  categoryMap: CategoryMap | {},
  books: Book[] | [],
  bookMap: BookMap | {}});
  
  function App() {
    const [user, setUser] = useState(dummyUser);
    const [data, setData] = useState({} as DataObject | {});
    const [categories, setCategories] = useState([] as Category[] | []);
    const [categoryMap, setCategoryMap] = useState({} as CategoryMap | {});
    const [books, setBooks] = useState([] as Book[] | []);
    const [bookMap, setBookMap] = useState({} as BookMap | {});
    
    // Load the data
    useEffect(() => {
      import('utils/initFirebase')
        .then((initFirebase) => initFirebase.default())
        .then(db => DataObject(db))
        .then(createDataObject => createDataObject())
        .then(data => setData(data));
      /*
      if (window === undefined) {
      } else {
        DataObject().then(createDataObject => createDataObject()).then(data => setData(data));
      }
      */
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
