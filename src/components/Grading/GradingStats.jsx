import { Card } from '../Common/Card.jsx'

export const GradingStats = () => (
  <div className="grid gap-4 md:grid-cols-3">
    <Card><p className="text-sm font-bold text-slate-500">Chờ chấm</p><p className="mt-2 text-3xl font-black text-orange-600">21</p></Card>
    <Card><p className="text-sm font-bold text-slate-500">Đã chấm tuần này</p><p className="mt-2 text-3xl font-black text-slate-950">68</p></Card>
    <Card><p className="text-sm font-bold text-slate-500">Cần phản hồi</p><p className="mt-2 text-3xl font-black text-slate-950">07</p></Card>
  </div>
)
