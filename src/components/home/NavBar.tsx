import IconButton from 'components/general/IconButton';
import TextButton from 'components/general/TextButton';
import { useState } from 'react';


const NavBar = () => {
    const [offCanvasToggleIcon, setOffCanvasToggleIcon] = useState('bars');
    const [navbarToolsIcon, setNavbarToolsIcon] = useState('ellipsis');
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="navbar 
                        h-12 
                        bg-primary 
                        text-base-100 
                        rounded-xl 
                        shadow-lg">
            {/* Navbar start */}
            <div className="navbar-start 
                            w-1/6 
                            sm:w-1/4">
                {/* Hamburger */}
                <a onClick={() => setOffCanvasToggleIcon(offCanvasToggleIcon === 'bars' ? 'xmark' : 'bars')} 
                   data-bs-toggle="offcanvas" 
                   href={"#offcanvas"} 
                   role="button" 
                   aria-controls="offcanvas">
                    <IconButton iconName={offCanvasToggleIcon}></IconButton>
                </a>
                {/* Title */}
                <div className="ml-2 
                                hidden 
                                text-shadow-lg 
                                shadow-gray-600
                                sm:block 
                                sm:text-2xl">Garden of Books.</div>
            </div>
            {/* Navbar center */}
            <div className="navbar-center 
                            w-2/3 
                            sm:w-1/2">
                {/* Search input */}
                <div className="form-control 
                                w-full 
                                mr-2 
                                peer/search">
                    <input onChange={(e) => setSearchTerm(e.target.value)} type="text" className="dropdown-toggle 
                                                                                                  input 
                                                                                                  rounded-none 
                                                                                                  border-0 
                                                                                                  border-b-2 
                                                                                                  border-b-base-100 
                                                                                                  bg-transparent 
                                                                                                  focus:outline-none" />
                </div>
                {/* Search icon */}
                <div className='hidden 
                                sm:block'>
                    <IconButton iconName={'search'}></IconButton>
                </div>
                {/* Search results */}
                {
                    searchTerm.length > 0 &&
                    <div className="absolute 
                                    dropdown 
                                    dropdown-open 
                                    mt-16 
                                    w-1/2 
                                    sm:mt-20 
                                    sm:w-1/3">
                        <ul tabIndex={0} className="dropdown-content 
                                                    menu 
                                                    p-2 
                                                    bg-primary 
                                                    w-full 
                                                    rounded-xl 
                                                    shadow-md">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                }
            </div>
            {/* Navbar end */}
            <div className={`navbar-end 
                             flex 
                             flex-col 
                             bg-primary 
                             gap-3 
                             w-1/6 
                             transition-all 
                             duration-300 
                             ease-in 
                             rounded-xl 
                             z-50
                             sm:w-1/4 
                             sm:bg-inherit 
                             sm:flex-row 
                             ${navbarToolsIcon === 'xmark' ? 'mt-5 ' +
                                                             'translate-y-28 ' +
                                                             'p-2 ' +
                                                             'shadow-md': ''}`
            }>
                {/* Tools-collapse toggle which is displayed for smaller screens */}
                {
                    window.screen.width < 640 &&
                    <div onClick={() => setNavbarToolsIcon(navbarToolsIcon === 'xmark' ? 'ellipsis' : 'xmark')}>
                        <IconButton iconName={navbarToolsIcon}></IconButton>
                    </div>
                }
                {/* Tools elememts*/}
                {
                    (window.screen.width > 640 || navbarToolsIcon === 'xmark') &&
                    <>
                        {/* Wishlist dropdown */}
                        <div className="dropdown 
                                        dropdown-left 
                                        sm:dropdown-bottom">
                            {/* Wishlist toggle */}
                            <label tabIndex={0}>
                                {
                                    window.screen.width > 640 ? (
                                        <TextButton classes={''} textContent={'Wishlist'}></TextButton>
                                    ) : (
                                        <IconButton iconName={'heart'}></IconButton>
                                    )
                                }
                            </label>
                            {/* Wishlist dropdown */}
                            <ul tabIndex={0} className="dropdown-content 
                                                        menu 
                                                        p-2 
                                                        shadow 
                                                        bg-primary 
                                                        rounded-box 
                                                        w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        {/* Cart dropdown */}
                        <div className="dropdown 
                                        dropdown-left 
                                        sm:dropdown-bottom">
                            {/* Cart toggle */}
                            <label tabIndex={0}>
                                {
                                    window.screen.width > 640 ? (
                                        <TextButton classes={''} textContent={'Cart'}></TextButton>
                                    ) : (
                                        <IconButton iconName={'cart'}></IconButton>
                                    )
                                }
                            </label>
                            {/* Cart dropdown content */}
                            <ul tabIndex={0} className="dropdown-content 
                                                        menu 
                                                        p-2 
                                                        shadow 
                                                        bg-primary 
                                                        rounded-box 
                                                        w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        {/* User information dropdown */}
                        <div className="dropdown 
                                        dropdown-left 
                                        sm:dropdown-bottom">
                            {/* User information toggle */}
                            <label tabIndex={0}>
                                <IconButton iconName={'user'}></IconButton>
                            </label>
                            {/* User information dropdown content */}
                            <div tabIndex={0} className="dropdown-content 
                                                         p-2 
                                                         shadow 
                                                         bg-primary 
                                                         rounded-box 
                                                         w-52">
                                User name
                            </div>
                        </div>
                        {/* Sign-in/sign-out button */}
                        <div>
                            <IconButton iconName={'sign-out'}></IconButton>
                        </div>
                    </>
                }
            </div>
        </div>
    )
};

export default NavBar;