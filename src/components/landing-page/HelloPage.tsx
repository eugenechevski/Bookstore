import { Link } from "react-router-dom";

const HelloPage = () => {
    return (
        <div className='flex 
                        flex-col 
                        items-center 
                        justify-center 
                        h-full 
                        w-full 
                        gap-5'>
            <div className='text-2xl 
                            text-secondary-content 
                            mb-5 
                            sm:text-5xl'>Welcome to Garden of Books</div>
            <Link to={"/create-account"}>
                <div className='btn 
                                btn-primary 
                                rounded-full 
                                text-xl'>Create account</div>
            </Link>
            <Link to={"/sign-in"}>
                <div className='text-xs 
                                font-bold 
                                cursor-pointer'>Returning user?</div>
            </Link>
            <Link to="/home">
                <div className='text-xs 
                                font-bold 
                                cursor-pointer'>Procceed as Guest</div>
            </Link>
            <div className='italic'>Powered by New York Times</div>
        </div>
    )
};

export default HelloPage;