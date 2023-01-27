import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";


const NavBar = () => {
    return (
        <div className="navbar bg-primary text-base-100">
            <div className="btn bg-transparent border-none hover:bg-primary-focus">
                <FontAwesomeIcon icon={solid('bars')}/>
            </div>
            <div>Garden of Books.</div>
            <div>
                <div className="form-control">
                    <input type="text" className="input"/>
                </div>
                <div>
                    <FontAwesomeIcon icon={solid('search')}/>
                </div>
            </div>
            <div>Wishlist</div>
            <div>Cart</div>
            <div>
                <FontAwesomeIcon icon={solid('sign-out')}/>
            </div>
            <div>
                <FontAwesomeIcon icon={solid('user')}/>
            </div>
        </div>
    )
};

export default NavBar;