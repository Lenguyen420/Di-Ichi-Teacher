import { useMemo, useState } from 'react'
import { QrCode, UserCheck } from 'lucide-react'
import { Badge } from '../Common/Badge.jsx'
import { Button } from '../Common/Button.jsx'
import { Card } from '../Common/Card.jsx'

const attendanceOptions = ['Có mặt', 'Muộn', 'Nghỉ phép', 'Vắng']

const toneByStatus = {
  'Có mặt': 'green',
  'Muộn': 'amber',
  'Nghỉ phép': 'orange',
  'Vắng': 'rose',
}

export const MyClassesAttendance = ({ selectedClass }) => {
  const initialAttendance = useMemo(
    () => Object.fromEntries(selectedClass.students.map((student) => [student.id, student.attendanceStatus])),
    [selectedClass],
  )
  const [attendance, setAttendance] = useState(initialAttendance)

  const handleMark = (studentId, status) => {
    setAttendance((current) => ({ ...current, [studentId]: status }))
  }

  return (
    <div className="grid gap-5 xl:grid-cols-[320px_1fr]">
      <Card>
        <div className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-100 text-orange-700">
            <QrCode size={24} />
          </span>
          <div>
            <h3 className="text-lg font-black text-slate-950">Quét QR điểm danh</h3>
            <p className="text-sm text-slate-500">Cho học viên quét mã khi vào lớp.</p>
          </div>
        </div>
        <div className="mx-auto mt-5 grid h-48 w-48 grid-cols-6 gap-1 rounded-3xl bg-white p-4 ring-1 ring-orange-100">
          {Array.from({ length: 36 }).map((_, index) => (
            <span key={index} className={`rounded-sm ${[0, 1, 5, 6, 7, 11, 24, 25, 30, 31, 35].includes(index) ? 'bg-slate-950' : index % 3 === 0 ? 'bg-orange-500' : 'bg-orange-100'}`} />
          ))}
        </div>
        <Button className="mt-5 w-full" variant="secondary">
          <QrCode size={18} />
          Hiển thị QR toàn màn hình
        </Button>
      </Card>

      <Card>
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-black text-slate-950">Điểm danh thủ công</h3>
            <p className="text-sm text-slate-500">Đánh dấu trạng thái từng học viên.</p>
          </div>
          <Badge>{selectedClass.students.length} học viên</Badge>
        </div>
        <div className="mt-4 space-y-3">
          {selectedClass.students.map((student) => (
            <div key={student.id} className="rounded-2xl border border-orange-100 p-3">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                  <img className="h-11 w-11 rounded-2xl object-cover" src={student.avatar} alt={student.name} />
                  <div>
                    <p className="font-black text-slate-900">{student.name}</p>
                    <p className="text-sm text-slate-500">
                      Hiện tại: <Badge tone={toneByStatus[attendance[student.id]]}>{attendance[student.id]}</Badge>
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {attendanceOptions.map((status) => (
                    <button
                      key={status}
                      className={`rounded-xl px-3 py-2 text-xs font-black transition ${attendance[student.id] === status ? 'bg-orange-600 text-white' : 'bg-orange-50 text-orange-700 hover:bg-orange-100'}`}
                      onClick={() => handleMark(student.id, status)}
                      type="button"
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className="mt-5 w-full">
          <UserCheck size={18} />
          Lưu điểm danh
        </Button>
      </Card>
    </div>
  )
}
