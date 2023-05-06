const TextButton = ({ textContent, classes, onClickListener }) => {
  return (
    <button
      onClick={onClickListener}
      className={`${classes as string} 
                  btn
                  border-none
                  text-shadow-lg`}
    >
      {textContent}
    </button>
  );
};

export default TextButton;
