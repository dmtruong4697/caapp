import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';
import { api } from '..';

export const RCChannelService = {
  async getCurrentRCChannel(): Promise<any> {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
  
      const response = await api.post(
        'rc-channel/current-rc-channel',
        {
        }, 
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

  async getRCChannelChatHistory(channelID: number): Promise<any> {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
  
      const response = await api.post(
        'rc-channel/chat-history',
        {
            "channel_id": channelID,
        }, 
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

  async leaveCurrentRCChannel(): Promise<any> {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
  
      const response = await api.post(
        'rc-channel/leave-rc-channel',
        {
        }, 
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

export default RCChannelService;