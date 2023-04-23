import Page from "components/general/Page";
import { useNavigate } from "react-router-dom";
import { DataContext } from "components/App";
import { useContext } from "react";
import { guestUser } from "utils/constants";
import TextButton from "components/general/TextButton";


const SignOutForm = () => {
  const buttonClasses = 'bg-primary hover:bg-primary-focus';

  const navigate = useNavigate(); 
  const { setUser } = useContext(DataContext);

  const signOutConfirmed = () => {
    setUser(guestUser);
    navigate("/home");
  };

  return (
    <Page
      content={
        <div
          className="p-12 
                            w-3/4 
                            rounded-xl 
                            bg-base-100
                            sm:w-1/4"
        >
          <div
            className="w-full 
                                h-full 
                                flex 
                                flex-col 
                                items-center 
                                justify-end 
                                gap-12"
          >
            <div
              className="font-bold 
                                    text-center 
                                    mt-6"
            >
              Are you sure you want to sign out?
            </div>

            <div className="flex
                            gap-3">
              <TextButton textContent={'Yes'} classes={buttonClasses} onClickListener={signOutConfirmed}/>
              <TextButton textContent={'No'} classes={buttonClasses} onClickListener={navigate.bind(null, '/home')}/>
            </div>
          </div>
        </div>
      }
      blank={true}
    ></Page>
  );
};

export default SignOutForm;
