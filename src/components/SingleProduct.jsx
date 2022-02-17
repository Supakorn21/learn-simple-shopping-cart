import React, { useContext } from "react";
import { Cart } from "../Context";

const SingleProduct = ({ prod,}) => {


  const {cart, setCart} = useContext(Cart)
  return (
    <>
      <div className="products" key={prod.id}>
        <img className="prod-img" src={prod.image} alt={prod.title} />

        <div className="productDesc">
          <span style={{ fontWeight: 700 }}>{prod.title}</span>
          <span>{prod.price}$</span>
        </div>

        {cart.includes(prod) ? (
          <button
            type="button"
            className="add"
            onClick={() => {
              setCart(cart.filter((c) => c.id !== prod.id));
            }}
          >
            Remove From Cart
          </button>
        ) : (
          <button
            type="button"
            className="add"
            onClick={() => {
              setCart([...cart, prod]);
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
