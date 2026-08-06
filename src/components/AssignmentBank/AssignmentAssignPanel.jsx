import { X, Send } from 'lucide-react'
import { assignableClasses } from '../../datas/assignmentBank.js'
import { Button } from '../Common/Button.jsx'

export const AssignmentAssignPanel = ({ isOpen, selectedAssignment, assignForm, onChange, onClose, onSubmit }) => {
  if (!isOpen) return null

  const selectedClass = assignableClasses.find((item) => item.name === assignForm.className) || assignableClasses[0]
  const isInClass = assignForm.mode === 'class'

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/45 px-4 py-6 backdrop-blur-sm">
      <section className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-orange-100 pb-4">
          <div>
            <p className="text-xs font-black uppercase text-orange-600">Giao bài tập</p>
            <h2 className="mt-1 text-2xl font-black text-slate-950">{selectedAssignment?.title || 'Chọn bài tập'}</h2>
            <p className="mt-1 text-sm text-slate-500">Thiết lập lớp, học viên và thời gian nhận bài.</p>
          </div>
          <button className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-600 transition hover:bg-orange-100 hover:text-orange-700" type="button" onClick={onClose}>
            <X size={19} />
          </button>
        </div>

        <form className="mt-5 space-y-5" onSubmit={onSubmit}>
          <label className="block">
            <span className="text-sm font-black text-slate-700">Chọn lớp</span>
            <select className="mt-2 h-12 w-full rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={assignForm.className} onChange={(event) => onChange('className', event.target.value)}>
              {assignableClasses.map((item) => <option key={item.id}>{item.name}</option>)}
            </select>
          </label>

          <div>
            <span className="text-sm font-black text-slate-700">Chọn học viên</span>
            <div className="mt-2 rounded-2xl border border-orange-100 p-3">
              <label className="mb-2 flex items-center gap-3 rounded-xl bg-orange-50 p-3 text-sm font-black text-orange-700">
                <input className="h-4 w-4 accent-orange-600" type="checkbox" checked={assignForm.allStudents} onChange={(event) => onChange('allStudents', event.target.checked)} />
                Toàn bộ lớp
              </label>
              <div className="grid gap-2 sm:grid-cols-2">
                {selectedClass.students.map((student) => (
                  <label key={student} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 text-sm font-bold text-slate-700">
                    <input className="h-4 w-4 accent-orange-600" type="checkbox" disabled={assignForm.allStudents} checked={assignForm.students.includes(student)} onChange={(event) => onChange('students', event.target.checked ? [...assignForm.students, student] : assignForm.students.filter((item) => item !== student))} />
                    {student}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div>
            <span className="text-sm font-black text-slate-700">Hình thức</span>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <label className={`rounded-2xl border p-4 text-sm font-black transition ${isInClass ? 'border-orange-400 bg-orange-50 text-orange-700' : 'border-orange-100 text-slate-600'}`}>
                <input className="mr-2 accent-orange-600" type="radio" name="assignment-mode" checked={isInClass} onChange={() => onChange('mode', 'class')} />
                Làm ngay trên lớp
              </label>
              <label className={`rounded-2xl border p-4 text-sm font-black transition ${!isInClass ? 'border-orange-400 bg-orange-50 text-orange-700' : 'border-orange-100 text-slate-600'}`}>
                <input className="mr-2 accent-orange-600" type="radio" name="assignment-mode" checked={!isInClass} onChange={() => onChange('mode', 'home')} />
                Làm ở nhà
              </label>
            </div>
          </div>

          {isInClass ? (
            <div>
              <label className="block">
                <span className="text-sm font-black text-slate-700">Thời gian làm trên lớp (phút)</span>
                <input className="mt-2 h-12 w-full rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" type="number" min="1" value={assignForm.classDuration} onChange={(event) => onChange('classDuration', event.target.value)} placeholder="Nhập số phút" />
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {[10, 15, 20, 30, 45, 60, 90].map((minute) => (
                  <button
                    key={minute}
                    className={`rounded-full px-3 py-1 text-xs font-black transition ${Number(assignForm.classDuration) === minute ? 'bg-orange-600 text-white' : 'bg-orange-50 text-orange-700 hover:bg-orange-100'}`}
                    type="button"
                    onClick={() => onChange('classDuration', minute)}
                  >
                    {minute} phút
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-black text-slate-700">Deadline</span>
                <input className="mt-2 h-12 w-full rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" type="date" value={assignForm.deadlineDate} onChange={(event) => onChange('deadlineDate', event.target.value)} />
              </label>
              <label className="block">
                <span className="text-sm font-black text-slate-700">Giờ</span>
                <input className="mt-2 h-12 w-full rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" type="time" value={assignForm.deadlineTime} onChange={(event) => onChange('deadlineTime', event.target.value)} />
              </label>
            </div>
          )}

          <Button className="h-12 w-full text-base" type="submit" disabled={!selectedAssignment}>
            <Send size={19} />
            Giao bài
          </Button>
        </form>
      </section>
    </div>
  )
}
