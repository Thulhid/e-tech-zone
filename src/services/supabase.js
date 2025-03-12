import { createClient } from '@supabase/supabase-js';

export const supabaseURL = 'https://mtkglnhcxeurqeedpgll.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10a2dsbmhjeGV1cnFlZWRwZ2xsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzMzQzNzQsImV4cCI6MjA1NjkxMDM3NH0.BV8V7znYQrOiPg2aqkbjTRKhUNZe366kzfl7fgTEzqU';

const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;
