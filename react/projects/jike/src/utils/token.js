// in case we dont remember this key name, we define it here and couple our functions to get, set and remove token from local storage
const TOKEN_KEY = "token";

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export { getToken, setToken, removeToken };
