import { DateLike, FirestoreTimestampData, FirestoreWriteTimestamp } from './common.types';

export type MessageType = 'text' | 'image' | 'audio' | 'video' | 'document' | 'template' | 'sticker' | 'system';
export type MessageDirection = 'incoming' | 'outgoing'; // Alinhado com Chatwoot
export type MessageRole = 'user' | 'assistant' | 'system' | 'tool'; // Alinhado com OpenAI
export type MessageStatus = 'sent' | 'delivered' | 'read' | 'failed' | 'progress'; // Status da mensagem no Chatwoot

export interface MessageSender {
  id: string; // Pode ser o customerId, userId (Firebase UID), ou 'system'
  name?: string;
  avatar?: string;
  // Se for um agente/usuário do sistema, pode ter mais detalhes
  isSystemUser?: boolean;
}

export interface MediaAttachment {
  url: string;
  type: 'image' | 'audio' | 'video' | 'document';
  fileName?: string;
  fileSize?: number;
}

export interface ToolCall {
  id: string; // ID da chamada da ferramenta, para associar com a resposta da ferramenta
  type: 'function'; // Atualmente, apenas 'function' é suportado pela OpenAI
  function: {
    name: string;
    arguments: string; // Argumentos da função como uma string JSON
  };
}

export interface ToolResponseMessage {
  tool_call_id: string; // ID da ToolCall original
  role: "tool";
  name: string; // Nome da função que foi chamada
  content: string; // Resultado da execução da ferramenta (string, pode ser JSON)
}

export interface Message {
  id: number; 
  conversationId: number;
  accountId: number;
  inboxId: number;

  content: string | null; // Conteúdo principal da mensagem, pode ser nulo se for apenas uma chamada de ferramenta
  role: MessageRole; // user, assistant, system, tool

  // Campos mantidos para possível alinhamento/compatibilidade com Chatwoot (message_type)
  // e tipo de mídia (type)
  message_type?: MessageDirection; // incoming, outgoing (para o Chatwoot)
  type?: MessageType; // text, image, etc. (para o Chatwoot)
  status?: MessageStatus; // Status da mensagem (sent, delivered, read, etc.)

  attachments?: MediaAttachment[]; // Para mensagens com mídias
  
  // Campos para OpenAI Function Calling / Tool Usage
  tool_calls?: ToolCall[]; // Se role for 'assistant' e estiver chamando ferramentas
  tool_call_id?: string; // Se role for 'tool', este é o ID da tool_call original que esta mensagem está respondendo
  // Se role for 'tool', o 'name' da função pode estar aqui também, ou dentro de um objeto 'tool_response'
  name?: string; // Usado se role for 'tool', para o nome da função que foi chamada

  sender?: MessageSender; // Informações sobre quem enviou (pode ser redundante se 'role' já define)
  createdAt: DateLike; // Firestore Timestamp ou Date
  updatedAt?: DateLike; // Para edições de mensagens, se aplicável

  // Metadados adicionais
  metadata?: Record<string, any>;
}

// DTOs para criar mensagens
// Geralmente, as mensagens são criadas pelo backend ou diretamente no Firestore
// a partir de eventos do Chatwoot ou da UI do admin.

export interface CreateMessageData extends Partial<Omit<Message, 'id' | 'createdAt' | 'updatedAt' | 'role' | 'content'>> {
  // Campos obrigatórios ao criar uma mensagem via API/direto
  role: MessageRole;
  content: string | null; // Conteúdo da mensagem

  // Campos opcionais ao criar
  message_type?: MessageDirection;
  type?: MessageType;
  status?: MessageStatus;
  attachments?: MediaAttachment[];
  tool_calls?: ToolCall[];
  tool_call_id?: string;
  name?: string; // Se role for 'tool'
  sender?: MessageSender;
  createdAt?: FirestoreTimestampData; // Changed from FirestoreTimestamp
  metadata?: Record<string, any>;
} 