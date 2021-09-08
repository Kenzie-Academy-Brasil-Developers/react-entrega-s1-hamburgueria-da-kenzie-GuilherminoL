import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import MenuContainer from "./components/MenuContainer";

function App() {
  const showProducts = (productName) => {
    const output = products.filter((product) => {
      return product.name === productName;
    });
    setFilteredProducts(output);
  };

  const calcTotal = () => {
    const total = currentSale.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    return total;
  };
  const handleClick = (id) => {
    const output = products.find((product) => product.id === id);
    if (!currentSale.find((item) => item.id === output.id)) {
      setCurrentSale([...currentSale, output]);
      setCartTotal(calcTotal());
    }
  };
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

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
      <p>SubTotal - {cartTotal}</p>
    </>
  );
}

export default App;
