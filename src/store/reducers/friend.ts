import { GetAllFriendResponce } from "../../models/friend-responce/get-all-friend-responce";
import { ProfileInfo } from "../../models/profile/profile-info";
import { UserInfo } from "../../models/user-info/user-info";
import { createTwoButtonAlert } from "../../utils/alert";
import { SuggestUserActionTypes, GET_SUGGEST_USER_FAILURE, GET_SUGGEST_USER_REQUEST, GET_SUGGEST_USER_SUCCESS, GetAllMyFriendActionTypes, GET_ALL_MY_FRIENDS_REQUEST, GET_ALL_MY_FRIENDS_SUCCESS } from "../actions/friend";
import { GET_ALL_RECEIVED_REQUEST_SUCCESS } from "../actions/friend-request";
import { GET_PROFILE_INFO_REQUEST } from "../actions/profile";

interface FriendState {
  suggest_users: UserInfo[] | null;
  my_friends: GetAllFriendResponce | null;
  error_suggest_users: any | null;
  error_get_my_friend: any | null;
}

const initialState: FriendState = {
    suggest_users: null,
    my_friends: null,
    error_suggest_users: null,
    error_get_my_friend: null,
};

const friendReducer = (state = initialState, action: SuggestUserActionTypes | GetAllMyFriendActionTypes): FriendState => {
  switch (action.type) {
    case GET_SUGGEST_USER_REQUEST:
      return {
        ...state,
        error_suggest_users: null,
      };
    case GET_SUGGEST_USER_SUCCESS:
      return {
        ...state,
        suggest_users: action.payload.users,
        error_suggest_users: null,
      };
    case GET_SUGGEST_USER_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error_suggest_users: action.payload.error,
      };
// get all friend
    case GET_ALL_MY_FRIENDS_REQUEST:
      return {
        ...state,
        error_get_my_friend: null,
      };
    case GET_ALL_MY_FRIENDS_SUCCESS:
      return {
        ...state,
        my_friends: action.payload.friends,
        error_get_my_friend: null,
      };
    case GET_SUGGEST_USER_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error_get_my_friend: action.payload.error,
      };
    default:
      return state;
  }
};

export default friendReducer;