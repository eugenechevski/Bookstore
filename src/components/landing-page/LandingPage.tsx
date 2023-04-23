import HelloPage from "./HelloPage";
import HelloUser from "./HelloUser";
import Page from "components/general/Page";
import { DataContext } from "components/App";
import { useContext } from "react";

// It loads the HelloUser component if the user is logged in
// Otherwise, it loads the HelloPage component
const LandingPage = () => {
  const { user } = useContext(DataContext);

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
          {Object.keys(user).length > 0 &&
          !(user as IUser).getName().startsWith("Guest") ? (
            <HelloUser userName={(user as IUser).getName()}></HelloUser>
          ) : (
            <HelloPage></HelloPage>
          )}
        </div>
      }
      blank={true}
    ></Page>
  );
};

export default LandingPage;
