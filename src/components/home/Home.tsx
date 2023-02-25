import Page from 'components/general/Page';
import CategoryDisplay from './CategoryDisplay';

const Home = () => {
    return (
        <Page content={(
            <div className='w-full
                            h-full
                            flex 
                            flex-col 
                            items-center 
                            sm:p-12'>
                <CategoryDisplay></CategoryDisplay>
                <CategoryDisplay></CategoryDisplay>
                <CategoryDisplay></CategoryDisplay>
            </div>
        )} blank={false}></Page>
    );
}

export default Home;