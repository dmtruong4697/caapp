import { Media } from "../../media/media";
import { RCMessage } from "./rc-message"

export type RCChatHistoryItem = {
    message: RCMessage;
    media: Media[];
}