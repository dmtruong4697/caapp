import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';
import { api } from '.';

interface LoginResponse {
  token: string;
  user: any;
}

export const apiService = {
  async login(email: string, password: string, deviceToken: string): Promise<LoginResponse> {
    try {
      const response = await api.post('auth/login', { email, password, deviceToken });
      return response.data;
    } catch (error: any) {
      throw error.response.data
    }
  },

  async getProfileInfo(): Promise<any> {
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
      throw error.response.data
    }
  },

  async getSuggestUser(): Promise<any> {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
  
      const response = await api.post(
        'friend/suggest',
        {}, 
        {
          headers: { 
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        }
      );
      // console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error.response);
      throw error.response.data
    }
  },

  async getAllMyFriend(): Promise<any> {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
  
      const response = await api.post(
        'friend/all-my-friend',
        {}, 
        {
          headers: { 
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        }
      );
      // console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error.response);
      throw error.response.data
    }
  },

};

export default apiService;