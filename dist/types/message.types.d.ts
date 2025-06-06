import { DateLike, FirestoreTimestampData } from './common.types';
export type MessageType = 'text' | 'image' | 'audio' | 'video' | 'document' | 'template' | 'sticker' | 'system';
export type MessageDirection = 'incoming' | 'outgoing';
export type MessageRole = 'user' | 'assistant' | 'system' | 'tool';
export type MessageStatus = 'sent' | 'delivered' | 'read' | 'failed' | 'progress';
export interface MessageSender {
    id: string;
    name?: string;
    avatar?: string;
    isSystemUser?: boolean;
}
export interface MediaAttachment {
    url: string;
    type: 'image' | 'audio' | 'video' | 'document';
    fileName?: string;
    fileSize?: number;
}
export interface ToolCall {
    id: string;
    type: 'function';
    function: {
        name: string;
        arguments: string;
    };
}
export interface ToolResponseMessage {
    tool_call_id: string;
    role: "tool";
    name: string;
    content: string;
}
export interface Message {
    id: number;
    conversationId: number;
    accountId: number;
    inboxId: number;
    content: string | null;
    role: MessageRole;
    message_type?: MessageDirection;
    type?: MessageType;
    status?: MessageStatus;
    attachments?: MediaAttachment[];
    tool_calls?: ToolCall[];
    tool_call_id?: string;
    name?: string;
    sender?: MessageSender;
    createdAt: DateLike;
    updatedAt?: DateLike;
    metadata?: Record<string, any>;
}
export interface CreateMessageData extends Partial<Omit<Message, 'id' | 'createdAt' | 'updatedAt' | 'role' | 'content'>> {
    role: MessageRole;
    content: string | null;
    message_type?: MessageDirection;
    type?: MessageType;
    status?: MessageStatus;
    attachments?: MediaAttachment[];
    tool_calls?: ToolCall[];
    tool_call_id?: string;
    name?: string;
    sender?: MessageSender;
    createdAt?: FirestoreTimestampData;
    metadata?: Record<string, any>;
}
