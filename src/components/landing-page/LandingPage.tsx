import AfterCreation from './AfterCreation';
import CreateAccountForm from './CreateAccountForm';
import HelloPage from './HelloPage';

const LandingPage = () => {
    return (
        <div className='flex items-center justify-center h-full w-full'>
            <CreateAccountForm></CreateAccountForm>
        </div>
    )
};

export default LandingPage;