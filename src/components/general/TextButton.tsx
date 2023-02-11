const TextButton = ({ textContent, classes }) => {
    return (
        <div className={`btn 
                         bg-transparent 
                         border-none 
                         text-shadow 
                         hover:bg-primary-focus 
                         shadow-gray-600 
                         ${classes as string}`}>
            {textContent}
        </div>
    )
};

export default TextButton;