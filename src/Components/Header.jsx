import React, { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../Store/CartContext";
import userProgressContext from "../Store/userProgressContext";

function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(userProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNunberOfItems, item) => {
    return totalNunberOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A Restaurant" />
        <h1> FOOD FOR FUN </h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}

export default Header;
