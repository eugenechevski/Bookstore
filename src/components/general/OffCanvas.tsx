import { Link } from "react-router-dom";
import uniqid from "uniqid";
import { DataContext } from "components/App";
import { useContext, useEffect, useState, useRef } from "react";
import { COffcanvas, COffcanvasBody } from "@coreui/bootstrap-react";

const OffCanvas = ({
  testCategories,
  showOffcanvas,
  toggleOffcanvas,
}: {
  showOffcanvas: boolean;
  toggleOffcanvas: () => void;
  testCategories?: ICategory[];
}) => {
  const { categories } = useContext(DataContext);
  const [stateCategories, setStateCategories] = useState<ICategory[]>(
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
      className="fixed
                 border
                 border-primary
                 z-50
                 scrollbar
                 overflow-scroll 
                 w-[360px]
                 h-[560px]
                 flex 
                 flex-col 
                 bg-base-100 
                 invisible 
                 bg-clip-padding 
                 shadow-xl
                 outline-none 
                 transition 
                 duration-500 
                 ease-out
                 text-base-content 
                 rounded-lg 
                 bottom-6 
                 sm:left-2
                 sm:h-[840px]
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
