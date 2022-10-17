import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://fwikjqgmaisqizeqbaji.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3aWtqcWdtYWlzcWl6ZXFiYWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMjkxMjIsImV4cCI6MTk4MTYwNTEyMn0.v0LCLpTObviIdT8vEMfxfTOjQeZOaaaC7MMXdR7ib_o"
const supabase =  createClient(supabaseUrl,supabaseKey)

export async function hämtaData() {
  const { data, error } = await supabase
  .from('kvitton')
  .select()

  return data
}