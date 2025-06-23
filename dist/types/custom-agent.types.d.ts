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
export interface CommonToolConfigurableParameters {
    [parameterName: string]: any;
}
export type CommonCustomAgentToolConfigItem = {
    type: 'custom_agent';
    agentId: string;
    name?: string;
    parameters?: CommonToolConfigurableParameters;
} | {
    type: 'predefined_function';
    functionName: string;
    name?: string;
    parameters?: CommonToolConfigurableParameters;
} | {
    type: 'mcp';
    mcpServerId: string;
    mcpToolName: string;
    name?: string;
    parameters?: CommonToolConfigurableParameters;
};
export interface CustomAgent {
    id: string;
    name: string;
    displayName: string;
    description: string;
    toolDefinition?: CommonCustomAgentToolDefinition;
    enabled: boolean;
    model: string;
    reasoning: 'low' | 'medium' | 'high';
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
