import { Channel } from "../channel/channel"
import { UserInfo } from "../user-info/user-info";

export type GetGroupChannelInfoResponce = {
    channel: Channel;
    users: UserInfo[];
}