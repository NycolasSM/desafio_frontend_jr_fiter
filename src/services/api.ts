const API_NYCOLAS =
  "https://api-frontend-chalenge-fiter.herokuapp.com/api/collaborators";

const API_FITER =
  "https://gist.githubusercontent.com/alencarlucas/4cd794e2e44bbe926ea4ab28da2fa3e7/raw/2c304035b03c3c5e2e708e4e82c49a42899e47ed/fiter.json";

import axios from "axios";

export const GetCollaboratorsNycolasAPi = async (
  page: number,
  limit: number,
) => {
  const response = axios.get(`${API_NYCOLAS}?_page=${page}&_limit=${limit}`);
  return response;
};

export const GetCollaboratorsFiterApi = async () => {
  const response = axios.get(`${API_FITER}`);
  return response;
};
