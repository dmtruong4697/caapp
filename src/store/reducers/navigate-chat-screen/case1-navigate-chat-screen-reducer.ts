import { createTwoButtonAlert } from "../../../utils/alert";
import { CASE1_NAVIGATE_CHAT_SCREEN_FAILURE, CASE1_NAVIGATE_CHAT_SCREEN_REQUEST, CASE1_NAVIGATE_CHAT_SCREEN_SUCCESS, Case1NavigateChatScreenActionTypes } from "../../actions/navigate-chat-screen/case1-navigate-chat-screen-action";

interface Case1NavigateChatScreenState {
  error: any | null;
}

const initialState: Case1NavigateChatScreenState = {
  error: null,
};

const case1NavigateChatScreenReducer = (state = initialState, action: Case1NavigateChatScreenActionTypes): Case1NavigateChatScreenState => {
  switch (action.type) {
    case CASE1_NAVIGATE_CHAT_SCREEN_REQUEST:
        return {
          ...state,
        };

    case CASE1_NAVIGATE_CHAT_SCREEN_SUCCESS:
      return {
        ...state,
      };

    case CASE1_NAVIGATE_CHAT_SCREEN_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default case1NavigateChatScreenReducer;