import "./style.css";
const Product = ({ item, handleClick }) => {
  return (
    <li className="menuContainerItem">
      <h3>{item.name}</h3>
      <p>Categoria - {item.category}</p>
      <p>Preço - {item.price}</p>
      <button className="addButton" onClick={() => handleClick(item.id)}>
        Adicionar ao carrinho
      </button>
    </li>
  );
};

export default Product;
