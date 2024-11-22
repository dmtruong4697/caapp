import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';
import { api } from '.';

export const constantDataService = {
  async getLanguageList(): Promise<any> {
    try {
      const response = await api.post('constant-data/languages', {});
      console.log(response);
      return response.data;
    } catch (error: any) {
      throw error.response.data
    }
  },

};

export default constantDataService;