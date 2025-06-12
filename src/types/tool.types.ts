export interface SelectableTool {
  name: string;               // identificador único (id)
  displayName: string;        // nome amigável para UI
  description?: string;
  parameters?: any;           // JSON-Schema dos parâmetros (quando existir)
  toolType: 'predefined' | 'custom' | 'mcp';
  category?: string;          // Categoria amigável (ex: "Chatwoot", "Google Calendar")
} 