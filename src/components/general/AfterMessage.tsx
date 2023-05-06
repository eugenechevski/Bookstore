import Page from "components/general/Page";
import { Link } from "react-router-dom";

/**
 * A genearl page that displays a message and a button.
 */
const AfterMessage = ({ message }: { message: string }) => {
  return (
    <Page
      content={
        <div
          className="p-12
                     w-3/4
                     rounded-xl
                     bg-base-100
                     sm:w-1/4"
        >
          <div
            className="w-full
                       h-full
                       flex
                       flex-col
                       items-center
                       justify-end
                       gap-12"
          >
            {/** Message */}
            <div
              className="font-bold
                         text-center
                         mt-6"
            >
              {message}
            </div>

            {/** Button */}
            <Link
              to={"/home"}
              className="btn-primary
                         rounded-full
                         w-3/4
                         text-center"
            >
              Procceed
            </Link>
          </div>
        </div>
      }
      blank={true}
    ></Page>
  );
};

export default AfterMessage;
