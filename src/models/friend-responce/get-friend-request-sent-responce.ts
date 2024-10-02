import { UserInfo } from "../user-info/user-info"
import { FriendRequest } from "./friend-request"

export type GetListFriendRequestSentResponceItem = {
    user: UserInfo,
    friend_request: FriendRequest,
}

export type GetListFriendRequestSentResponce = {
    requests: GetListFriendRequestSentResponceItem[],
}