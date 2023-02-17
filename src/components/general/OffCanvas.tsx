const OffCanvas = () => {
    return (
        <div className='scrollbar 
                        overflow-scroll 
                        h-[91%] 
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