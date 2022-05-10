import React from 'react';
import CartItem from '../../components/cart/CartItem';

import { useSelector } from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={{
            title: item.name,
            quantity: item.quantity,
            total: item.totalPrice,
            price: item.price,
            id: item.id,
          }}
        />
      ))}
    </div>
  );
};

export default Cart;
