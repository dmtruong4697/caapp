import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';
import { api } from '.';

export const friendRequestService = {
  async createFriendRequest(userID: number): Promise<any> {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await api.post(
        'friend/create-request',
        {
          user_id: userID,
        }, 
        {
          headers: { 
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error: any) {
      console.log(error.response);
      throw error.response.data
    }
  },

  async getAllReceivedRequest(): Promise<any> {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await api.post(
        'friend/received-request',
        {
        }, 
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

  async acceptFriendRequest(id: number): Promise<any> {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await api.post(
        'friend/accept-request',
        {
          id: id,
        }, 
        {
          headers: { 
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data;
    } catch (error: any) {
      console.log(error.response);
      throw error.response.data
    }
  },

  async rejectFriendRequest(id: number): Promise<any> {
    try {
      const token = await AsyncStorage.getItem('token');

      const response = await api.post(
        'friend/reject-request',
        {
          id: id,
        }, 
        {
          headers: { 
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data;
    } catch (error: any) {
      console.log(error.response);
      throw error.response.data
    }
  },
};

export default friendRequestService;