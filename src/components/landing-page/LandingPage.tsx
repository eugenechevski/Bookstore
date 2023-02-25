import HelloPage from './HelloPage';
import Page from 'components/general/Page';

const LandingPage = () => {
    return (
        <Page content={
            <div className='flex 
                            items-center 
                            justify-center 
                            h-full 
                            w-full'>
                <HelloPage></HelloPage>
            </div>
        }></Page>
    )
};

export default LandingPage;