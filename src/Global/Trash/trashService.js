import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/trash/";
// create trash
const createTrash = async (trashData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, trashData, config);
  return response.data;
};
// delete trash
const deleteTrash = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);
  return response.data;
};
// get trash
const getTrash = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
/// search Trashhh
const searchTrash = async () => {
  const response = await axios.get(`${API_URL}search`);
  return response.data;
};
const trashService = { createTrash, getTrash, deleteTrash, searchTrash };
export default trashService;
