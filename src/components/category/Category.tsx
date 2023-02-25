import Page from "components/general/Page";
import BookEntry from "./BookEntry"

const Category = () => {
    const image = require('src/assets/images/bookcover.png');


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
                                sm:text-3xl">Combined Print & E-Book Fiction</div>
                {/* Cateogry content */}
                <div className="flex 
                                flex-col 
                                gap-12">
                    {[0, 1, 2, 3, 4].map(i => <BookEntry key={i} 
                                                         rank={i + 1} 
                                                         bookCover={image} 
                                                         description={`Separated from his crew, an astronaut embarks on a quest to stay alive on Mars. 
                                                                       The basis of the movie The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie.
                                                                       The basis of the movie.The basis of the movie. 
                                                                       The basis of the movie.The basis of the movie.`} />)}
                </div>
            </div>
        } blank={false}></Page>
    )
}

export default Category;