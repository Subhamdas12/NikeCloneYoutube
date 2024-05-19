export function createProduct(product) {
  return new Promise(async (resolve) => {
    console.log(product);
    const response = await fetch("products/createProduct", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProduct(filter, sort) {
  return new Promise(async (resolve) => {
    let queryString = "";
    //Query building for the filter
    for (let key in filter) {
      if (filter[key].length) {
        queryString += `${key}=${filter[key]}&`;
      }
    }
    //Query building for the sort
    for (let key in sort) {
      queryString += `${key}=${sort[key]}&`;
    }

    const response = await fetch("products/fetchProducts?" + queryString);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductById(id) {
  return new Promise(async (resolve) => {
    const response = await fetch(`/products/fetchProductById/${id}`);
    const data = await response.json();
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
