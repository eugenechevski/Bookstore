import { createContext, useEffect, useState } from "react";
import { dummyUser } from "utils/constants";
import DataObject from "utils/DataObject";
import authService from "utils/authService";
import RouteSwitch from "./RouteSwitch";
import "styles/App.css";
import "tw-elements";

// Data
const DataContext = createContext(
  {} as {
    user: User | {};
    categories: Category[] | [];
    categoryMap: CategoryMap | {};
    books: Book[] | [];
    bookMap: BookMap | {};
    signUp:
      | ((
          email: string,
          password: string,
          firstName: string,
          lastName: string
        ) => Promise<UserData | { errorMessage: string }>)
      | {};
    signIn:
      | ((
          email: string,
          password: string
        ) => Promise<UserData | { errorMessage: string }>)
      | {};
    setUser: React.Dispatch<React.SetStateAction<User>>;
  }
);

function App() {
  const [user, setUser] = useState(dummyUser);
  const [data, setData] = useState({} as DataObject | {});
  const [categories, setCategories] = useState([] as Category[] | []);
  const [categoryMap, setCategoryMap] = useState({} as CategoryMap | {});
  const [books, setBooks] = useState([] as Book[] | []);
  const [bookMap, setBookMap] = useState({} as BookMap | {});
  const [signUp, setSignUp] = useState(
    {} as
      | ((
          email: string,
          password: string,
          firstName: string,
          lastName: string
        ) => Promise<UserData | { errorMessage: string }>)
      | {}
  );
  const [signIn, setSignIn] = useState(
    {} as
      | ((
          email: string,
          password: string
        ) => Promise<UserData | { errorMessage: string }>)
      | {}
  );

  // Load the data
  useEffect(() => {
    import("utils/initFirebase")
      .then(async ({ app, db }) => {
        const createDataObject = await DataObject(db);
        const { signIn, signUp } = await authService(app);

        setSignIn(signIn);
        setSignUp(signUp);

        return createDataObject;
      })
      .then(async (createDataObject) => {
        const dataObject = await createDataObject();

        setData(dataObject);
      });
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
    <DataContext.Provider
      value={{
        user,
        categories,
        categoryMap,
        books,
        bookMap,
        signIn,
        signUp,
        setUser,
      }}
    >
      <RouteSwitch></RouteSwitch>
    </DataContext.Provider>
  );
}

export { App, DataContext };
