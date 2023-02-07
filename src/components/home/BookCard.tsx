const BookCard = () => {
    const image = require('src/assets/images/bookcover.png');

    return (
        <div className="carousel-item flex flex-col gap-3">
            <div className="shadow-2xl drop-shadow-2xl">
                <div className="absolute top-0 left-0 translate-x-3 translate-y-3 text-base-100 bg-primary p-2 rounded-xl shadow-lg">#1</div>
                <img src={image} className="box-shadow" />
            </div>
            <div className="text-center text-2xl">1984</div>
        </div>
    )
};

export default BookCard;