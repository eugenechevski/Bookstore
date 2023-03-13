import NavBar from 'src/components/general/NavBar';
import OffCanvas from 'src/components/general/OffCanvas';

const Page = ({ content, blank }) => { 

    return (
        <div className='flex 
                        flex-col
                        items-center
                        bg-secondary
                        relative
                        overflow-hidden'>
            { !blank &&
                <>
                    <NavBar></NavBar>
                    <OffCanvas></OffCanvas>
                </>
            }
            <div className='min-h-screen
                            max-h-max
                            w-screen
                            flex
                            justify-center
                            items-center'>
                {content}
            </div>
        </div>
    );
}

export default Page;