import { DateLike } from './common.types';

export interface Account {
  id: string;
  name: string;
  description?: string;
  openaiKey?: string; // Chave OpenAI específica desta conta
  createdAt: DateLike;
  updatedAt: DateLike;
  owners: string[]; // Array de UIDs do Firebase Authentication ou IDs de usuário
}

export interface Owner {
  id: string;
  email: string;
  name?: string;
  role: 'admin' | 'owner'; // Poderíamos ter mais papéis no futuro
}

// Data Transfer Objects (DTOs) ou tipos para formulários/API payloads

export interface CreateAccountData {
  name: string;
  description?: string;
  // owners array é geralmente gerenciado separadamente ou pelo usuário logado inicialmente
}

export interface UpdateAccountData {
  name?: string;
  description?: string;
  openaiKey?: string; // Permitir atualização da chave OpenAI
  // owners?: string[]; // A atualização de owners pode ser uma operação separada
}

export interface AddOwnerData {
  email: string;
  role: 'admin' | 'owner';
}

export interface RemoveOwnerData {
  ownerId: string;
} 