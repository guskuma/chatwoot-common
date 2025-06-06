import { DateLike } from './common.types';
export interface Inbox {
    id: string;
    accountId: string;
    name: string;
    description?: string;
    initialPrompt: string;
    active?: boolean;
    processGroupMessages: boolean;
    functions?: string[];
    createdAt: DateLike;
    updatedAt: DateLike;
}
export interface FunctionToolParameterProperty {
    type: string;
    description?: string;
    enum?: string[];
}
export interface FunctionToolParameters {
    type: 'object';
    properties: Record<string, FunctionToolParameterProperty>;
    required?: string[];
    additionalProperties?: boolean;
}
export interface FunctionTool {
    type: 'function';
    function: {
        name: string;
        description: string;
        parameters: FunctionToolParameters;
    };
}
export interface CreateInboxData {
    accountId: string;
    name: string;
    description?: string;
    initialPrompt: string;
    active: boolean;
    processGroupMessages: boolean;
    functions?: string[];
}
export interface UpdateInboxData {
    name?: string;
    description?: string;
    initialPrompt?: string;
    active?: boolean;
    processGroupMessages?: boolean;
    functions?: string[];
}
export interface InboxFunctionsResponse {
    configured: FunctionTool[];
    available: FunctionTool[];
    summary: {
        configured_count: number;
        available_count: number;
        configured_names: string[];
    };
}
