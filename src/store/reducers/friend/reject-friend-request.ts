import { createTwoButtonAlert } from "../../../utils/alert";
import { VALIDATE_EMAIL_FAILURE, VALIDATE_EMAIL_REQUEST, VALIDATE_EMAIL_SUCCESS, ValidateEmailActionTypes } from "../../actions/auth/validate-email";
import { REJECT_FRIEND_REQUEST_FAILURE, REJECT_FRIEND_REQUEST_REQUEST, REJECT_FRIEND_REQUEST_SUCCESS, RejectFriendRequestActionTypes } from "../../actions/friend/reject-friend-request";

interface RejectFriendRequestState {
  success_flg: boolean | null;
  rejected_requests: number[];
  error: any | null;
}

const initialState: RejectFriendRequestState = {
  success_flg: false,
  rejected_requests: [],
  error: null,
};

const rejectFriendRequestReducer = (state = initialState, action: RejectFriendRequestActionTypes): RejectFriendRequestState => {
  switch (action.type) {
    case REJECT_FRIEND_REQUEST_REQUEST:
      return {
        ...state,
        success_flg: false,
        error: null,
      };
    case REJECT_FRIEND_REQUEST_SUCCESS:
      return {
        ...state,
        success_flg: true,
        rejected_requests: [...state.rejected_requests, action.payload.id],
        error: null,
      };
    case REJECT_FRIEND_REQUEST_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
        success_flg: false,
      };
    default:
      return state;
  }
};

export default rejectFriendRequestReducer;