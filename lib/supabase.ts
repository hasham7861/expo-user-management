import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import config from '../app.config'

const baseUrl = config.supabaseUrl
const baseAnonKey = config.supabaseAnonKey

export const supabase = createClient(baseUrl, baseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})