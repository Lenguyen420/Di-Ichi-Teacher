import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { classAttendance } from '../../datas/portalData.js'
import { Card } from '../Common/Card.jsx'

export const DashboardChart = () => (
  <Card>
    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
      <div>
        <h2 className="text-lg font-black text-slate-950">Tỷ lệ chuyên cần của các lớp</h2>
        <p className="mt-1 text-sm text-slate-500">Theo dõi nhanh mức độ đi học của từng lớp hôm nay.</p>
      </div>
      <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-orange-700">Trung bình 92%</span>
    </div>
    <div className="mt-4 h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={classAttendance} layout="vertical" margin={{ left: 18 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#fed7aa" />
          <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
          <YAxis dataKey="className" type="category" width={140} />
          <Tooltip formatter={(value) => [`${value}%`, 'Chuyên cần']} />
          <Bar dataKey="attendance" name="Chuyên cần" fill="#FDBA74" radius={[0, 10, 10, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </Card>
)
