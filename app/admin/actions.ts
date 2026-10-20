'use server'

import { createClient } from '@supabase/supabase-js'
import { revalidatePath } from 'next/cache'

// אתחול הקליינט של סופאבייס במצב ניהול (Admin) עוקף RLS
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

// פונקציה 1: שליפת כל ההרשמות (לצורך הצגה בטבלה)
export async function getRegistrations() {
  const { data, error } = await supabaseAdmin
    .from('registrations')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching registrations:', error)
    return []
  }

  return data
}

// פונקציה 2: עדכון סטטוס של הרשמה ספציפית
export async function updateRegistrationStatus(
  id: number, 
  updates: { is_approved?: boolean; receipt_sent?: boolean }
) {
  const { error } = await supabaseAdmin
    .from('registrations')
    .update(updates)
    .eq('id', id)

  if (error) {
    console.error('Error updating registration:', error)
    throw new Error('Failed to update status')
  }

  // מרענן את המטמון (Cache) של העמוד כדי שהנתונים החדשים יופיעו בריענון הבא
  revalidatePath('/admin')
  return { success: true }
}