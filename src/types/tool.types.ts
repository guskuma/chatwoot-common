export interface SelectableTool {
  name: string;               // identificador único (id)
  displayName: string;        // nome amigável para UI
  description?: string;
  parameters?: any;           // JSON-Schema dos parâmetros (quando existir)
  toolType: 'predefined' | 'custom' | 'mcp';
  category?: string;          // Categoria amigável (ex: "Chatwoot", "Google Calendar")
  strict?: boolean;           // Validação strict do OpenAI (opcional, padrão para funções pré-definidas)
} 

// Removido FunctionTool - usando apenas SelectableTool para unificar

// Parâmetros configuráveis para funções
export interface ConfigurableParameters {
  [key: string]: any;
} 