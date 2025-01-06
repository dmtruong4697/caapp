import { GetListFriendRequestReceivedResponce } from "../../../models/friend-responce/get-friend-request-received-responce";

//create friend request
export const CREATE_FRIEND_REQUEST_REQUEST = "CREATE_FRIEND_REQUEST_REQUEST";
export const CREATE_FRIEND_REQUEST_SUCCESS = "CREATE_FRIEND_REQUEST_SUCCESS";
export const CREATE_FRIEND_REQUEST_FAILURE = "CREATE_FRIEND_REQUEST_FAILURE";
//get all received request
export const GET_ALL_RECEIVED_REQUEST_REQUEST = "GET_ALL_RECEIVED_REQUEST_REQUEST";
export const GET_ALL_RECEIVED_REQUEST_SUCCESS = "GET_ALL_RECEIVED_REQUEST_SUCCESS";
export const GET_ALL_RECEIVED_REQUEST_FAILURE = "GET_ALL_RECEIVED_REQUEST_FAILURE";
//accept friend request
export const ACCEPT_FRIEND_REQUEST_REQUEST = "ACCEPT_FRIEND_REQUEST_REQUEST";
export const ACCEPT_FRIEND_REQUEST_SUCCESS = "ACCEPT_FRIEND_REQUEST_SUCCESS";
export const ACCEPT_FRIEND_REQUEST_FAILURE = "ACCEPT_FRIEND_REQUEST_FAILURE";
//reject friend request
// export const REJECT_FRIEND_REQUEST_REQUEST = 'REJECT_FRIEND_REQUEST_REQUEST';
// export const REJECT_FRIEND_REQUEST_SUCCESS = 'REJECT_FRIEND_REQUEST_SUCCESS';
// export const REJECT_FRIEND_REQUEST_FAILURE = 'REJECT_FRIEND_REQUEST_FAILURE';

//create friend request
interface CreateFriendRequestRequestAction {
    type: typeof CREATE_FRIEND_REQUEST_REQUEST;
    payload: {
        user_id: number,
        [key: string]: any;
    };
}
interface CreateFriendRequestSuccessAction {
    type: typeof CREATE_FRIEND_REQUEST_SUCCESS;
    payload: {
        user_id: number,
        [key: string]: any;
    };
}
interface CreateFriendRequestFailureAction {
    type: typeof CREATE_FRIEND_REQUEST_FAILURE;
    payload: {
        error: any,
        [key: string]: any;
    };
}

//get all received request
interface GetAllReceivedRequestRequestAction {
    type: typeof GET_ALL_RECEIVED_REQUEST_REQUEST;
    payload: {
        [key: string]: any;
    };
}
interface GetAllReceivedRequestSuccessAction {
    type: typeof GET_ALL_RECEIVED_REQUEST_SUCCESS;
    payload: {
        requests: GetListFriendRequestReceivedResponce;
        [key: string]: any;
    };
}
interface GetAllReceivedRequestFailureAction {
    type: typeof GET_ALL_RECEIVED_REQUEST_FAILURE;
    payload: {
        error: any,
        [key: string]: any;
    };
}

//get all received request
interface AcceptFriendRequestRequestAction {
    type: typeof GET_ALL_RECEIVED_REQUEST_REQUEST;
    payload: {
        id: number;
        [key: string]: any;
    };
}
interface AcceptFriendRequestSuccessAction {
    type: typeof GET_ALL_RECEIVED_REQUEST_SUCCESS;
    payload: {
        id: number;
        [key: string]: any;
    };
}
interface AcceptFriendRequestFailureAction {
    type: typeof GET_ALL_RECEIVED_REQUEST_FAILURE;
    payload: {
        error: any,
        [key: string]: any;
    };
}

// //reject friend request
// interface RejectFriendRequestRequestAction {
//   type: typeof REJECT_FRIEND_REQUEST_REQUEST;
//   payload: {
//     id: number;
//     [key: string]: any;
//   };
// }

// interface RejectFriendRequestSuccessAction {
//   type: typeof REJECT_FRIEND_REQUEST_SUCCESS;
//   payload: {
//     id: number;
//     [key: string]: any;
//   };
// }

// interface RejectFriendRequestFailureAction {
//   type: typeof REJECT_FRIEND_REQUEST_FAILURE;
//   payload: {
//     error: any;
//     [key: string]: any;
//   };
// }

export type FriendRequestActionTypes = 
    | AcceptFriendRequestRequestAction
    | AcceptFriendRequestSuccessAction
    | AcceptFriendRequestFailureAction

    | CreateFriendRequestRequestAction
    | CreateFriendRequestSuccessAction
    | CreateFriendRequestFailureAction
    
    | GetAllReceivedRequestRequestAction
    | GetAllReceivedRequestSuccessAction
    | GetAllReceivedRequestFailureAction

    // | RejectFriendRequestRequestAction
    // | RejectFriendRequestSuccessAction
    // | RejectFriendRequestFailureAction;

// create friend request
export const createFriendRequestRequest = (user_id: number) => ({
    type: CREATE_FRIEND_REQUEST_REQUEST,
    payload: {user_id}
});
export const createFriendRequestSuccess = (user_id: number) => ({
    type: CREATE_FRIEND_REQUEST_SUCCESS,
    payload: {user_id}
});
export const createFriendRequestFailure = (error: string) => ({
    type: CREATE_FRIEND_REQUEST_FAILURE,
    payload: {error}
});

// get all received request
export const getAllReceivedRequestRequest = () => ({
    type: GET_ALL_RECEIVED_REQUEST_REQUEST,
    payload: {}
});
export const getAllReceivedRequestSuccess = (requests: GetListFriendRequestReceivedResponce) => ({
    type: GET_ALL_RECEIVED_REQUEST_SUCCESS,
    payload: {requests}
});
export const getAllReceivedRequestFailure = (error: string) => ({
    type: GET_ALL_RECEIVED_REQUEST_FAILURE,
    payload: {error}
});

// accept friend request
export const acceptFriendRequestRequest = (id: number) => ({
    type: ACCEPT_FRIEND_REQUEST_REQUEST,
    payload: {id}
});
export const acceptFriendRequestSuccess = (id: number) => ({
    type: ACCEPT_FRIEND_REQUEST_SUCCESS,
    payload: {id}
});
export const acceptFriendRequestFailure = (error: string) => ({
    type: ACCEPT_FRIEND_REQUEST_FAILURE,
    payload: {error}
});

// reject friend request
// export const rejectFriendRequestRequest = (id: number) => ({
//   type: REJECT_FRIEND_REQUEST_REQUEST,
//   payload: { id }
// });

// export const rejectFriendRequestSuccess = (id: number) => ({
//   type: REJECT_FRIEND_REQUEST_SUCCESS,
//   payload: { id }
// });

// export const rejectFriendRequestFailure = (error: string) => ({
//   type: REJECT_FRIEND_REQUEST_FAILURE,
//   payload: { error }
// });