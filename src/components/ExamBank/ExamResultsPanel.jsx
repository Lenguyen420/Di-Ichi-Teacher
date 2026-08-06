import { Trophy } from 'lucide-react'
import { Badge } from '../Common/Badge.jsx'
import { Card } from '../Common/Card.jsx'

export const ExamResultsPanel = ({ results }) => (
  <Card>
    <div className="mb-4 flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange-100 text-orange-700">
        <Trophy size={18} />
      </span>
      <div>
        <h2 className="text-xl font-black text-slate-950">Kết quả thi</h2>
        <p className="text-sm text-slate-500">Theo dõi điểm số và trạng thái chấm bài của từng học viên.</p>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full min-w-[820px] text-left text-sm">
        <thead className="bg-orange-50 text-xs uppercase text-orange-700">
          <tr>
            <th className="px-4 py-3 font-black">Học viên</th>
            <th className="px-4 py-3 font-black">Đề thi</th>
            <th className="px-4 py-3 font-black">Lớp</th>
            <th className="px-4 py-3 font-black">Điểm</th>
            <th className="px-4 py-3 font-black">Trạng thái</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-orange-50">
          {results.map((result) => (
            <tr key={result.id}>
              <td className="px-4 py-3 font-black text-slate-950">{result.student}</td>
              <td className="px-4 py-3 text-slate-600">{result.exam}</td>
              <td className="px-4 py-3 text-slate-600">{result.className}</td>
              <td className="px-4 py-3 font-black text-orange-700">{result.score || '-'}</td>
              <td className="px-4 py-3"><Badge>{result.status}</Badge></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
)
