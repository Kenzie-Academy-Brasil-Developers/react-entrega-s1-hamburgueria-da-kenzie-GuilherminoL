import "./style.css";
const CartProduct = ({ item, removeItem }) => {
  return (
    <li className="cartContainerItem">
      <div className="topContainer">
        <h3>{item.name}</h3>

        <button className="removeButton" onClick={() => removeItem(item.id)}>
          X
        </button>
      </div>

      <p>Categoria - {item.category}</p>
      <p>Preço - {item.price}</p>
    </li>
  );
};

export default CartProduct;
