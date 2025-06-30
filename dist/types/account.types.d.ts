import { DateLike } from './common.types';
export interface Account {
    id: string;
    name: string;
    displayName: string;
    email: string;
    description?: string;
    openaiKey?: string;
    pwd?: string;
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
    displayName: string;
    email: string;
    description?: string;
}
export interface UpdateAccountData {
    name?: string;
    displayName?: string;
    description?: string;
    openaiKey?: string;
    id?: string;
}
export interface AddOwnerData {
    email: string;
    role: 'admin' | 'owner';
}
export interface RemoveOwnerData {
    ownerId: string;
}
