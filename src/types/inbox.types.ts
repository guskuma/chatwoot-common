import { DateLike } from './common.types';

// Model information for GPT models
export interface ModelInfo {
  id: string;
  name: string;
  description: string;
  contextWindow: string;
  speed: 'fast' | 'medium' | 'slow';
  reasoning: 'basic' | 'advanced' | 'expert';
  category: 'flagship' | 'mini' | 'reasoning' | 'turbo';
}

export interface Inbox {
  id: string;
  accountId: string;
  name: string;
  description?: string;
  phoneNumber?: string; // Número de telefone no formato +55 41 99999-9999
  initialPrompt: string;
  active?: boolean; // No backend, 'active' é boolean, mas no admin pode ser opcional ao buscar/atualizar parcialmente.
  processGroupMessages: boolean; // Indica se o agente deve processar mensagens de grupos do WhatsApp
  functions?: string[]; // Array de nomes/IDs das funções configuradas
  agentName: string;
  agentAccessToken: string;
  model?: string; // Modelo GPT a ser utilizado (gpt-4o-mini, gpt-4o, etc.)
  reasoning?: boolean; // Indica se o modelo selecionado utiliza capacidades de reasoning
  createdAt: DateLike;
  updatedAt: DateLike;
}

// Tipos relacionados a "Function Tools" que são usados na UI do admin
// Podem ou não ser armazenados diretamente no documento Inbox no Firestore,
// ou podem ser parte de uma coleção separada ou lógica de UI.
// Por agora, vamos mantê-los aqui para referência, mas podem ser movidos para o admin se forem específicos da UI.
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
    // strict?: boolean; // Este campo estava no admin, mas seu propósito não está claro no contexto do backend
  };
}

// Função com displayName e categoria para uso compartilhado (backend, admin, etc)
export interface FunctionToolWithDisplayName extends FunctionTool {
  displayName: string;
  category?: string;
}

// Data Transfer Objects (DTOs)
export interface CreateInboxData {
  accountId: string; // Necessário para saber onde criar o inbox
  name: string;
  description?: string;
  phoneNumber: string; // Número de telefone no formato +55 41 99999-9999 (OBRIGATÓRIO)
  initialPrompt: string;
  active: boolean; // Geralmente, ao criar, definimos explicitamente se está ativo
  processGroupMessages: boolean; // Indica se deve processar mensagens de grupos
  agentName: string;
  agentAccessToken: string;
  functions?: string[];
  model?: string; // Modelo GPT a ser utilizado
  reasoning?: boolean; // Indica se o modelo selecionado utiliza capacidades de reasoning
}

export interface UpdateInboxData {
  name?: string;
  description?: string;
  // phoneNumber não está incluído - não pode ser editado após criação
  initialPrompt?: string;
  active?: boolean;
  processGroupMessages?: boolean; // Permite atualizar a configuração de grupos
  agentName?: string;
  agentAccessToken?: string;
  functions?: string[]; // Permite atualizar a lista de funções
  model?: string; // Permite atualizar o modelo GPT utilizado
  reasoning?: boolean; // Permite atualizar a configuração de reasoning
}

// Resposta da API ou hook para buscar funções de um inbox (como estava no admin)
export interface InboxFunctionsResponse {
  configured: FunctionTool[];
  available: FunctionTool[]; // Estas seriam todas as funções possíveis no sistema
  summary: {
    configured_count: number;
    available_count: number;
    configured_names: string[];
  };
} 