import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from 'react-native-config';

export const api = axios.create({
  // baseURL: Config.API_BASE_URL,
  baseURL: "http://192.168.52.144:8910",
  headers: {
    'Content-Type': 'application/json',
  },
});