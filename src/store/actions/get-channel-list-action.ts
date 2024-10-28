import { GetChannelListResponce } from "../../models/channel-responce/get-channel-list-responce";

export const GET_CHANNEL_LIST_REQUEST = 'GET_CHANNEL_LIST_REQUEST';
export const GET_CHANNEL_LIST_SUCCESS = 'GET_CHANNEL_LIST_SUCCESS';
export const GET_CHANNEL_LIST_FAILURE = 'GET_CHANNEL_LIST_FAILURE';

interface GetChannelListRequestAction {
  type: typeof GET_CHANNEL_LIST_REQUEST;
  payload: {
    limit: number;
    offset: number;
    [key: string]: any;
  };
}

interface GetChannelListSuccessAction {
  type: typeof GET_CHANNEL_LIST_SUCCESS;
  payload: {
    channels: GetChannelListResponce;
    [key: string]: any;
  };
}

interface GetChannelListFailureAction {
  type: typeof GET_CHANNEL_LIST_FAILURE;
  payload: {
    error: any;
    [key: string]: any;
  };
}

export type GetChannelListActionTypes = GetChannelListRequestAction | GetChannelListSuccessAction | GetChannelListFailureAction;

export const getChannelListRequest = (limit: number, offset: number) => ({
  type: GET_CHANNEL_LIST_REQUEST,
  payload: { limit, offset }
});

export const getChannelListSuccess = (channels: GetChannelListResponce) => ({
  type: GET_CHANNEL_LIST_SUCCESS,
  payload: { channels }
});

export const getChannelListFailure = (error: string) => ({
  type: GET_CHANNEL_LIST_FAILURE,
  payload: { error }
});