const cartItemsEqual = (item1, item2) => {
  if (
    item1.id === item2.id &&
    item1.printType === item2.printType &&
    item1.printSize === item2.printSize
  )
    return true;
  return false;
};

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) =>
    cartItemsEqual(cartItem, cartItemToAdd)
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItemsEqual(cartItem, cartItemToAdd)
        ? { ...cartItem, quantity: cartItem.quantity + cartItemToAdd.quantity }
        : cartItem
    );
  }

  return [...cartItems, cartItemToAdd];
};
