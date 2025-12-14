import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './info';

// New Supabase project configuration
const supabaseUrl = `https://${projectId}.supabase.co`;

// Create Supabase client with new project credentials
export const supabase = createClient(supabaseUrl, publicAnonKey);

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar_url?: string;
  created_at: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  session: any;
}
