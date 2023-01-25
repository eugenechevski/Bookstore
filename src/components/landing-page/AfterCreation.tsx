const AfterCreation = () => {
    return (
        <div className="p-12 w-3/4 sm:w-1/4 rounded-xl bg-base-100">
            <div className="w-full h-full flex flex-col items-center justify-end gap-12">
                <div className="font-bold text-center mt-6">The account has been created.</div>
                <div className="btn-primary rounded-full w-3/4 text-center">Procceed</div>
            </div>
        </div>
    )
};

export default AfterCreation;