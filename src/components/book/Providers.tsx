import TextButton from "components/general/TextButton";

const Providers = () => {
    const btnClasses = 'btn-sm ' + 
                       'w-1/3 ' +
                       'text-xs ' +
                       'btn-primary ' +
                       'rounded-full ' +
                       'shadow-lg ' + 
                       'sm:btn-md';

    return (
        <div className="h-1/6
                        flex 
                        flex-col
                        items-center
                        justify-center
                        gap-12">
            {/* Label */}
            <div className="hidden 
                            font-bold
                            text-xl 
                            sm:flex">Buy at these providers</div>
            {/* Buttons */}
            <div className="flex 
                            justify-center
                            gap-4
                            sm:gap-12">
                <TextButton onClickListener={() => null} textContent={window.screen.width > 640 ? 'Amazon' : 'AMZN'} classes={btnClasses}></TextButton>
                <TextButton onClickListener={() => null} textContent={window.screen.width > 640 ? 'Apple Books' : 'APPLE'} classes={btnClasses}></TextButton>
                <TextButton onClickListener={() => null} textContent={window.screen.width > 640 ? 'Barnes and Noble' : 'B & N'} classes={btnClasses}></TextButton>
            </div>
        </div>
    );
};

export default Providers;