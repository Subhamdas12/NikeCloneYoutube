// A mock function to mimic making an async request for data
export function fetchProduct() {
  return new Promise(async (resolve) => {
    const response = await fetch("products/fetchProducts");
    const data = await response.json();
    console.log(data);
    resolve({ data });
  });
}

export function fetchColors() {
  return new Promise(async (resolve) => {
    const response = await fetch("/colors");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchSizes() {
  return new Promise(async (resolve) => {
    const response = await fetch("/sizes");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchCategories() {
  return new Promise(async (resolve) => {
    const response = await fetch("/categories");
    const data = await response.json();
    resolve({ data });
  });
}
