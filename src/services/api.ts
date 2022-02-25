const API_BASE =
  "https://api-frontend-chalenge-fiter.herokuapp.com/api/collaborators";

import axios from "axios";

export const GetCollaborators = async (page: number, limit: number) => {
  const response = axios.get(`${API_BASE}?_page=${page}&_limit=${limit}`);
  return response;
};
