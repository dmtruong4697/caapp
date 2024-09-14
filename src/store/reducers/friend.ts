import { ProfileInfo } from "../../models/profile/profile-info";
import { UserInfo } from "../../models/user/user-info";
import { FriendActionTypes, GET_SUGGEST_USER_FAILURE, GET_SUGGEST_USER_REQUEST, GET_SUGGEST_USER_SUCCESS } from "../actions/friend";
import { GET_PROFILE_INFO_REQUEST } from "../actions/profile";

interface FriendState {
  suggest_user: any | null;
  error: any | null;
}

const initialState: FriendState = {
    suggest_user: null,
    error: null,
};

const friendReducer = (state = initialState, action: FriendActionTypes): FriendState => {
  switch (action.type) {
    case GET_SUGGEST_USER_REQUEST:
      return {
        ...state,
        error: null,
      };
    case GET_SUGGEST_USER_SUCCESS:
      return {
        ...state,
        suggest_user: action.payload.users,
        error: null,
      };
    case GET_SUGGEST_USER_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default friendReducer;