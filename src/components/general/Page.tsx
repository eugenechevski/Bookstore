import NavBar from 'src/components/general/NavBar';
import OffCanvas from 'src/components/general/OffCanvas';

const Page = ({ content, blank }) => { 

    return (
        <div className='flex 
                        flex-col
                        items-center
                        bg-secondary
                        relative
                        overflow-scroll
                        scrollbar'>
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
                            items-center
                            overflow-scroll
                            scrollbar'>
                {content}
            </div>
        </div>
    );
}

export default Page;