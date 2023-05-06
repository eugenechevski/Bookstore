import QuantityPicker from "components/general/QuantityPicker";
import ImageComponent from "components/general/ImageComponent";

/**
 * A component for displaying a line with book information on the checkout page.
 */
const CheckoutBook = ({
  book,
  quantity,
  updateQuantity,
  updateUserCart,
}: {
  book: IBook;
  quantity: number;
  updateQuantity?: (newQty: number) => void;
  updateUserCart?: () => void;
}) => {
  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(newQuantity);

    // If the quantity is 0, remove the book from the cart
    // and update the UI
    if (newQuantity === 0) {
      updateUserCart();
    }
  };

  return (
    <div
      className="flex
                 justify-center
                 gap-3
                 items-center
                 p-3
                 text-xs
                 sm:text-md
                 sm:gap-12"
    >
      {/* Cover */}
      <ImageComponent
        classes="w-16
                 h-24
                 sm:w-32
                 sm:h-36
                 shadow-lg
                 drop-shadow-lg"
        src={book?.getCoverUrl()}
        alt={book?.getTitle() + " cover"}
      />

      {/* Title */}
      <div
        className="font-bold
                   w-1/3
                   h-6
                   whitespace-normal
                   overflow-hidden
                   text-center
                   sm:h-12"
      >
        {book?.getTitle()}
      </div>
      {/* Quantity */}
      <div
        className="flex
                   font-bold
                   items-center
                   w-1/3
                   gap-1"
      >
        <div>Q-ty</div>
        <QuantityPicker value={quantity} onChange={handleQuantityChange} />
      </div>
    </div>
  );
};

export default CheckoutBook;
