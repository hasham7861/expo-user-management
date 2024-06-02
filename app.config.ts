

interface ConfigKeys {
    supabaseUrl: string;
    supabaseAnonKey: string;
}

const {
    EXPO_PUBLIC_SUPABASE_URL,
    EXPO_PUBLIC_SUPABASE_ANON_KEY 
} = process.env;

if (!EXPO_PUBLIC_SUPABASE_URL || !EXPO_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Missing environment variables');
}

export default {
    supabaseUrl: EXPO_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: EXPO_PUBLIC_SUPABASE_ANON_KEY,
    // other env variables...
} as ConfigKeys;