import Page from "components/general/Page";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "components/App";
import uniqid from "uniqid";
import BookEntry from "./BookEntry"

const Category = ({ testCategory }: { testCategory?: ICategory } ) => {
    const {categoryFormattedName} = useParams();
    const {categoryMap} = useContext(DataContext);
    const [categoryName, setCategoryName] = useState<string>("");
    const [categoryBooks, setCategoryBooks] = useState<IBook[]>([]);

    // Load the category data
    useEffect(() => {
        if (categoryMap && Object.keys(categoryMap).length > 0) {
            const category = categoryMap[categoryFormattedName];
            setCategoryName((category as ICategory).getName());
            setCategoryBooks((category as ICategory).getBooks());
        } else if (testCategory) {
            setCategoryName(testCategory.getName());
            setCategoryBooks(testCategory.getBooks());
        }
    }, [categoryMap, categoryFormattedName, testCategory]);

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
                                sm:text-3xl">{categoryName}</div>
                {/* Cateogry content */}
                <div className="flex 
                                flex-col 
                                gap-12">
                    {categoryBooks?.map(book => <BookEntry key={uniqid()} 
                                                          book={book}/>)}
                </div>
            </div>
        } blank={false}></Page>
    )
}

export default Category;