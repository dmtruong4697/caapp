import { UserInfo } from "../user-info/user-info"
import { FriendRequest } from "./friend-request"

export type GetListFriendRequestReceivedResponceItem = {
    user: UserInfo,
    friend_request: FriendRequest,
}

export type GetListFriendRequestReceivedResponce = {
    requests: GetListFriendRequestReceivedResponceItem[],
}