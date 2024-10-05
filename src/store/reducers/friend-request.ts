import { GetListFriendRequestReceivedResponce } from "../../models/friend-responce/get-friend-request-received-responce";
import { createTwoButtonAlert } from "../../utils/alert";
import { showSuccessToast } from "../../utils/toast";
import { ACCEPT_FRIEND_REQUEST_FAILURE, ACCEPT_FRIEND_REQUEST_REQUEST, ACCEPT_FRIEND_REQUEST_SUCCESS, CREATE_FRIEND_REQUEST_FAILURE, CREATE_FRIEND_REQUEST_REQUEST, CREATE_FRIEND_REQUEST_SUCCESS, FriendRequestActionTypes, GET_ALL_RECEIVED_REQUEST_FAILURE, GET_ALL_RECEIVED_REQUEST_REQUEST, GET_ALL_RECEIVED_REQUEST_SUCCESS } from "../actions/friend-request";

interface FriendRequestState {
    //create friend request
    error_create_request: any | null;
    success_create_request: any | null;

    //get all received request
    received_requests: GetListFriendRequestReceivedResponce | null;
    error_get_all_received_request: any | null;
    sent_request_list: number[];

    //accept friend request
    error_accept_friend_request: any | null;
    accept_request_list: number[];
}

const initialState: FriendRequestState = {
    // create friend request
    error_create_request: null,
    success_create_request: null,

    // get all received request
    received_requests: null,
    error_get_all_received_request: null,
    sent_request_list: [],

    // accept friend request
    error_accept_friend_request: null,
    accept_request_list: [],
};

const friendRequestReducer = (state = initialState, action: FriendRequestActionTypes): FriendRequestState => {
    switch (action.type) {
        //create friend request
        case CREATE_FRIEND_REQUEST_REQUEST:
            return {
                ...state,
                success_create_request: null,
                error_create_request: null,
            };
        case CREATE_FRIEND_REQUEST_SUCCESS:
            return {
                ...state,
                success_create_request: "success",
                sent_request_list: [...state.sent_request_list, action.payload.user_id],
                error_create_request: null,
            };
        case CREATE_FRIEND_REQUEST_FAILURE:
            createTwoButtonAlert(action.payload.error.error_code, action.payload.error.error_code)
            return {
                ...state,
                success_create_request: null,
                error_create_request: action.payload.error,
            };

        // get all received request
        case GET_ALL_RECEIVED_REQUEST_REQUEST:
            return {
                ...state,
                error_get_all_received_request: null,
            };
        case GET_ALL_RECEIVED_REQUEST_SUCCESS:
            return {
                ...state,
                received_requests: action.payload.requests,
                error_get_all_received_request: null,
            };
        case GET_ALL_RECEIVED_REQUEST_FAILURE:
            return {
                ...state,
                error_get_all_received_request: action.payload.error,
            };
        
        // accept friend request
        case ACCEPT_FRIEND_REQUEST_REQUEST:
            return {
                ...state,
                accept_request_list: [],
                error_accept_friend_request: null,
            };
        case ACCEPT_FRIEND_REQUEST_SUCCESS:
            showSuccessToast("dong y ket ban thanh cong")
            return {
                ...state,
                accept_request_list: [...state.accept_request_list, action.payload.id],
                error_accept_friend_request: null,
            };
        case ACCEPT_FRIEND_REQUEST_FAILURE:
            return {
                ...state,
                error_accept_friend_request: action.payload.error,
            };
        
        default:
            return state;
    }
};

export default friendRequestReducer;