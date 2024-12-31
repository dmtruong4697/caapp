import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';
import { api } from '.';
import { FirstUpdateProfileInfoRequest } from '../models/profile-request/first-update-profile-info-request';
import { UpdateProfileInfoRequest } from '../models/profile-request/update-profile-info-request';

export const profileService = {
  async getProfileInfo(): Promise<any> {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log(token);
  
      const response = await api.post(
        'profile/profile-info',
        {
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

  async checkDuplicateHashtagName(hashtagName: string): Promise<any> {
    try {
      const response = await api.post('profile/check-duplicate-hashtag-name', { hashtag_name: hashtagName});
      console.log(response);
      return response.data;
    } catch (error: any) {
      throw error.response.data
    }
  },

  async firstUpdateProfileInfo(request: FirstUpdateProfileInfoRequest): Promise<any> {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await api.post(
        'profile/first-update-profile-info', 
        {
          hashtag_name: request.hashtag_name,
          first_name: request.first_name,
          last_name: request.last_name,
          phone_number: request.phone_number,
          gender: request.gender,
          date_of_birth: request.date_of_birth,
          middle_name: request.middle_name,
          country: request.country,
          language: request.language,
        },
        {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        });
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error.response);
      throw error.response.data
    }
  },

  async updateProfileInfo(request: UpdateProfileInfoRequest): Promise<any> {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await api.post(
        'profile/update-profile-info', 
        {
          request
        },
        {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        });
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error.response);
      throw error.response.data
    }
  },
  
};

export default profileService;