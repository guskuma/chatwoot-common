/**
 * Tipos específicos para integração com a Platform API do Chatwoot
 */

/**
 * Dados para criar uma account via Platform API
 */
export interface CreateChatwootAccountData {
  name: string;
  displayName: string;
  email: string;
  description?: string;
}

/**
 * Resposta da criação de account no Chatwoot
 */
export interface ChatwootAccountResponse {
  id: number;
  name: string;
  locale?: string;
  domain?: string;
  support_email?: string;
  status?: 'active' | 'suspended';
  limits?: Record<string, any>;
  custom_attributes?: Record<string, any>;
}

/**
 * Dados completos retornados após criação com Chatwoot
 */
export interface CreateAccountWithChatwootResponse {
  id: string;             // ID da account no Chatwoot (será usado como document ID)
  chatwootAccountData: ChatwootAccountResponse;
  // Dados mapeados para usar no frontend
  name: string;           // nome da conta (campo "Nome da Conta")
  displayName: string;    // nome de exibição (campo "Nome de Exibição")
  email: string;          // support_email do Chatwoot
  description?: string;
  // Dados do usuário administrador criado
  adminUser?: {
    id: number;
    email: string;
    name: string;
  };
  // Senha gerada (apenas para informação, não será armazenada)
  generatedPassword?: string;
} 