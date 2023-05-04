import NavBar from "src/components/general/NavBar";
import OffCanvas from "src/components/general/OffCanvas";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

const Page = ({
  content,
  blank,
  testUser,
  testCategories,
}: {
  content: any;
  blank: boolean;
  testUser?: IUser;
  testCategories?: ICategory[];
}) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const props = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 750 } });

  return (
    <animated.div
      style={props}
      className="flex
                 flex-col
                 items-center
                 bg-secondary
                 relative
                 overflow-hidden"
    >
      {!blank && (
        <>
          <NavBar
            testUser={testUser}
            toggleOffcanvas={toggleOffcanvas}
          ></NavBar>
          <OffCanvas
            testCategories={testCategories}
            showOffcanvas={showOffcanvas}
            toggleOffcanvas={toggleOffcanvas}
          ></OffCanvas>
        </>
      )}
      <div
        className="min-h-screen
                   max-h-max
                   w-screen
                   flex
                   justify-center
                   items-center
                   overflow-hidden"
      >
        {content}
      </div>
    </animated.div>
  );
};

export default Page;
