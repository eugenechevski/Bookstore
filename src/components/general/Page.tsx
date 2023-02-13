import NavBar from 'src/components/general/NavBar';
import OffCanvas from 'src/components/general/OffCanvas';

const Page = ({ content }) => {
    return (
        <div className='
                        h-full
                        p-2 
                        flex 
                        flex-col
                        items-center
                        justify-center'>
            <NavBar></NavBar>
            <OffCanvas></OffCanvas>
            { content }
        </div>
    );
}

export default Page;