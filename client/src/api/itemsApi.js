import axios from 'axios';

const API_URL = 'http://localhost:3000/items'; 

export const getItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addItem = async (item) => {
  try {
    const response = await axios.post(API_URL, item);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateItem = async (item) => {
    try {
      const response = await axios.put(`${API_URL}/${item.id}`, item);
      return response.data;
    } catch (error) {
      throw error;
    }
};

export const deleteItem = async (item) => {
    try {
      const response = await axios.delete(`${API_URL}/${item.id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
};