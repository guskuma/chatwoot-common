import { DateLike } from './common.types';
import { SelectableTool, ConfigurableParameters } from './tool.types';

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
  functions?: ConfiguredFunction[]; // Array de funções configuradas
  configuredFunctions?: ConfiguredFunction[]; // Nova estrutura
  agentName: string;
  agentAccessToken: string;
  model?: string; // Modelo GPT a ser utilizado (gpt-4o-mini, gpt-4o, etc.)
  reasoning: 'low' | 'medium' | 'high'; // Esforço de raciocínio
  createdAt: DateLike;
  updatedAt: DateLike;
}

// Extensão da SelectableTool para incluir campos adicionais se necessário
export interface FunctionToolDisplay extends SelectableTool {
  // Já inclui displayName e category
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
  functions?: ConfiguredFunction[]; // Array de funções configuradas
  configuredFunctions?: ConfiguredFunction[]; // Nova estrutura
  configuredParameters?: Record<string, ConfigurableParameters>; // Parâmetros configurados por função
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
  functions?: ConfiguredFunction[]; // Array de funções configuradas
  configuredFunctions?: ConfiguredFunction[]; // Nova estrutura
  configuredParameters?: Record<string, ConfigurableParameters>; // Parâmetros configurados por função
  model?: string; // Permite atualizar o modelo GPT utilizado
  reasoning?: 'low' | 'medium' | 'high';
  id?: string; // Permitir atualização do ID da inbox
}

// Resposta da API ou hook para buscar funções de um inbox (como estava no admin)
export interface InboxFunctionsResponse {
  configured: SelectableTool[];
  available: SelectableTool[]; // Estas seriam todas as funções possíveis no sistema
  summary: {
    configured_count: number;
    available_count: number;
    configured_names: string[];
  };
}

// Respostas da API para modelos
export interface AvailableModelsResponse {
  success: boolean;
  data: ModelInfo[];
}

export interface ModelDetailsResponse {
  success: boolean;
  data: ModelInfo;
} 