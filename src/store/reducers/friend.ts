import { ProfileInfo } from "../../models/profile/profile-info";
import { UserInfo } from "../../models/user/user-info";
import { FriendActionTypes, GET_SUGGEST_USER_FAILURE, GET_SUGGEST_USER_SUCCESS } from "../actions/friend";

interface FriendState {
  suggest_user: UserInfo[] | null;
  error: any | null;
}

const initialState: FriendState = {
    suggest_user: null,
    error: null,
};

const friendReducer = (state = initialState, action: FriendActionTypes): FriendState => {
  switch (action.type) {
    case GET_SUGGEST_USER_SUCCESS:
      return {
        ...state,
        suggest_user: action.payload.users
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