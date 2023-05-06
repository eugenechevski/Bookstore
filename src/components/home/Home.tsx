// Components
import Page from "components/general/Page";
import { DataContext } from "components/App";
import CategorySwiper from "./CategorySwiper";

// react stuff
import { useContext, useEffect, useState } from "react";

/**
 * High level component for the home page.
 */
const Home = ({ testCategories }: { testCategories?: ICategory[] }) => {
  const { categories } = useContext(DataContext);
  const [stateCategories, setCategories] = useState<ICategory[]>(
    testCategories ? testCategories : categories
  );

  useEffect(() => {
    if (categories) {
      setCategories(categories);
    }
  }, [categories]);

  return (
    <Page
      content={<CategorySwiper stateCategories={stateCategories} />}
      blank={false}
    ></Page>
  );
};

export default Home;
