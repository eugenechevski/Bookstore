const OffCanvas = () => {
    return (
        <div className='scrollbar 
                        overflow-scroll 
                        h-[89%] 
                        w-full 
                        sm:w-1/4 
                        offcanvas 
                        offcanvas-start 
                        flex flex-col 
                        bg-base-100 
                        invisible 
                        bg-clip-padding 
                        shadow-xl 
                        outline-none 
                        transition 
                        duration-300 
                        ease-in 
                        text-base-content 
                        border-none 
                        mt-2 
                        rounded-lg
                        absolute
                        bottom-0
                        '
            id='offcanvas'
            tabIndex={-1}>
            <div className='offcanvas-body'>
                <ul className='menu' tabIndex={0}>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                    <li><a>Item 1</a></li>
                </ul>
            </div>
        </div>
    )
}

export default OffCanvas;