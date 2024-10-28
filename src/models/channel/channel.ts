export type Channel = {
    id: number;
    name: string;
    creator_id: number;
    create_at: Date;
    invite_code: string;
    last_message_id: number;
    channel_image: string;
    type: string;
    is_allow_invite_code: boolean;
}