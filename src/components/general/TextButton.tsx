const TextButton = ({ textContent, classes }) => {
    return (
        <div className={"btn bg-transparent border-none hover:bg-primary-focus text-shadow shadow-gray-600 " + classes as string}>
            {textContent}
        </div>
    )
};

export default TextButton;