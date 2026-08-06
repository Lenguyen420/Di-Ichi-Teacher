import { useMemo, useState } from 'react'
import { BarChart3, Eye, Percent, Timer, Trophy } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Card } from '../Common/Card.jsx'

const timeRanges = [
  { label: '7 ngày gần đây', value: '7d', factor: 0.42 },
  { label: '30 ngày gần đây', value: '30d', factor: 1 },
  { label: 'Học kỳ này', value: 'term', factor: 1.75 },
  { label: 'Tất cả thời gian', value: 'all', factor: 2.3 },
]

const statusColors = ['#fed7aa', '#fdba74', '#fb923c', '#f97316', '#ea580c']

const getExamViews = (exam, index, factor) => Math.round(((index + 2) * 96 + exam.duration * 8) * factor)
const getExamCompletion = (exam, index, factor) => Math.min(99, Math.round(48 + index * 6 + factor * 5 + Math.min(exam.duration, 60) / 4))

export const ExamStatsPanel = ({ exams }) => {
  const [timeRange, setTimeRange] = useState('30d')
  const selectedRange = timeRanges.find((item) => item.value === timeRange) || timeRanges[1]

  const examStats = useMemo(() => exams.map((exam, index) => ({
    id: exam.id,
    title: exam.title,
    status: exam.status,
    views: getExamViews(exam, index, selectedRange.factor),
    completionRate: getExamCompletion(exam, index, selectedRange.factor),
  })), [exams, selectedRange.factor])

  const totalViews = examStats.reduce((sum, item) => sum + item.views, 0)
  const averageCompletion = Math.round(examStats.reduce((sum, item) => sum + item.completionRate, 0) / Math.max(examStats.length, 1))
  const topExam = examStats.reduce((top, item) => item.views > top.views ? item : top, examStats[0] || { title: '-', views: 0 })
  const statusData = Object.values(examStats.reduce((result, item) => {
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
              <h2 className="text-xl font-black text-slate-950">Thống kê đề thi</h2>
              <p className="text-sm text-slate-500">Theo dõi lượt truy cập đề, tỉ lệ làm bài và số lượng theo trạng thái.</p>
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
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-100 text-amber-700"><Trophy size={20} /></span>
            <div>
              <p className="text-sm font-bold text-slate-500">Đề được xem nhiều nhất</p>
              <p className="line-clamp-1 text-lg font-black text-slate-950">{topExam.title}</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <div className="mb-4 flex items-center gap-2">
            <Eye size={18} className="text-orange-600" />
            <h3 className="text-lg font-black text-slate-950">Lượt truy cập theo đề thi</h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={examStats}>
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
        <h3 className="mb-4 text-lg font-black text-slate-950">Tỉ lệ làm bài theo từng đề thi</h3>
        <div className="space-y-4">
          {examStats.map((item) => (
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
