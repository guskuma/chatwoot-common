import { DateLike } from './common.types';
export interface Account {
    id: string;
    name: string;
    description?: string;
    openaiKey?: string;
    createdAt: DateLike;
    updatedAt: DateLike;
    owners: string[];
}
export interface Owner {
    id: string;
    email: string;
    name?: string;
    role: 'admin' | 'owner';
}
export interface CreateAccountData {
    name: string;
    description?: string;
}
export interface UpdateAccountData {
    name?: string;
    description?: string;
    openaiKey?: string;
}
export interface AddOwnerData {
    email: string;
    role: 'admin' | 'owner';
}
export interface RemoveOwnerData {
    ownerId: string;
}
