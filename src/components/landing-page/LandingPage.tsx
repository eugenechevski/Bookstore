import Page from "components/general/Page";
import { DataContext } from "components/App";
import HelloPage from "./HelloPage";
import HelloUser from "./HelloUser";
import LoadingSpinner from "components/general/LoadingSpinner";

import { useContext, useState, useEffect } from "react";

import { useSpring, animated } from "react-spring";

// It loads the HelloUser component if the user is logged in
// Otherwise, it loads the HelloPage component
const LandingPage = () => {
  const { user } = useContext(DataContext);

  const [currentComponent, setCurrentComponent] = useState(
    <LoadingSpinner></LoadingSpinner>
  );

  const [props,] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: true,
    config: { duration: 1000 },
  }), [currentComponent]);

  // If the user is logged in, it loads the HelloUser component
  // Otherwise, it loads the HelloPage component
  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.keys(user).length === 0) {
        return;
      }
  
      if ((user as IUser).getName().startsWith("Guest")) {
        setCurrentComponent(<HelloPage></HelloPage>);
      } else {
        setCurrentComponent(
          <HelloUser userName={(user as IUser).getName()}></HelloUser>
        );
      }
    }, 2000);

    return () => { clearTimeout(timer); }
  }, [user]);

  return (
    <Page
        content={
          <div
            className="flex 
            items-center 
            justify-center 
            h-full 
            w-full"
          >
          <animated.div style={props}>
            {currentComponent}
          </animated.div>
          </div>
        }
        blank={true}
      ></Page>
  );
};

export default LandingPage;
