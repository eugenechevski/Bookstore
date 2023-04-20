import NavBar from "src/components/general/NavBar";
import OffCanvas from "src/components/general/OffCanvas";
import { useState } from "react";

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

  return (
    <div
      className="flex
                 flex-col
                 items-center
                 bg-secondary
                 relative
                 overflow-scroll
                 scrollbar"
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
                   overflow-scroll
                   scrollbar"
      >
        {content}
      </div>
    </div>
  );
};

export default Page;
