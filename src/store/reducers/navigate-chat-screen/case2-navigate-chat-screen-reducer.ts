import { createTwoButtonAlert } from "../../../utils/alert";
import { CASE2_NAVIGATE_CHAT_SCREEN_FAILURE, CASE2_NAVIGATE_CHAT_SCREEN_REQUEST, CASE2_NAVIGATE_CHAT_SCREEN_SUCCESS, Case2NavigateChatScreenActionTypes } from "../../actions/navigate-chat-screen/case2-navigate-chat-screen-action";

interface Case2NavigateChatScreenState {
  success_flg: boolean | null;
  error: any | null;
}

const initialState: Case2NavigateChatScreenState = {
  success_flg: false,
  error: null,
};

const case2NavigateChatScreenReducer = (state = initialState, action: Case2NavigateChatScreenActionTypes): Case2NavigateChatScreenState => {
  switch (action.type) {
    case CASE2_NAVIGATE_CHAT_SCREEN_REQUEST:
        return {
          ...state,
          success_flg: false,
        };

    case CASE2_NAVIGATE_CHAT_SCREEN_SUCCESS:
      return {
        ...state,
        success_flg: action.payload.success_flg,
      };

    case CASE2_NAVIGATE_CHAT_SCREEN_FAILURE:
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

export default case2NavigateChatScreenReducer;