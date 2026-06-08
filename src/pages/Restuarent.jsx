import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURENT_API } from "../utils/service";
import useRestaurentData from "../utils/useRestaurentData";
import useMenuItems from "../utils/useMenuItems";
import MenuItems from "../components/MenuItems";

const Restaurent = () => {
  const { resId } = useParams();
  const menuItems = useMenuItems(resId);
  const restauentData = useRestaurentData();
  const [showCategory, setShowCategory] = useState({});
  const handleCategoryClick = (key) => {
    setShowCategory({ [key]: !showCategory[key] });
  };
  useEffect(() => {
    setShowCategory({
      [Object.keys(menuItems)[0]]: true,
    });
  }, [menuItems]);
  return (
    restauentData && (
      <div className="restaurentContainer">
        <h1 style={{ textAlign: "center" }}>
          {restauentData[resId]?.restaurantName}
        </h1>
        <h3>Distance: {restauentData[resId]?.distance}</h3>
        {menuItems &&
          Object.keys(menuItems).map((key, parentIndex) => (
            <div key={key} className="menuCategory">
              <div
                className="menuCategoryHeader d-flex"
                style={{ gap: "10px" }}
                onClick={() => handleCategoryClick(key)}
              >
                <h1>{key}</h1> <span>╲╱</span>
              </div>
              {showCategory[key] && (
                <ul className="menuItems d-flex">
                  {menuItems[key]?.map((menuItem, index) => (
                    <MenuItems menuItem={menuItem} key={menuItem.id} />
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
    )
  );
};
export default Restaurent;
