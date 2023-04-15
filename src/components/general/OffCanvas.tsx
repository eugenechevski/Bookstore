import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { DataContext } from "components/App";
import { useContext, useEffect, useState } from "react";
import { COffcanvas, COffcanvasBody } from "@coreui/bootstrap-react";

const OffCanvas = ({
  testCategories,
  showOffcanvas,
  toggleOffcanvas,
}: {
  testCategories?: Category[];
  showOffcanvas: boolean;
  toggleOffcanvas: () => void;
}) => {
  const { categories } = useContext(DataContext);
  const [stateCategories, setStateCategories] = useState<Category[]>(
    testCategories ? testCategories : categories
  );

  useEffect(() => {
    if (categories) {
      setStateCategories(categories);
    } else if (testCategories) {
      setStateCategories(testCategories);
    }
  }, [categories, testCategories]);

  return (
    <COffcanvas
      className="scrollbar
                 overflow-scroll
                 h-[89%] 
                 w-full
                 flex flex-col 
                 bg-base-100 
                 invisible 
                 bg-clip-padding 
                 shadow-xl
                 outline-none 
                 transition 
                 duration-500 
                 ease-in 
                 text-base-content 
                 border-none 
                 rounded-lg 
                 fixed 
                 bottom-6 
                 left-2
                 sm:w-1/4"
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
  );
};

export default OffCanvas;
