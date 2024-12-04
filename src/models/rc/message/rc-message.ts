export type RCMessage = {
    id: number;
    sender_id: number;
    content: string;
    create_at: Date;
    last_update: Date;
    channel_id: number;
    is_edited: boolean;
    status: string;
    type: string;
}

// type:
// 0: message
// 1: user join channel
// 2: user leave channel
// 3: owner delete user from channel
// 4: channel name change
// 5: channel image change