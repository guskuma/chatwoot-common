import { DateLike } from './common.types';
import { SelectableTool, ConfigurableParameters } from './tool.types';
export interface ModelInfo {
    id: string;
    name: string;
    description: string;
    contextWindow: string;
    speed: 'fast' | 'medium' | 'slow';
    reasoning: 'basic' | 'advanced' | 'expert';
    category: 'flagship' | 'mini' | 'reasoning' | 'turbo';
}
export interface ConfiguredFunction {
    name: string;
    type: 'predefined' | 'custom' | 'mcp';
    parameters?: ConfigurableParameters;
    agentId?: string;
    mcpServerId?: string;
    mcpToolName?: string;
}
export interface Inbox {
    id: string;
    accountId: string;
    name: string;
    description?: string;
    phoneNumber?: string;
    initialPrompt: string;
    active?: boolean;
    processGroupMessages: boolean;
    ignorePreviousMessages?: boolean;
    functions?: ConfiguredFunction[];
    configuredFunctions?: ConfiguredFunction[];
    agentName: string;
    agentAccessToken: string;
    model?: string;
    reasoning: 'low' | 'medium' | 'high';
    createdAt: DateLike;
    updatedAt: DateLike;
    replyDirectly?: boolean;
    routingMode?: 'direct' | 'router';
    individualMessagesInboxId?: string;
    groupMessagesInboxId?: string;
}
export interface FunctionToolDisplay extends SelectableTool {
}
export interface CreateInboxData {
    accountId: string;
    name: string;
    description?: string;
    phoneNumber: string;
    initialPrompt: string;
    active: boolean;
    processGroupMessages: boolean;
    ignorePreviousMessages?: boolean;
    agentName: string;
    agentAccessToken: string;
    functions?: ConfiguredFunction[];
    configuredFunctions?: ConfiguredFunction[];
    configuredParameters?: Record<string, ConfigurableParameters>;
    model?: string;
    reasoning?: 'low' | 'medium' | 'high';
    replyDirectly: boolean;
    routingMode?: 'direct' | 'router';
    individualMessagesInboxId?: string;
    groupMessagesInboxId?: string;
}
export interface UpdateInboxData {
    name?: string;
    description?: string;
    initialPrompt?: string;
    active?: boolean;
    processGroupMessages?: boolean;
    ignorePreviousMessages?: boolean;
    agentName?: string;
    agentAccessToken?: string;
    functions?: ConfiguredFunction[];
    configuredFunctions?: ConfiguredFunction[];
    configuredParameters?: Record<string, ConfigurableParameters>;
    model?: string;
    reasoning?: 'low' | 'medium' | 'high';
    replyDirectly?: boolean;
    id?: string;
    routingMode?: 'direct' | 'router';
    individualMessagesInboxId?: string;
    groupMessagesInboxId?: string;
}
export interface InboxFunctionsResponse {
    configured: SelectableTool[];
    available: SelectableTool[];
    summary: {
        configured_count: number;
        available_count: number;
        configured_names: string[];
    };
}
export interface AvailableModelsResponse {
    success: boolean;
    data: ModelInfo[];
}
export interface ModelDetailsResponse {
    success: boolean;
    data: ModelInfo;
}
