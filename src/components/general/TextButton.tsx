const TextButton = ({ textContent, classes, onClickListener }) => {
    return (
        <div onClick={() => onClickListener()} className={`${classes as string} 
                         btn 
                         border-none 
                         text-shadow-lg`}>
            {textContent}
        </div>
    )
};

export default TextButton;