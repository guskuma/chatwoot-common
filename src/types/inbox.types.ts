import { DateLike } from './common.types';
import { FunctionTool } from 'openai/resources/responses/responses';

// Nova interface para parâmetros configuráveis
export interface ConfigurableParameters {
  [parameterName: string]: any;
}

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

// Nova interface para função configurada (simplificada)
export interface ConfiguredFunction {
  name: string;
  type: 'predefined' | 'custom' | 'mcp';
  parameters?: ConfigurableParameters; // Parâmetros com valores configurados
  // Campos específicos para cada tipo
  agentId?: string; // Para type === 'custom'
  mcpServerId?: string; // Para type === 'mcp'
  mcpToolName?: string; // Para type === 'mcp'
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
  functions?: string[]; // Array de nomes/IDs das funções configuradas - DEPRECATED, usar configuredFunctions
  configuredFunctions?: ConfiguredFunction[]; // Nova estrutura para funções configuradas
  agentName: string;
  agentAccessToken: string;
  model?: string; // Modelo GPT a ser utilizado (gpt-4o-mini, gpt-4o, etc.)
  reasoning: 'low' | 'medium' | 'high'; // Esforço de raciocínio
  createdAt: DateLike;
  updatedAt: DateLike;
}

// Extensão da FunctionTool da OpenAI para incluir displayName e category
export interface FunctionToolDisplay extends FunctionTool {
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
  functions?: string[]; // DEPRECATED
  configuredFunctions?: ConfiguredFunction[]; // Nova estrutura
  model?: string; // Modelo GPT a ser utilizado
  reasoning?: 'low' | 'medium' | 'high';
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
  functions?: string[]; // Permite atualizar a lista de funções - DEPRECATED
  configuredFunctions?: ConfiguredFunction[]; // Nova estrutura
  model?: string; // Permite atualizar o modelo GPT utilizado
  reasoning?: 'low' | 'medium' | 'high';
  id?: string; // Permitir atualização do ID da inbox
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