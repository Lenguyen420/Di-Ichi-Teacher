import { ClipboardCheck, MapPin } from 'lucide-react'
import { assignments, dashboardToday, exams, notifications } from '../../datas/portalData.js'
import { Badge } from '../Common/Badge.jsx'
import { Card } from '../Common/Card.jsx'

export const DashboardTasks = () => {
  const priorityItems = [assignments[1], exams[0], exams[2]].filter(Boolean)

  return (
    <div className="space-y-5">
      <Card>
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-lg font-black text-slate-950">Buổi học tiếp theo</h2>
          <Badge>14:00</Badge>
        </div>
        <div className="mt-4 rounded-2xl bg-orange-50 p-4">
          <p className="text-xl font-black text-slate-950">{dashboardToday.nextClass.name}</p>
          <p className="mt-2 text-sm font-semibold text-slate-600">{dashboardToday.nextClass.lesson}</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2 xl:grid-cols-1">
            <span className="inline-flex items-center gap-2">
              <ClipboardCheck size={16} className="text-orange-600" />
              {dashboardToday.nextClass.time}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-orange-600" />
              {dashboardToday.nextClass.room}
            </span>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-black text-slate-950">Ưu tiên chấm hôm nay</h2>
        <div className="mt-4 space-y-3">
          {priorityItems.map((item) => (
            <div key={item.title} className="rounded-xl border border-orange-100 p-3">
              <p className="font-bold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-500">{item.className || item.skill}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h2 className="text-lg font-black text-slate-950">Thông báo mới</h2>
        <div className="mt-4 space-y-3">
          {notifications.filter((item) => !item.read).map((item) => (
            <div key={item.title} className="rounded-xl bg-orange-50 p-3">
              <p className="font-bold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm text-slate-500">{item.message}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
