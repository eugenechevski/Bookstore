import Page from 'components/general/Page';
import CategoryDisplay from './CategoryDisplay';
import { DataContext } from 'components/App';
import { useContext, useEffect, useState } from 'react';
import uniqid from 'uniqid';


const Home = ({ testCategories }: { testCategories?: Category[] }) => {
    
    const { categories } = useContext(DataContext);
    const [stateCategories, setCategories] = useState<Category[]>(testCategories ? testCategories : categories);

    useEffect(() => {
      if (categories) {
        setCategories(categories);
      }
    }, [categories]);

    return (
        <Page content={(
            <div className='w-full
                            h-full
                            flex 
                            flex-col 
                            mt-20
                            sm:mt-12
                            sm:p-12
                            overflow-scroll
                            scrollbar'>
                {
                    stateCategories?.map((category: Category) => <CategoryDisplay key={uniqid()}
                        category={category}></CategoryDisplay>
                    )
                }
            </div>
        )} blank={false}></Page>
    );
}

export default Home;