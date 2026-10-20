'use client'

import { useState } from 'react'
import { updateRegistrationStatus } from './actions'

type Registration = {
  id: number
  created_at: string
  is_approved: boolean
  receipt_sent: boolean
  [key: string]: any 
}

export default function AdminTable({ initialData }: { initialData: Registration[] }) {
  const [registrations, setRegistrations] = useState<Registration[]>(initialData)

  const handleToggle = async (id: number, field: 'is_approved' | 'receipt_sent', currentValue: boolean) => {
    const newValue = !currentValue
    
    // כאן הוספתי את ההגדרות המדויקות כדי להעלים את האדום
    setRegistrations((prev: Registration[]) => 
      prev.map((reg: Registration) => reg.id === id ? { ...reg, [field]: newValue } : reg)
    )

    try {
      await updateRegistrationStatus(id, { [field]: newValue })
    } catch (error) {
      console.error("Failed to update", error)
      
      // וגם כאן הוספתי הגדרות
      setRegistrations((prev: Registration[]) => 
        prev.map((reg: Registration) => reg.id === id ? { ...reg, [field]: currentValue } : reg)
      )
      alert("שגיאה בעדכון הסטטוס. נסה שוב.")
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <table className="w-full text-right" dir="rtl">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="p-4 text-sm font-semibold text-gray-600">מזהה</th>
            <th className="p-4 text-sm font-semibold text-gray-600">תאריך הרשמה</th>
            <th className="p-4 text-sm font-semibold text-gray-600">סטטוס אישור</th>
            <th className="p-4 text-sm font-semibold text-gray-600">קבלה</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {registrations.map((reg: Registration) => (
            <tr key={reg.id} className="hover:bg-gray-50 transition-colors">
              <td className="p-4 text-sm text-gray-900">#{reg.id}</td>
              <td className="p-4 text-sm text-gray-500">
                {new Date(reg.created_at).toLocaleDateString('he-IL')}
              </td>
              
              <td className="p-4">
                <button
                  onClick={() => handleToggle(reg.id, 'is_approved', reg.is_approved)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    reg.is_approved 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {reg.is_approved ? 'אושר' : 'ממתין'}
                </button>
              </td>

              <td className="p-4">
                <button
                  onClick={() => handleToggle(reg.id, 'receipt_sent', reg.receipt_sent)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    reg.receipt_sent 
                      ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {reg.receipt_sent ? 'נשלח' : 'לא נשלח'}
                </button>
              </td>
            </tr>
          ))}
          
          {registrations.length === 0 && (
            <tr>
              <td colSpan={4} className="p-8 text-center text-gray-500">
                אין הרשמות עדיין במערכת.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}