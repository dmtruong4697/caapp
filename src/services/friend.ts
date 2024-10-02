import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';
import { api } from '.';

export const friendService = {
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

export default friendService;