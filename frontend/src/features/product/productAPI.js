// A mock function to mimic making an async request for data
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
