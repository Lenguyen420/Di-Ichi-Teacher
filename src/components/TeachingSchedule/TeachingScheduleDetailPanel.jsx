import { Download, Eye, FileText, PlayCircle, UsersRound } from 'lucide-react'
import { toast } from 'sonner'
import { scheduleDocuments } from '../../datas/scheduleDocuments.js'
import { Badge } from '../Common/Badge.jsx'
import { Button } from '../Common/Button.jsx'
import { Card } from '../Common/Card.jsx'

export const TeachingScheduleDetailPanel = ({ schedule }) => {
  const documents = scheduleDocuments[schedule.id] || []

  const handleStartClass = () => {
    toast.success('Bắt đầu lớp học', {
      description: `${schedule.className} đã sẵn sàng để vào lớp.`,
    })
  }

  const handlePreview = (document) => {
    if (!document.previewable) {
      toast.info('Tài liệu này không hỗ trợ xem trước trực tiếp', {
        description: 'Bạn có thể tải file về để mở bằng ứng dụng phù hợp.',
      })
      return
    }

    window.open(document.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card className="xl:sticky xl:top-24">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-black text-orange-600">Chi tiết buổi học</p>
          <h2 className="mt-1 text-2xl font-black text-slate-950">{schedule.className}</h2>
          <p className="mt-1 text-sm font-semibold text-slate-500">{schedule.level}</p>
        </div>
        <Badge>{schedule.status}</Badge>
      </div>

      <div className="mt-5 grid gap-3 rounded-2xl bg-orange-50 p-4 text-sm font-bold text-slate-700">
        <p>Thời gian: <span className="text-slate-950">{schedule.time}</span></p>
        <p>Phòng học: <span className="text-slate-950">{schedule.room}</span></p>
        <p>Ghi chú: <span className="text-slate-950">{schedule.teacherNote}</span></p>
      </div>

      <div className="mt-5">
        <h3 className="text-base font-black text-slate-950">Giáo trình buổi học</h3>
        <div className="mt-3 rounded-2xl border border-orange-100 p-4">
          <p className="font-black text-slate-900">{schedule.curriculum.title}</p>
          <div className="mt-4 space-y-3">
            <div>
              <p className="text-xs font-black uppercase tracking-wide text-slate-400">Mục tiêu</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {schedule.curriculum.objectives.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wide text-slate-400">Tài liệu gợi ý</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {schedule.curriculum.materials.map((item) => (
                  <Badge key={item} tone="amber">{item}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-base font-black text-slate-950">Tài liệu đính kèm</h3>
        <div className="mt-3 space-y-3">
          {documents.map((document) => (
            <div key={document.id} className="rounded-2xl border border-orange-100 bg-white p-3 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-orange-50 text-orange-600">
                  <FileText size={19} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-black text-slate-900">{document.title}</p>
                    <Badge tone="slate">{document.type}</Badge>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Button className="min-h-9 px-3" variant="secondary" onClick={() => handlePreview(document)}>
                      <Eye size={16} />
                      Xem trước
                    </Button>
                    <a
                      className="inline-flex min-h-9 items-center justify-center gap-2 rounded-xl bg-orange-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
                      href={document.url}
                      download
                    >
                      <Download size={16} />
                      Tải về
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-black text-slate-950">Danh sách học viên</h3>
          <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2.5 py-1 text-xs font-black text-orange-700">
            <UsersRound size={14} />
            {schedule.students.length}
          </span>
        </div>
        <div className="mt-3 space-y-2">
          {schedule.students.map((student) => (
            <div key={student.name} className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2 text-sm">
              <span className="font-bold text-slate-800">{student.name}</span>
              <Badge tone={student.status === 'Có mặt' ? 'green' : 'slate'}>{student.status}</Badge>
            </div>
          ))}
        </div>
      </div>

      <Button className="mt-5 w-full min-h-12 text-base" onClick={handleStartClass}>
        <PlayCircle size={20} />
        Bắt đầu lớp học
      </Button>
    </Card>
  )
}
