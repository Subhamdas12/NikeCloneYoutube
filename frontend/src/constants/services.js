export const indianCurrency = "₹";
export const getTotalAmount = (items) => {
  return items.reduce(
    (amount, item) => item.product.discountPrice * item.quantity + amount,
    0
  );
};

export const tax = 0;
