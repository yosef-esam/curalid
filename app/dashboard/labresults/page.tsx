import React from 'react'
import { LabResults } from '../_components/SummaryCards'
import { LAB_RESULTS, MEDICATIONS } from '@/app/lib/constants'

function LabResultsPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-6">
         <div className="max-w-4xl mx-auto space-y-6">
           <h1 className="text-2xl font-bold text-slate-900">
             All Lab Results
           </h1>
   
         <LabResults number={LAB_RESULTS.length}/>
         </div>
       </main>
  )
}

export default LabResultsPage