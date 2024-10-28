export type Message = {
    id: number;
    sender_id: number;
    content: string;
    create_at: Date;
    last_update: Date;
    channel_id: number;
    is_edited: boolean;
    status: string;
}