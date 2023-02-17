import AfterCreation from './AfterCreation';
import CreateAccountForm from './CreateAccountForm';
import HelloPage from './HelloPage';
import SignInForm from './SignInForm';
import Page from 'components/general/Page';

const LandingPage = () => {
    return (
        <Page content={
            <div className='flex 
                            items-center 
                            justify-center 
                            h-full 
                            w-full'>
                <AfterCreation></AfterCreation>
            </div>
        }></Page>
    )
};

export default LandingPage;