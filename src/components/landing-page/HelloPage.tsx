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
            <Link className='btn 
                             btn-primary 
                             rounded-full 
                             text-xl' to={"/create-account"}>
                Create Account
            </Link>
            <Link className='text-xs 
                             font-bold 
                             cursor-pointer' to={"/sign-in"}>
                Returning user?
            </Link>
            <Link className='text-xs 
                             font-bold 
                             cursor-pointer' to="/home">
                Procceed as Guest
            </Link>
            <div className='italic'>Powered by New York Times</div>
        </div>
    )
};

export default HelloPage;