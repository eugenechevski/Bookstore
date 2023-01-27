const BookCard = () => {
    const image = require('src/assets/images/bookcover.png');

    return (
        <div className="flex flex-col gap-3">
            <div>
                <img src={image} className="box-shadow" />
            </div>
            <div className="text-center">1984</div>
        </div>
    )
};

export default BookCard;