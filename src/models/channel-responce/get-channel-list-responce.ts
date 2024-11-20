import { Channel } from "../channel/channel";
import { Message } from "../message/message";
import { UserInfo } from "../user-info/user-info";

export type GetChannelListResponceItem = {
    channel: Channel;
    users: UserInfo[];
    last_message: Message;
    last_message_sender: UserInfo;
}

export type GetChannelListResponce = {
    channels: GetChannelListResponceItem[];
    // is_last_page: boolean;
}