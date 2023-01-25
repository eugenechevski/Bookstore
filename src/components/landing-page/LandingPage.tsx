import AfterCreation from './AfterCreation';
import CreateAccountForm from './CreateAccountForm';
import HelloPage from './HelloPage';
import SignInForm from './SignInForm';

const LandingPage = () => {
    return (
        <div className='flex items-center justify-center h-full w-full'>
            <SignInForm></SignInForm>
        </div>
    )
};

export default LandingPage;