import { useDispatch } from "react-redux";
import { addItem } from "../stores/cartSlice";
const MenuItems = ({ menuItem }) => {
  const dispatch = useDispatch();
  const addToCart = (menuItem) => {
    dispatch(addItem(menuItem));
  };
  return (
    <div key={menuItem.id} className="menu-item d-flex">
      <div className="d-flex" style={{ gap: "20px" }}>
        {menuItem.image && (
          <img
            className="menu-item-image"
            src={menuItem.image}
            alt={menuItem.item}
          />
        )}
        <span className="menu-item-name">
          {menuItem.item} - {menuItem.price}/-
        </span>
      </div>
      <button className="MenuCartBtn" onClick={() => addToCart(menuItem)}>
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItems;
