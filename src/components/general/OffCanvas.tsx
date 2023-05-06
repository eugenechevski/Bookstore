// Components
import { DataContext } from "components/App";

// React stuff
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { COffcanvas, COffcanvasBody } from "@coreui/bootstrap-react";
import { useSpring, animated } from "@react-spring/web";

// Utilities
import uniqid from "uniqid";


const OffCanvas = ({
  testCategories,
  showOffcanvas,
  toggleOffcanvas,
}: {
  showOffcanvas: boolean;
  toggleOffcanvas: () => void;
  testCategories?: ICategory[];
}) => {
  // Context
  const { categories } = useContext(DataContext);

  // State
  const [stateCategories, setStateCategories] = useState<ICategory[]>(
    testCategories ? testCategories : categories
  );

  // Animation for smooth transition
  const [props, api] = useSpring(() => ({
    from: { transform: "translateX(-100%)" },
  }));

  // Load categories from context or testCategories
  useEffect(() => {
    if (categories) {
      setStateCategories(categories);
    } else if (testCategories) {
      setStateCategories(testCategories);
    }
  }, [categories, testCategories]);

  // Animate when showOffcanvas changes
  useEffect(() => {
    if (showOffcanvas) {
      api.start({ transform: "translateX(0%)" });
    } else {
      api.start({ transform: "translateX(-100%)" });
    }
  }, [showOffcanvas, api]);

  return (
    <animated.div
      style={props}
      className={"w-[95%] sm:w-1/4 fixed z-50 top-20 left-2"}
    >
      <COffcanvas
        className="border
                   border-primary
                   scrollbar
                   overflow-scroll
                   flex
                   flex-col
                   bg-base-100
                   bg-clip-padding
                   shadow-xl
                   outline-none
                   text-base-content
                   rounded-lg"
        backdrop={true}
        placement="start"
        portal={false}
        visible={showOffcanvas}
        scroll={false}
      >
        <COffcanvasBody>
          <ul className="menu" tabIndex={0}>
            {stateCategories?.map((category) => (
              <li onClick={toggleOffcanvas} key={uniqid()}>
                <Link to={`/categories/${category.getFormattedName()}`}>
                  {category.getName()}
                </Link>
              </li>
            ))}
          </ul>
        </COffcanvasBody>
      </COffcanvas>
    </animated.div>
  );
};

export default OffCanvas;
