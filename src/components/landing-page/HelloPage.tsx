const HelloPage = () => {
    return (
        <div className='flex 
                        flex-col 
                        items-center 
                        justify-center 
                        h-full 
                        w-full 
                        gap-5'>
            <div className='text-3xl 
                            text-secondary-content 
                            mb-5 
                            sm:text-5xl'>Welcome to Garden of Books</div>
            <div className='btn 
                            btn-primary 
                            rounded-full 
                            text-xl'>Create account</div>
            <div className='text-xs 
                            font-bold 
                            cursor-pointer'>Returning user?</div>
            <div className='text-xs 
                            font-bold 
                            cursor-pointer'>Procceed as Guest</div>
            <div className='italic'>Powered by New York Times</div>
        </div>
    )
};

export default HelloPage;