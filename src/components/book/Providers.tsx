import TextButton from "components/general/TextButton";

const Providers = () => {
    return (
        <div className="h-1/6
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-12">
            {/* Label */}
            <div className="">Buy at these providers</div>
            <div className="flex 
                            justify-center
                            gap-12">
                <TextButton textContent={'Amazon'} classes={''}></TextButton>
                <TextButton textContent={'Apple Books'} classes={''}></TextButton>
                <TextButton textContent={'Barnes and Noble'} classes={''}></TextButton>
            </div>
        </div>
    );
};

export default Providers;