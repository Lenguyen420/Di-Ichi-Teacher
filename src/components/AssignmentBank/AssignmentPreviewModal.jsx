import { CalendarDays, Clock3, FileText, Send, Timer, User, X } from 'lucide-react'
import { Badge } from '../Common/Badge.jsx'
import { Button } from '../Common/Button.jsx'

export const AssignmentPreviewModal = ({ assignment, onClose, onEdit, onAssign }) => {
  if (!assignment) return null

  const files = assignment.files || (assignment.file ? assignment.file.split(', ') : [])
  const timeAccess = assignment.timeLimitMode === 'limited'
    ? `${assignment.availableFrom || 'Chưa chọn'} - ${assignment.availableUntil || 'Chưa chọn'}`
    : 'Không giới hạn'

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/45 px-4 py-6 backdrop-blur-sm">
      <section className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-orange-100 pb-4">
          <div>
            <p className="text-xs font-black uppercase text-orange-600">Chi tiết bài tập</p>
            <h2 className="mt-1 text-2xl font-black text-slate-950">{assignment.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">{assignment.description || 'Chưa có mô tả.'}</p>
          </div>
          <button className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-600 transition hover:bg-orange-100 hover:text-orange-700" type="button" onClick={onClose}>
            <X size={19} />
          </button>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-orange-50 p-4">
            <p className="text-xs font-black uppercase text-orange-600">Loại</p>
            <p className="mt-2 font-black text-slate-950">{assignment.type}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-black uppercase text-slate-500">Kỹ năng</p>
            <p className="mt-2 font-black text-slate-950">{assignment.skill}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-black uppercase text-slate-500">Trình độ</p>
            <p className="mt-2 font-black text-slate-950">{assignment.level}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <p className="text-xs font-black uppercase text-slate-500">Trạng thái</p>
            <div className="mt-2"><Badge>{assignment.status}</Badge></div>
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-orange-100 p-4">
            <h3 className="mb-3 text-base font-black text-slate-950">Thông tin thiết lập</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <p className="flex items-center gap-2"><Timer size={17} className="text-orange-600" /> Thời gian làm: <strong>{assignment.duration} phút</strong></p>
              <p className="flex items-center gap-2"><Clock3 size={17} className="text-orange-600" /> Truy cập: <strong>{timeAccess}</strong></p>
              <p className="flex items-center gap-2"><User size={17} className="text-orange-600" /> Người tạo: <strong>{assignment.creator}</strong></p>
              <p className="flex items-center gap-2"><CalendarDays size={17} className="text-orange-600" /> Ngày tạo: <strong>{assignment.createdAt}</strong></p>
            </div>
          </div>
          <div className="rounded-2xl border border-orange-100 p-4">
            <h3 className="mb-3 text-base font-black text-slate-950">Tài liệu đính kèm</h3>
            <div className="space-y-2">
              {files.map((file) => (
                <div key={file} className="flex items-center gap-2 rounded-xl bg-orange-50 px-3 py-2 text-sm font-bold text-slate-700">
                  <FileText size={16} className="text-orange-600" />
                  <span className="truncate">{file}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button variant="secondary" onClick={() => onEdit(assignment)}>Sửa bài tập</Button>
          <Button onClick={() => onAssign(assignment)}><Send size={17} /> Giao bài</Button>
        </div>
      </section>
    </div>
  )
}
