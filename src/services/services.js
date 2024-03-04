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
export const getCategory = (categoryId, data) => {
  return api.get(`${baseURL}/product-category/${categoryId}`, { ...data });
};

export const addProductToCart = (data) => {
  return api.post(`${baseURL}/cart`, { ...data });
};

export const deleteFromCart = (data) => {
  return api.delete(`${baseURL}/cart`, { ...data });
};

export const getFromCart = (data) => {
  return api.get(`${baseURL}/cart`, { ...data });
};
