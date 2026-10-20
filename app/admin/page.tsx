import { getRegistrations } from './actions'
import AdminTable from './AdminTable'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const rawRegistrations = await getRegistrations()
  
  // ניקוי המידע לחלוטין לפני שליחה לטבלה
  const registrations = JSON.parse(JSON.stringify(rawRegistrations || []))

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">לוח ניהול הרשמות</h1>
            <p className="mt-2 text-sm text-gray-600">
              ניהול הרשמות לטיולים
            </p>
          </div>
          <div className="text-sm font-medium text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            סה"כ נרשמים: {registrations.length}
          </div>
        </div>

        <AdminTable initialData={registrations} />
      </div>
    </div>
  )
}