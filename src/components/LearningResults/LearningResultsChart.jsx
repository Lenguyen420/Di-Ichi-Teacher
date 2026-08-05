import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { learningResults } from '../../datas/portalData.js'
import { Card } from '../Common/Card.jsx'

export const LearningResultsChart = () => (
  <Card>
    <h2 className="text-lg font-black text-slate-950">Điểm trung bình theo kỹ năng</h2>
    <div className="mt-4 h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={learningResults}>
          <CartesianGrid strokeDasharray="3 3" stroke="#fed7aa" />
          <XAxis dataKey="skill" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="average" name="Điểm TB" fill="#f97316" radius={[8, 8, 0, 0]} />
          <Bar dataKey="target" name="Mục tiêu" fill="#0ea5e9" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </Card>
)
