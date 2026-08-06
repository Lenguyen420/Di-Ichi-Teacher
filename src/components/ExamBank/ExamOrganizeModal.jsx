import { PlayCircle, X } from 'lucide-react'
import { examClasses } from '../../datas/examBank.js'
import { Button } from '../Common/Button.jsx'

export const ExamOrganizeModal = ({ isOpen, exam, form, onChange, onClose, onSubmit }) => {
  if (!isOpen) return null

  const selectedClass = examClasses.find((item) => item.name === form.className) || examClasses[0]

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/45 px-4 py-6 backdrop-blur-sm">
      <section className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-orange-100 pb-4">
          <div>
            <p className="text-xs font-black uppercase text-orange-600">Tổ chức kỳ thi</p>
            <h2 className="mt-1 text-2xl font-black text-slate-950">{exam?.title || 'Chọn đề thi'}</h2>
            <p className="mt-1 text-sm text-slate-500">Chọn lớp, học viên, lịch thi và các thiết lập tự động.</p>
          </div>
          <button className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-600 transition hover:bg-orange-100 hover:text-orange-700" type="button" onClick={onClose}>
            <X size={19} />
          </button>
        </div>
        <form className="mt-5 space-y-5" onSubmit={onSubmit}>
          <label className="block">
            <span className="text-sm font-black text-slate-700">Chọn lớp</span>
            <select className="mt-2 h-12 w-full rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={form.className} onChange={(event) => onChange('className', event.target.value)}>
              {examClasses.map((item) => <option key={item.id}>{item.name}</option>)}
            </select>
          </label>

          <div>
            <span className="text-sm font-black text-slate-700">Chọn học viên</span>
            <div className="mt-2 rounded-2xl border border-orange-100 p-3">
              <label className="mb-2 flex items-center gap-3 rounded-xl bg-orange-50 p-3 text-sm font-black text-orange-700">
                <input className="h-4 w-4 accent-orange-600" type="checkbox" checked={form.allStudents} onChange={(event) => onChange('allStudents', event.target.checked)} />
                Toàn bộ lớp
              </label>
              <div className="grid gap-2 sm:grid-cols-2">
                {selectedClass.students.map((student) => (
                  <label key={student} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 text-sm font-bold text-slate-700">
                    <input className="h-4 w-4 accent-orange-600" type="checkbox" disabled={form.allStudents} checked={form.students.includes(student)} onChange={(event) => onChange('students', event.target.checked ? [...form.students, student] : form.students.filter((item) => item !== student))} />
                    {student}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <label className="block">
              <span className="text-sm font-black text-slate-700">Ngày thi</span>
              <input className="mt-2 h-12 w-full rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" type="date" value={form.examDate} onChange={(event) => onChange('examDate', event.target.value)} />
            </label>
            <label className="block">
              <span className="text-sm font-black text-slate-700">Giờ bắt đầu</span>
              <input className="mt-2 h-12 w-full rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" type="time" value={form.startTime} onChange={(event) => onChange('startTime', event.target.value)} />
            </label>
            <label className="block">
              <span className="text-sm font-black text-slate-700">Giờ kết thúc</span>
              <input className="mt-2 h-12 w-full rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" type="time" value={form.endTime} onChange={(event) => onChange('endTime', event.target.value)} />
            </label>
          </div>

          <div className="rounded-2xl border border-orange-100 p-3">
            <p className="mb-2 text-sm font-black text-slate-700">Thiết lập</p>
            <div className="space-y-2">
              <label className="flex items-center gap-3 rounded-xl bg-orange-50 p-3 text-sm font-bold text-slate-700">
                <input className="h-4 w-4 accent-orange-600" type="checkbox" checked={form.autoOpen} onChange={(event) => onChange('autoOpen', event.target.checked)} />
                Tự động mở đề
              </label>
              <label className="flex items-center gap-3 rounded-xl bg-orange-50 p-3 text-sm font-bold text-slate-700">
                <input className="h-4 w-4 accent-orange-600" type="checkbox" checked={form.autoSubmit} onChange={(event) => onChange('autoSubmit', event.target.checked)} />
                Tự động nộp khi hết giờ
              </label>
              <label className="flex items-center gap-3 rounded-xl bg-orange-50 p-3 text-sm font-bold text-slate-700">
                <input className="h-4 w-4 accent-orange-600" type="checkbox" checked={form.allowEarlySubmit} onChange={(event) => onChange('allowEarlySubmit', event.target.checked)} />
                Cho phép nộp sớm
              </label>
            </div>
          </div>

          <Button className="h-12 w-full text-base" type="submit" disabled={!exam}>
            <PlayCircle size={19} />
            Bắt đầu kỳ thi
          </Button>
        </form>
      </section>
    </div>
  )
}
