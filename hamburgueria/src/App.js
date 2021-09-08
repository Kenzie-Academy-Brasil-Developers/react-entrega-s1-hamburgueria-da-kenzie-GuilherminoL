import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";

function App() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  const showProducts = (productName) => {
    const output = products.filter((product) => {
      return product.name === productName;
    });
    setFilteredProducts(output);
  };

  const total = currentSale
    .reduce((acc, item) => item.price + acc, 0)
    .toFixed(2);

  const handleClick = (id) => {
    const output = products.find((product) => product.id === id);
    if (!currentSale.includes(output)) {
      setCurrentSale([...currentSale, output]);
    }
  };

  const removeItem = (id) => {
    const output = currentSale.find((product) => product.id === id);
    const outputIndex = output.indexOf(output);
    currentSale.splice(outputIndex);
  };

  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  return (
    <>
      <MenuContainer products={products} handleClick={handleClick} />

      <h2 className="cartTitle">Carrinho: </h2>
      <MenuContainer products={currentSale} removeItem={removeItem} />
      <p className="totalPrice">SubTotal - {total}</p>
    </>
  );
}

export default App;
