import api from "./api";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const login = (data) => {
  return api.post(`${baseURL}/auth/login`, { ...data });
};

export const registration = (data) => {
  return api.post(`${baseURL}/auth/register`, { ...data });
};
export const getProducts = (query) => {
  return api.get(`${baseURL}/product`, {
    params: {
      search: query,
    },
  });
};
export const getProduct = (productId, data) => {
  return api.get(`${baseURL}/product/${productId}`, { ...data });
};
export const getCategories = (data) => {
  return api.get(`${baseURL}/product-category`, { ...data });
};

export const addProductToCart = (data) => {
  return api.post(`${baseURL}/cart`, { ...data });
};

export const deleteFromCart = (productId, removeAll) => {
  return api.delete(`${baseURL}/cart/${productId}?removeAll=${removeAll}`);
};

export const getFromCart = (data) => {
  return api.get(`${baseURL}/cart`, { ...data });
};

export const getFromPurchases = (data) => {
  return api.get(`${baseURL}/purchases`, { ...data });
};
export const addPurchases = (data) => {
  return api.post(`${baseURL}/purchases`, { ...data });
};

export const getUserinfo = () => {
  return api.get(`${baseURL}/user/current-user`);
};

export const updateUserinfo = (userData) => {
  return api.put(`${baseURL}/user`, userData);
};
export const purchaseProducts = (data) => {
  return api.post(`${baseURL}/purchases`, { ...data });
};

export const getPurchases = (data) => {
  return api.get(`${baseURL}/purchases`, { ...data });
};
