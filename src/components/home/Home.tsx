import NavBar from './NavBar';
import CategoryDisplay from './CategoryDisplay';
import OffCanvas from './OffCanvas';

const Home = () => {
    return (
        <div className='w-full h-full overflow-hidden p-2'>
            <NavBar></NavBar>
            <OffCanvas></OffCanvas>
        </div>
    );
}

export default Home;