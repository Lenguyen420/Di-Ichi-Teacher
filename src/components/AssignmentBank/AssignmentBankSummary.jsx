import { assignments } from '../../datas/portalData.js'
import { Card } from '../Common/Card.jsx'

export const AssignmentBankSummary = () => (
  <div className="grid gap-4 md:grid-cols-3">
    <Card><p className="text-sm font-bold text-slate-500">Tổng bài tập</p><p className="mt-2 text-3xl font-black text-slate-950">{assignments.length}</p></Card>
    <Card><p className="text-sm font-bold text-slate-500">Cần chấm</p><p className="mt-2 text-3xl font-black text-orange-600">18</p></Card>
    <Card><p className="text-sm font-bold text-slate-500">Đang nháp</p><p className="mt-2 text-3xl font-black text-slate-950">01</p></Card>
  </div>
)
