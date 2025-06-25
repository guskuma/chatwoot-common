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
    id: string;
    chatwootAccountData: ChatwootAccountResponse;
    name: string;
    displayName: string;
    email: string;
    description?: string;
    adminUser?: {
        id: number;
        email: string;
        name: string;
    };
    generatedPassword?: string;
}
