import { DateLike } from './common.types';
import { FunctionTool } from 'openai/resources/responses/responses';
export interface ConfigurableParameters {
    [parameterName: string]: any;
}
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
    functions?: string[];
    configuredFunctions?: ConfiguredFunction[];
    agentName: string;
    agentAccessToken: string;
    model?: string;
    reasoning: 'low' | 'medium' | 'high';
    createdAt: DateLike;
    updatedAt: DateLike;
}
export interface FunctionToolDisplay extends FunctionTool {
    displayName: string;
    category?: string;
}
export interface CreateInboxData {
    accountId: string;
    name: string;
    description?: string;
    phoneNumber: string;
    initialPrompt: string;
    active: boolean;
    processGroupMessages: boolean;
    agentName: string;
    agentAccessToken: string;
    functions?: string[];
    configuredFunctions?: ConfiguredFunction[];
    model?: string;
    reasoning?: 'low' | 'medium' | 'high';
}
export interface UpdateInboxData {
    name?: string;
    description?: string;
    initialPrompt?: string;
    active?: boolean;
    processGroupMessages?: boolean;
    agentName?: string;
    agentAccessToken?: string;
    functions?: string[];
    configuredFunctions?: ConfiguredFunction[];
    model?: string;
    reasoning?: 'low' | 'medium' | 'high';
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
