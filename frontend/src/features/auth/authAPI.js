// A mock function to mimic making an async request for data
export function createUser(user) {
  return new Promise(async (resolve) => {
    const response = await fetch("/auth/createUser", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function loginUser(user) {
  return new Promise(async (resolve, reject) => {
    console.log(user);
    try {
      const response = await fetch("/auth/loginUser", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "content-type": "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        resolve({ data });
      } else {
        const error = await response.text();
        reject(error);
      }
    } catch (err) {
      reject(err);
    }
  });
}

export function checkUser() {
  return new Promise(async (resolve) => {
    const response = await fetch("/auth/checkUser");
    const data = await response.json();
    resolve({ data });
  });
}
