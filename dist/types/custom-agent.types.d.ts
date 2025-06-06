import type { Timestamp } from 'firebase/firestore';
export interface CommonFunctionParameterProperty {
    type: string;
    description?: string;
    enum?: string[];
    items?: CommonFunctionParameterProperty | {
        type: string;
    };
}
export interface CommonFunctionParameters {
    type: "object";
    properties: {
        [key: string]: CommonFunctionParameterProperty;
    };
    required?: string[];
    additionalProperties?: boolean;
}
export interface CommonCustomAgentToolDefinition {
    parameters: CommonFunctionParameters;
}
export type CommonCustomAgentToolConfigItem = {
    type: 'custom_agent';
    agentId: string;
    name?: string;
} | {
    type: 'predefined_function';
    functionName: string;
    name?: string;
} | {
    type: 'mcp';
    mcpServerId: string;
    mcpToolName: string;
    name?: string;
};
export interface CustomAgent {
    id: string;
    name: string;
    displayName: string;
    description: string;
    toolDefinition?: CommonCustomAgentToolDefinition;
    enabled: boolean;
    model: string;
    developerMessage: string;
    temperature: number;
    toolsConfig?: CommonCustomAgentToolConfigItem[];
    clonedFrom?: {
        customAgentId: string;
        inboxId: string;
        accountId: string;
    };
    createdAt?: Timestamp | Date | string;
    updatedAt?: Timestamp | Date | string;
}
