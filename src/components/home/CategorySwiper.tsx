import CategoryDisplay from "components/home/CategoryDisplay";
import { Swiper, SwiperSlide } from "swiper/react";
import uniqid from "uniqid";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

/**
 * Displays a swiper of categories.
 */
const CategorySwiper = ({
  stateCategories,
}: {
  stateCategories: ICategory[];
}) => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mt-20
                 sm:mt-12
                 sm:p-12"
    >
      {stateCategories?.map((category: ICategory) => (
        <SwiperSlide key={uniqid()}>
          <CategoryDisplay key={uniqid()} category={category}></CategoryDisplay>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CategorySwiper;
