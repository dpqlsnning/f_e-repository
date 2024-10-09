import axios from 'axios';

// 백엔드 API의 기본 URL
const API_BASE_URL = 'https://port-0-b-e-repository-m1qaons0275b16c0.sel4.cloudtype.app';

// 게시글 저장 API 호출
export const saveBoard = async (requestData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/board/save`, requestData);
    return response.data;
  } catch (error) {
    console.error("Error saving board:", error);
    throw error;
  }
};

// 모든 게시글 조회 API 호출
export const getAllBoards = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/board`);
    return response.data;
  } catch (error) {
    console.error("Error getting boards:", error);
    throw error;
  }
};

// 특정 게시글 조회 API 호출
export const getBoardById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/board/get/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error getting board:", error);
    throw error;
  }
};

// 게시글 수정 API 호출
export const updateBoard = async (requestData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/board/update`, requestData);
    return response.data;
  } catch (error) {
    console.error("Error updating board:", error);
    throw error;
  }
};

// 게시글 삭제 API 호출
export const deleteBoard = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/board/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting board:", error);
    throw error;
  }
};
