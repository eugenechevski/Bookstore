import { useState } from "react";
import IconButton from "./IconButton";

const QuantityPicker = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) => {
  const [quantity, setQuantity] = useState(value);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    onChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange(newQuantity);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <IconButton
        iconName={"arrow-up"}
        classes="btn btn-ghost btn-sm rounded-r"
        onClickListener={handleIncrement}
      />
      <span className="flex-1 text-center">{quantity}</span>
      <IconButton
        iconName={"arrow-down"}
        classes="btn btn-ghost btn-sm rounded-l"
        onClickListener={handleDecrement}
      />
    </div>
  );
};

export default QuantityPicker;
