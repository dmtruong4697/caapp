import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8910';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface LoginResponse {
  token: string;
  user: any;
}

export const apiService = {
  async login(email: string, password: string, deviceToken: string): Promise<LoginResponse> {
    try {
      const response = await api.post('auth/login', { email, password, deviceToken });
      // console.log(response.data)
      return response.data;
    } catch (error: any) {
      throw new Error(error.response.data.message || 'An error occurred');
    }
  },

  async getProfileInfo(): Promise<LoginResponse> {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
  
      const response = await api.post(
        'profile/profile-info',
        {}, 
        {
          headers: { 
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error.response);
      throw new Error(error.response.data.message || 'An error occurred');
    }
  }


  
};

export default apiService;