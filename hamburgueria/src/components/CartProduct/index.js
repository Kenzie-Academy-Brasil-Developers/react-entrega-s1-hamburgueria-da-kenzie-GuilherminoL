import "./style.css";
const CartProduct = ({ item, removeItem }) => {
  return (
    <li className="menuContainerItem">
      <h3>{item.name}</h3>
      <p>Categoria - {item.category}</p>
      <p>Preço - {item.price}</p>
      <button onClick={() => removeItem(item.id)}>Remover do carrinho</button>
    </li>
  );
};

export default CartProduct;
