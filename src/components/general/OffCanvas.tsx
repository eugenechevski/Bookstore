import { Link } from "react-router-dom";
import uniqid from "uniqid";

const categories = [
    "Fiction",
    "History",
    "Romance",
    "Science Fiction",
    "Biography",
    "Novels",
    "Fairy Tales",
    "Self-help",
    "Business",
];

const OffCanvas = () => {
    return (
        <div className='scrollbar 
                        overflow-scroll 
                        h-[89%] 
                        w-full
                        offcanvas 
                        offcanvas-start 
                        flex flex-col 
                        bg-base-100 
                        invisible 
                        bg-clip-padding 
                        shadow-xl 
                        outline-none 
                        transition 
                        duration-500 
                        ease-in 
                        text-base-content 
                        border-none 
                        rounded-lg 
                        fixed 
                        bottom-0 
                        left-0
                        sm:w-1/4
                        sm:h-[91%] 
                        '
            id='offcanvas'
            tabIndex={-1}>
            <div className='offcanvas-body'>
                <ul className='menu' tabIndex={0}>
                    { categories.map(category => ( <li key={uniqid()}>
                                                     <Link to={"/category"}>
                                                         {category}
                                                     </Link>
                                                   </li>
                                                 ) 
                                    )
                    }
                </ul>
            </div>
        </div>
    )
}

export default OffCanvas;