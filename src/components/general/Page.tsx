// Components
import NavBar from "components/general/NavBar";
import OffCanvas from "components/general/OffCanvas";

// React stuff
import { useState } from "react";
import { useSpring, animated } from "react-spring";

// A general page component.
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
  // State
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  // Animation for smooth transition
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 750 },
  });

  // Toggle offcanvas
  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

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
