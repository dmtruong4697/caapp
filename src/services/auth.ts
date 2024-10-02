import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';
import { api } from '.';

interface LoginResponse {
  token: string;
  user: any;
}

export const authService = {
  async login(email: string, password: string, deviceToken: string): Promise<LoginResponse> {
    try {
        console.log("hêhhe");
      const response = await api.post('auth/login', { email, password, deviceToken });
      console.log(response);
      return response.data;
    } catch (error: any) {
      throw error.response.data
    }
  },
};

export default authService;