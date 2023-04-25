// React Imports
import { createContext, useEffect, useState } from "react";

// Utilities
import { guestUser } from "utils/constants";
import DataObject from "utils/DataObject";
import databaseUpdater from "utils/databaseUpdater";

// Classes
import User from "classes/User";

// Components
import RouteSwitch from "./RouteSwitch";

// Styles
import "styles/App.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "tw-elements";

// other
import console from "console-browserify";

// Data
const DataContext = createContext(
  {} as {
    user: IUser | {};
    categories: ICategory[] | [];
    categoryMap: CategoryMap | {};
    books: IBook[] | [];
    bookMap: BookMap | {};
    signUp: SignUp | {};
    signIn: SignIn | {};
    signOut: SignOut | {};
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
  }
);

function App() {
  const [user, setUser] = useState(guestUser);
  const [data, setData] = useState({} as DataObject | {});
  const [dbUpdater, setDBUpdater] = useState({} as DatabaseUpdater | {});
  const [categories, setCategories] = useState([] as ICategory[] | []);
  const [categoryMap, setCategoryMap] = useState({} as CategoryMap | {});
  const [books, setBooks] = useState([] as IBook[] | []);
  const [bookMap, setBookMap] = useState({} as BookMap | {});
  const [signUp, setSignUp] = useState({} as SignUp | {});
  const [signIn, setSignIn] = useState({} as SignIn | {});
  const [signOut, setSignOut] = useState({} as SignOut | {});

  // Load the data
  useEffect(() => {
    import("utils/initFirebase")
      .then(async ({ auth, db }) => {
        const createDataObject = await DataObject();
        const { signIn, signUp, signOut } = await import("utils/authService");

        setSignIn(() => signIn.bind(this, db, auth));
        setSignUp(() => signUp.bind(this, db, auth));
        setSignOut(() => signOut.bind(this, auth));
        setDBUpdater(databaseUpdater(db, auth))

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

  // Check if the user is logged in
  useEffect(() => {
    if (Object.keys(data).length > 0) {
      setTimeout(() => {
        // Check if there is a user logged in already
        (signIn as SignIn)().then((result) => {
          if (!Object.hasOwn(result, "errorMessage")) {
            setUser(new User(result as UserData, bookMap));
          } else {
            console.log((result as { errorMessage: string }).errorMessage);
          }
        });
      }, 250);
    }
  }, [signIn, data, bookMap]);

  // Update the user's database updater
  useEffect(() => {
    if (Object.keys(dbUpdater).length === 0) {
      return;
    }

    if (!user.getName().startsWith("Guest")) {
      user.setDatabaseUpdaters(dbUpdater as DatabaseUpdater)
    } else {
      user.setDatabaseUpdaters(null);
    }
  }, [dbUpdater, user]);

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
        signOut,
        setUser,
      }}
    >
      <RouteSwitch></RouteSwitch>
    </DataContext.Provider>
  );
}

export { App, DataContext };
