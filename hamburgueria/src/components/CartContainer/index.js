import CartProduct from "../CartProduct";
import "./style.css";
const MenuContainer = ({ products, removeItem }) => {
  return (
    <ul className="CartContainer">
      {products.map((item, index) => {
        return <CartProduct item={item} removeItem={removeItem} key={index} />;
      })}
    </ul>
  );
};
export default MenuContainer;
