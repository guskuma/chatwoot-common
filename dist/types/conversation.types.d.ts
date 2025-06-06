import { DateLike } from './common.types';
export type ConversationStatus = 'open' | 'resolved' | 'pending';
export interface Conversation {
    id: string;
    accountId: string;
    inboxId: string;
    senderId: number;
    senderNumber: string;
    status: ConversationStatus;
    isGroup: boolean;
    lastResponseId?: string;
    lastActivityAt: DateLike;
    createdAt: DateLike;
    updatedAt: DateLike;
}
export interface CreateConversationData {
    accountId: string;
    inboxId: string;
    senderNumber: string;
    senderId: number;
    status?: ConversationStatus;
    isGroup?: boolean;
}
export interface UpdateConversationData {
    status?: ConversationStatus;
    lastResponseId?: string;
    lastActivityAt?: DateLike;
}
