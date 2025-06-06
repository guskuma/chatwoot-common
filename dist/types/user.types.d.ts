/**
 * Represents an authenticated user in the admin application.
 * This is typically derived from Firebase Authentication.
 */
export interface AuthenticatedUser {
    id: string;
    email: string | null;
    name?: string | null;
    avatar?: string | null;
}
