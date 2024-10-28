import { createTwoButtonAlert } from "../../utils/alert";
import { CASE2_NAVIGATE_CHAT_SCREEN_FAILURE, CASE2_NAVIGATE_CHAT_SCREEN_REQUEST, CASE2_NAVIGATE_CHAT_SCREEN_SUCCESS, Case2NavigateChatScreenActionTypes } from "../actions/case2-navigate-chat-screen-action";

interface Case2NavigateChatScreenState {
  error: any | null;
}

const initialState: Case2NavigateChatScreenState = {
  error: null,
};

const case2NavigateChatScreenReducer = (state = initialState, action: Case2NavigateChatScreenActionTypes): Case2NavigateChatScreenState => {
  switch (action.type) {
    case CASE2_NAVIGATE_CHAT_SCREEN_REQUEST:
        return {
          ...state,
        };

    case CASE2_NAVIGATE_CHAT_SCREEN_SUCCESS:
      return {
        ...state,
      };

    case CASE2_NAVIGATE_CHAT_SCREEN_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default case2NavigateChatScreenReducer;