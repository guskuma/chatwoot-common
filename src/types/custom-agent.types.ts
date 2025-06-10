// Importação do Firebase Timestamp, se você estiver usando tipos do Firebase diretamente.
// Se não, pode ser Date | string ou um tipo DateLike genérico.
import type { Timestamp } from 'firebase/firestore';

// Definição para os parâmetros de uma ferramenta (JSON Schema),
// usando a estrutura mais detalhada que tínhamos no backend.
export interface CommonFunctionParameterProperty {
  type: string;
  description?: string;
  enum?: string[];
  items?: CommonFunctionParameterProperty | { type: string };
}

export interface CommonFunctionParameters {
  type: "object";
  properties: {
    [key: string]: CommonFunctionParameterProperty;
  };
  required?: string[];
  additionalProperties?: boolean;
}

// Definição da ferramenta CustomAgent como uma ferramenta chamável.
export interface CommonCustomAgentToolDefinition {
  parameters: CommonFunctionParameters;
}

// Tipo para a configuração das ferramentas que um CustomAgent pode USAR.
// Esta é a estrutura mais rica do frontend.
export type CommonCustomAgentToolConfigItem =
  | { type: 'custom_agent'; agentId: string; name?: string; /* Para UI */ }
  | { type: 'predefined_function'; functionName: string; name?: string; /* Para UI */ }
  | { type: 'mcp'; mcpServerId: string; mcpToolName: string; name?: string; /* Para UI */ };

// A interface CustomAgent consolidada
export interface CustomAgent {
  id: string; // ID do documento no Firebase

  // Como este CustomAgent aparece para outros LLMs (quando ATUA COMO UMA FERRAMENTA)
  name: string;           // Nome técnico da ferramenta (para APIs/LLM) - ex: 'get_current_date', 'assign_conversation'
  displayName: string;    // Nome amigável para UI - ex: 'Recupera data e hora atual', 'Transferir conversa'
  description: string;    // Descrição (para o LLM chamador)
  toolDefinition?: CommonCustomAgentToolDefinition; // Parâmetros que esta ferramenta aceita

  // Configurações para o comportamento INTERNO deste CustomAgent
  enabled: boolean;
  model: string;            // Modelo LLM que este agente usa internamente
  reasoning?: boolean;      // Indica se o modelo selecionado utiliza capacidades de reasoning
  developerMessage: string; // Prompt do sistema para o LLM interno deste agente
  temperature: number;

  // Ferramentas que este CustomAgent pode CHAMAR internamente
  toolsConfig?: CommonCustomAgentToolConfigItem[];

  // Metadados
  clonedFrom?: {
    customAgentId: string;
    inboxId: string;
    accountId: string;
  };
  createdAt?: Timestamp | Date | string;
  updatedAt?: Timestamp | Date | string;
} 