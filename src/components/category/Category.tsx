import Page from "components/general/Page";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "components/App";
import uniqid from "uniqid";
import BookEntry from "./BookEntry"

const Category = () => {
    const {categoryName} = useParams();
    const categoryContent = useContext(DataContext).getCategoryMap();
    const category = categoryContent[categoryName];

    return (
        <Page content={
            <div className="flex 
                            flex-col 
                            items-center 
                            gap-12 
                            mt-28
                            text-secondary-content 
                            sm:mt-36 
                            sm:w-3/4">
                {/* Category name */}
                <div className="text-lg 
                                font-bold 
                                sm:text-3xl">{category.getName()}</div>
                {/* Cateogry content */}
                <div className="flex 
                                flex-col 
                                gap-12">
                    {category.getBooks().map(book => <BookEntry key={uniqid()} 
                                                                book={book}/>)}
                </div>
            </div>
        } blank={false}></Page>
    )
}

export default Category;