import axios from 'axios';

const API_BASE_URL = 'https://port-0-b-e-repository-m1qaons0275b16c0.sel4.cloudtype.app';

export const saveBoard = async (boardData) => {
    const token = localStorage.getItem('jwtToken'); 
    const response = await axios.post(`${API_BASE_URL}/board/save`, boardData, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const handleSignIn = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sign_up`);
    return response.data;
  } catch (error) {
    console.error("Error during sign-in:", error.response ? error.response.data : error.message);
    throw new Error("Failed to sign in. Please try again.");  
  }
}

export const getAllBoards = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/board`);
    return response.data;
  } catch (error) {
    console.error("Error getting boards:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getBoardById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/board/get/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting board:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const updateBoard = async (requestData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/board/update`, requestData);
    return response.data;
  } catch (error) {
    console.error("Error updating board:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteBoard = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/board/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting board:", error.response ? error.response.data : error.message);
    throw error;
  }
};