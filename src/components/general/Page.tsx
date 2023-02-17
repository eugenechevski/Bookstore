import NavBar from 'src/components/general/NavBar';
import OffCanvas from 'src/components/general/OffCanvas';

const Page = ({ content }) => {
    return (
        <div className='min-h-[99vh]
                        max-h-max
                        w-screen
                        p-2 
                        flex 
                        flex-col
                        items-center
                        bg-secondary
                        relative
                        sm:w-[99vw]'>
            <NavBar></NavBar>
            <OffCanvas></OffCanvas>
            <div className='min-h-screen
                            max-h-max
                            w-full
                            flex
                            justify-center
                            items-center'>
                {content}
            </div>
        </div>
    );
}

export default Page;