import { Channel } from "../channel/channel"
import { UserInfo } from "../user-info/user-info";

export type GetFriendChannelInfoResponce = {
    channel: Channel;
    user: UserInfo;
}