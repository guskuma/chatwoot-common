/**
 * Represents an authenticated user in the admin application.
 * This is typically derived from Firebase Authentication.
 */
export interface AuthenticatedUser {
  id: string;        // Firebase UID
  email: string | null; // Email pode ser nulo em alguns casos de Firebase Auth
  name?: string | null;
  avatar?: string | null; // URL da foto de perfil
  // Poderíamos adicionar mais campos se necessário, ex: emailVerified: boolean
} 