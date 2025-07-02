import { SelectableTool } from '../types/tool.types';
export declare const DATE_TIME_FUNCTIONS: SelectableTool[];
export declare const CALENDAR_FUNCTIONS: SelectableTool[];
export declare const CHATWOOT_FUNCTIONS: SelectableTool[];
export declare const PREDEFINED_FUNCTIONS: SelectableTool[];
export declare function getPredefinedFunction(name: string): SelectableTool | undefined;
export declare function getPredefinedFunctionsByCategory(category: string): SelectableTool[];
export declare function getPredefinedFunctionCategories(): string[];
