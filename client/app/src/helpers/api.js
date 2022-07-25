const BASE_URL = "http://localhost:5000";

export async function signIn(email, password) {
  let response;
  try {
    response = await fetch(`${BASE_URL}/users/signIn`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    return response;
  } catch (e) {
    console.log(e.message);
  }
  return response;
}

export async function signOut() {
  let response;
  try {
    response = await fetch(`${BASE_URL}/users/signOut`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    return response;
  } catch (e) {
    console.log(e.message);
  }
  return response;
}

export async function checkIsAuth() {
  let response;
  try {
    response = await fetch(`${BASE_URL}/users/auth`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    return response;
  } catch (e) {
    console.log(e.message);
  }
  return response;
}
