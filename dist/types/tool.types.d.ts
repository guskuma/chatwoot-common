export interface SelectableTool {
    name: string;
    displayName: string;
    description?: string;
    parameters?: any;
    toolType: 'predefined' | 'custom' | 'mcp';
    category?: string;
}
