const MenuItems = ({ menuItem }) => {
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
      <button className="MenuCartBtn">Add to Cart</button>
    </div>
  );
};

export default MenuItems;
