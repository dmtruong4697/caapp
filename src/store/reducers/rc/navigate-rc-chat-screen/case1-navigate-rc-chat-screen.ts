import { createTwoButtonAlert } from "../../../../utils/alert";
import { CASE1_NAVIGATE_RC_CHAT_SCREEN_FAILURE, CASE1_NAVIGATE_RC_CHAT_SCREEN_REQUEST, CASE1_NAVIGATE_RC_CHAT_SCREEN_SUCCESS, Case1NavigateRCChatScreenActionTypes } from "../../../actions/rc/navigate-rc-chat-screen/case1-navigate-rc-chat-screen";

interface Case1NavigateRCChatScreenState {
    success_flg: boolean | null;
    error: any | null;
}

const initialState: Case1NavigateRCChatScreenState = {
    success_flg: false,
    error: null,
};

const case1NavigateRCChatScreenReducer = (state = initialState, action: Case1NavigateRCChatScreenActionTypes): Case1NavigateRCChatScreenState => {
  switch (action.type) {
    case CASE1_NAVIGATE_RC_CHAT_SCREEN_REQUEST:
        return {
          ...state,
          success_flg: false,
        };

    case CASE1_NAVIGATE_RC_CHAT_SCREEN_SUCCESS:
      return {
        ...state,
        success_flg: true,
        error: null,
      };

    case CASE1_NAVIGATE_RC_CHAT_SCREEN_FAILURE:
      createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
      return {
        ...state,
        success_flg: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default case1NavigateRCChatScreenReducer;