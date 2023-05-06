import TextButton from "components/general/TextButton";
import uniqid from "uniqid";

/**
 * A component for displaying the places where you can buy the book.
 */
const Providers = ({
  buyLinks,
}: {
  buyLinks: { name: string; url: string }[];
}) => {
  const btnClasses =
    "btn-sm " +
    "w-1/3 " +
    "text-[0.5rem] " +
    "btn-primary " +
    "rounded-full " +
    "shadow-lg " +
    "sm:btn-md";

  const navigate = (url: string) => {
    window.location.href = url;
  };

  return (
    <div
      className="h-1/6
                 flex
                 flex-col
                 items-center
                 justify-center
                 gap-12"
    >
      {/* Label */}
      <div
        className="hidden
                   font-bold
                   text-xl
                   sm:flex"
      >
        Buy at these providers
      </div>
      {/* Buttons */}
      <div
        className="flex
                   justify-center
                   gap-4
                   sm:gap-12"
      >
        {buyLinks.map(({ name, url }) => (
          <TextButton
            key={uniqid()}
            onClickListener={navigate.bind(null, url)}
            textContent={name}
            classes={btnClasses}
          />
        ))}
      </div>
    </div>
  );
};

export default Providers;
