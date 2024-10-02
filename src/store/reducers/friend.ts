import { ProfileInfo } from "../../models/profile/profile-info";
import { UserInfo } from "../../models/user-info/user-info";
import { createTwoButtonAlert } from "../../utils/alert";
import { SuggestUserActionTypes, GET_SUGGEST_USER_FAILURE, GET_SUGGEST_USER_REQUEST, GET_SUGGEST_USER_SUCCESS } from "../actions/friend";
import { GET_PROFILE_INFO_REQUEST } from "../actions/profile";

interface FriendState {
  suggest_users: UserInfo[] | null;
  my_friends: any | null;
  error_suggest_users: any | null;
}

const initialState: FriendState = {
    suggest_users: null,
    my_friends: null,
    error_suggest_users: null,
};

const friendReducer = (state = initialState, action: SuggestUserActionTypes): FriendState => {
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
    default:
      return state;
  }
};

export default friendReducer;