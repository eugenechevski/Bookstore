import Page from 'components/general/Page';
import CategoryDisplay from './CategoryDisplay';
import uniqid from 'uniqid';

const Home = ({ categories }: { categories: Category[] }) => {
    return (
        <Page content={(
            <div className='w-full
                            h-full
                            flex 
                            flex-col 
                            items-center 
                            mt-20
                            sm:mt-12
                            sm:p-12'>
                { 
                    categories.map((category) => <CategoryDisplay key={uniqid()} 
                                                                  category={category}></CategoryDisplay> 
                                  )
                }
            </div>
        )} blank={false}></Page>
    );
}

export default Home;