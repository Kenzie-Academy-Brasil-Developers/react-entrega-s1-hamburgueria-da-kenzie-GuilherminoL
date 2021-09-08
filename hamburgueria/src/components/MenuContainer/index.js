import Product from "../Product";
import "./style.css";
const MenuContainer = ({ products, handleClick }) => {
  return (
    <ul className="menuContainer">
      {products.map((item, index) => {
        return <Product item={item} handleClick={handleClick} key={index} />;
      })}
    </ul>
  );
};
export default MenuContainer;
