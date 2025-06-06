import { DateLike } from './common.types';

export type ConversationStatus = 'open' | 'resolved' | 'pending'; // Adicionado 'pending'

export interface Conversation {
  id: string; 
  accountId: string; 
  inboxId: string; 
  senderId: number; // Identificador do cliente final (ex: ID do contato no Chatwoot)
  senderNumber: string; 
  status: ConversationStatus;
  isGroup: boolean; // Indica se a conversa é de um grupo do WhatsApp
  lastResponseId?: string; // Renomeado de lastResponseId para clareza
  lastActivityAt: DateLike; // Para ordenação, pode ser o updatedAt da conversa ou da última mensagem
  createdAt: DateLike;
  updatedAt: DateLike;
  // Campos adicionais que podem ser úteis:
  // agentId?: string; // Se um agente humano específico estiver atribuído
  // unreadCount?: number; // Contagem de mensagens não lidas pelo admin/agente
  // labels?: string[]; // Etiquetas/tags para a conversa
}

// DTOs para criar ou atualizar conversas (se necessário diretamente)
// Geralmente, conversas são criadas pelo backend em resposta a interações.
export interface CreateConversationData {
  accountId: string;
  inboxId: string;
  senderNumber: string;
  senderId: number;
  status?: ConversationStatus;
  isGroup?: boolean; // Indica se a conversa é de um grupo do WhatsApp
  // Outros campos iniciais, como a primeira mensagem, podem ser parte de um processo mais complexo
}

export interface UpdateConversationData {
  status?: ConversationStatus;
  lastResponseId?: string;
  lastActivityAt?: DateLike;
  // agentId?: string | null;
  // unreadCount?: number;
} 