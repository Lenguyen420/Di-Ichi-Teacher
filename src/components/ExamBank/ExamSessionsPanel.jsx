import { CalendarClock, PlayCircle } from 'lucide-react'
import { Card } from '../Common/Card.jsx'
import { Badge } from '../Common/Badge.jsx'
import { Button } from '../Common/Button.jsx'

export const ExamSessionsPanel = ({ sessions, selectedExam, onOpenOrganize }) => (
  <div className="space-y-5">
    <Card>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-black uppercase text-orange-600">Tổ chức kỳ thi</p>
          <h2 className="mt-1 text-2xl font-black text-slate-950">{selectedExam?.title || 'Chưa chọn đề thi'}</h2>
          <p className="mt-1 text-sm text-slate-500">Chọn đề từ danh sách rồi bấm Tổ chức thi, hoặc mở popup bằng nút bên cạnh.</p>
        </div>
        <Button className="h-12 px-6 text-base" onClick={() => onOpenOrganize(selectedExam)}>
          <PlayCircle size={19} />
          Tổ chức thi
        </Button>
      </div>
    </Card>

    <Card>
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange-100 text-orange-700">
          <CalendarClock size={18} />
        </span>
        <div>
          <h2 className="text-xl font-black text-slate-950">Kỳ thi đã lên lịch</h2>
          <p className="text-sm text-slate-500">Theo dõi các kỳ thi sắp diễn ra và bài thi đang chấm.</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-orange-50 text-xs uppercase text-orange-700">
            <tr>
              <th className="px-4 py-3 font-black">Kỳ thi</th>
              <th className="px-4 py-3 font-black">Lớp</th>
              <th className="px-4 py-3 font-black">Ngày thi</th>
              <th className="px-4 py-3 font-black">Thời gian</th>
              <th className="px-4 py-3 font-black">Trạng thái</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-orange-50">
            {sessions.map((session) => (
              <tr key={session.id}>
                <td className="px-4 py-3 font-black text-slate-950">{session.title}</td>
                <td className="px-4 py-3 text-slate-600">{session.className}</td>
                <td className="px-4 py-3 text-slate-600">{session.date}</td>
                <td className="px-4 py-3 text-slate-600">{session.time}</td>
                <td className="px-4 py-3"><Badge>{session.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  </div>
)
