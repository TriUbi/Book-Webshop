import axios from "axios";
import { User } from "../models/User";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const authorizeUser = async (): Promise<false | User> => {
  const response = await axios.get(`${API_URL}/api/auth/authorize`, {
    withCredentials: true,
  });
  if (response.status === 200) {
    return response.data;
  } else return false;
};
