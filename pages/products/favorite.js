import React from "react";
import ProductItem from "../../components/products/ProductItem";
import FavoriteProducts from "../../components/products/FavoriteProducts";
import Link from "next/link";
import { getAllProducts } from "../../helper/ApiUtil";

import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.favore.items);

  return (
    <div>
      {cartItems.map((item) => (
        <FavoriteProducts
          key={item.id}
          item={{
            title: item.name,
            price: item.price,
            id: item.id,
            image: item.image,
          }}
        />
      ))}
    </div>
  );
};

export default Cart;
