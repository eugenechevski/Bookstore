import { createContext } from 'react';
import RouteSwitch from './RouteSwitch';
import User from 'scripts/User';
import 'styles/App.css';
import 'tw-elements';

const UserContext = createContext({} as User);

function App() {
  return (
    <UserContext.Provider value={User('Guest', '', '', '', new Set(), new Set())}>
      <RouteSwitch></RouteSwitch>
    </UserContext.Provider>
  );
}

export { App, UserContext };
