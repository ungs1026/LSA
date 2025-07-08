// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// VITE_SUPABASE_URL과 VITE_SUPABASE_ANON_KEY를 실제 값으로 교체해야 합니다.
const supabaseUrl = 'https://wjdggchvnpmodzvnpdvc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZGdnY2h2bnBtb2R6dm5wZHZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNTQzNjQsImV4cCI6MjA2NDkzMDM2NH0.3zFAf2XwJSgKK_kISbt2wnXPJLQuawbeFKPnJntslUM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);