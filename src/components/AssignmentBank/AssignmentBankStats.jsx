import { useMemo, useState } from 'react'
import { Activity, BarChart3, Eye, Percent, Timer } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Card } from '../Common/Card.jsx'

const timeRanges = [
  { label: '7 ngày gần đây', value: '7d', factor: 0.45 },
  { label: '30 ngày gần đây', value: '30d', factor: 1 },
  { label: 'Học kỳ này', value: 'term', factor: 1.8 },
  { label: 'Tất cả thời gian', value: 'all', factor: 2.4 },
]

const statusColors = ['#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c']

const getAssignmentViews = (assignment, index, factor) => Math.round(((index + 1) * 84 + assignment.duration * 9) * factor)
const getAssignmentCompletion = (assignment, index, factor) => Math.min(98, Math.round(52 + ((assignment.maxScore || 10) * 2) + index * 5 + factor * 3))

export const AssignmentBankStats = ({ assignments }) => {
  const [timeRange, setTimeRange] = useState('30d')
  const selectedRange = timeRanges.find((item) => item.value === timeRange) || timeRanges[1]

  const assignmentStats = useMemo(() => assignments.map((assignment, index) => ({
    id: assignment.id,
    title: assignment.title,
    status: assignment.status,
    views: getAssignmentViews(assignment, index, selectedRange.factor),
    completionRate: getAssignmentCompletion(assignment, index, selectedRange.factor),
  })), [assignments, selectedRange.factor])

  const totalViews = assignmentStats.reduce((sum, item) => sum + item.views, 0)
  const averageCompletion = Math.round(assignmentStats.reduce((sum, item) => sum + item.completionRate, 0) / Math.max(assignmentStats.length, 1))
  const topAssignment = assignmentStats.reduce((top, item) => item.views > top.views ? item : top, assignmentStats[0] || { title: '-', views: 0 })
  const statusData = Object.values(assignmentStats.reduce((result, item) => {
    result[item.status] = result[item.status] || { name: item.status, value: 0 }
    result[item.status].value += 1
    return result
  }, {}))

  return (
    <div className="space-y-5">
      <Card>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange-100 text-orange-700">
              <BarChart3 size={19} />
            </span>
            <div>
              <h2 className="text-xl font-black text-slate-950">Thống kê bài tập</h2>
              <p className="text-sm text-slate-500">Theo dõi lượt truy cập, tỉ lệ làm bài và trạng thái bài tập.</p>
            </div>
          </div>
          <select className="h-11 rounded-xl border border-orange-100 px-3 text-sm font-bold text-slate-700 outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={timeRange} onChange={(event) => setTimeRange(event.target.value)}>
            {timeRanges.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </select>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-100 text-orange-700"><Eye size={20} /></span>
            <div>
              <p className="text-sm font-bold text-slate-500">Tổng lượt truy cập</p>
              <p className="text-2xl font-black text-slate-950">{totalViews.toLocaleString('vi-VN')}</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-100 text-emerald-700"><Percent size={20} /></span>
            <div>
              <p className="text-sm font-bold text-slate-500">Tỉ lệ làm bài trung bình</p>
              <p className="text-2xl font-black text-slate-950">{averageCompletion}%</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-100 text-amber-700"><Activity size={20} /></span>
            <div>
              <p className="text-sm font-bold text-slate-500">Bài được xem nhiều nhất</p>
              <p className="line-clamp-1 text-lg font-black text-slate-950">{topAssignment.title}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="mb-4 flex items-center gap-2">
            <Eye size={18} className="text-orange-600" />
            <h3 className="text-lg font-black text-slate-950">Lượt truy cập theo bài tập</h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={assignmentStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffedd5" />
                <XAxis dataKey="title" tick={{ fontSize: 11 }} interval={0} height={70} angle={-15} textAnchor="end" />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="views" name="Lượt truy cập" fill="#fdba74" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="mb-4 flex items-center gap-2">
            <Timer size={18} className="text-orange-600" />
            <h3 className="text-lg font-black text-slate-950">Số lượng theo trạng thái</h3>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={statusData} dataKey="value" nameKey="name" innerRadius={58} outerRadius={92} paddingAngle={3}>
                  {statusData.map((entry, index) => <Cell key={entry.name} fill={statusColors[index % statusColors.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {statusData.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 font-bold text-slate-600"><span className="h-3 w-3 rounded-full" style={{ backgroundColor: statusColors[index % statusColors.length] }} />{item.name}</span>
                <span className="font-black text-slate-950">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="mb-4 text-lg font-black text-slate-950">Tỉ lệ làm bài theo từng bài tập</h3>
        <div className="space-y-4">
          {assignmentStats.map((item) => (
            <div key={item.id}>
              <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                <span className="line-clamp-1 font-black text-slate-700">{item.title}</span>
                <span className="font-black text-orange-700">{item.completionRate}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-orange-50">
                <div className="h-full rounded-full bg-orange-300" style={{ width: `${item.completionRate}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
