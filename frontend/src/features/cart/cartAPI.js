export function addToCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart/addToCart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchCart() {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart/fetchCart");
    const data = await response.json();
    resolve({ data });
  });
}
export function updateCart(item) {
  return new Promise(async (resolve) => {
    const response = await fetch("/cart/updateCart/" + item._id, {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteFromCart(id) {
  return new Promise(async (resolve) => {
    console.log("This is for the deleteing", id);
    const response = await fetch("/cart/deleteFromCart/" + id, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}
