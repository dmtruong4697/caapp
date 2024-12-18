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

  async register(email: string, password: string): Promise<any> {
    try {
      const response = await api.post('auth/register', { email, password});
      console.log(response);
      return response.data;
    } catch (error: any) {
      throw error.response.data
    }
  },

  async resendValidateCode(email: string): Promise<any> {
    try {
      const response = await api.post('auth/resend-email-validate-code', { email });
      console.log(response);
      return response.data;
    } catch (error: any) {
      throw error.response.data
    }
  },

  async validateEmail(email: string, password: string, validate_code: string): Promise<any> {
    try {
      const response = await api.post('auth/validate-email', { email, password, validate_code });
      console.log(response);
      return response.data;
    } catch (error: any) {
      throw error.response.data
    }
  },

  async logout(): Promise<any> {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await api.post('auth/logout', 
        {},
        {
          headers: { 
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        }
      );
      return response.data;
    } catch (error: any){
      throw error.response.data
    }
  },

  async forgotPassword(email: string): Promise<any> {
    try {
      const response = await api.post('auth/forgot-password', 
        {
          email: email,
        },
      );
      return response.data;
    } catch (error: any){
      throw error.response.data
    }
  },

  async forgotPasswordValidateEmail(email: string, validateCode: string): Promise<any> {
    try {
      const response = await api.post('auth/forgot-password-validate', 
        {
          email: email,
          validate_code: validateCode
        },
      );
      return response.data;
    } catch (error: any){
      throw error.response.data
    }
  },

  async forgotPasswordChangePassword(email: string, password: string): Promise<any> {
    try {
      const response = await api.post('auth/forgot-password-change-password', 
        {
          email: email,
          password: password
        },
      );
      return response.data;
    } catch (error: any){
      throw error.response.data
    }
  },

  async resendForgotPasswordValidateCode(email: string): Promise<any> {
    try {
      const response = await api.post('auth/resend-forgot-password-validate-code', 
        {
          email: email,
        },
      );
      return response.data;
    } catch (error: any){
      throw error.response.data
    }
  },
};

export default authService;