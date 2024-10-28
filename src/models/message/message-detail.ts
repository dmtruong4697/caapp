import { Media } from "../media/media";
import { UserInfo } from "../user-info/user-info"
import { Message } from "./message";

export type MessageDetail = {
    sender: UserInfo;
    message: Message;
    Media: Media;
}