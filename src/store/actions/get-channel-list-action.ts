import { GetChannelListResponce, GetChannelListResponceItem } from "../../models/channel-responce/get-channel-list-responce";

export const GET_CHANNEL_LIST_REQUEST = 'GET_CHANNEL_LIST_REQUEST';
export const GET_CHANNEL_LIST_SUCCESS = 'GET_CHANNEL_LIST_SUCCESS';
export const GET_CHANNEL_LIST_FAILURE = 'GET_CHANNEL_LIST_FAILURE';

export const UPDATE_CHANNEL_LIST_ITEM = 'UPDATE_CHANNEL_LIST_ITEM';

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
    channels: GetChannelListResponceItem[];
    is_last_page: boolean;
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

interface UpdateChannelListItem {
  type: typeof UPDATE_CHANNEL_LIST_ITEM;
  payload: {
    channel: GetChannelListResponceItem;
    [key: string]: any;
  };
}

export type GetChannelListActionTypes = GetChannelListRequestAction | GetChannelListSuccessAction | GetChannelListFailureAction | UpdateChannelListItem;

export const getChannelListRequest = (limit: number, offset: number) => ({
  type: GET_CHANNEL_LIST_REQUEST,
  payload: { limit, offset }
});

export const getChannelListSuccess = (channels: GetChannelListResponceItem[], is_last_page: boolean) => ({
  type: GET_CHANNEL_LIST_SUCCESS,
  payload: { channels, is_last_page }
});

export const getChannelListFailure = (error: string) => ({
  type: GET_CHANNEL_LIST_FAILURE,
  payload: { error }
});

export const updateChannelListItem = (channel: GetChannelListResponceItem) => ({
  type: UPDATE_CHANNEL_LIST_ITEM,
  payload: { channel }
})