import { CalendarDays, DoorOpen, GraduationCap, TrendingUp, UserRound, UsersRound } from 'lucide-react'
import { Card } from '../Common/Card.jsx'

export const MyClassesInfo = ({ selectedClass }) => {
  const items = [
    { label: 'Giáo viên', value: selectedClass.teacher, icon: UserRound },
    { label: 'Phòng học', value: selectedClass.room, icon: DoorOpen },
    { label: 'Thời gian', value: selectedClass.time, icon: CalendarDays },
    { label: 'Sĩ số', value: `${selectedClass.size} học viên`, icon: UsersRound },
    { label: 'Trình độ', value: selectedClass.level, icon: GraduationCap },
    { label: 'Tiến độ khóa học', value: `${selectedClass.progress}%`, icon: TrendingUp },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <Card key={item.label}>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-100 text-orange-700">
                <Icon size={20} />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-slate-400">{item.label}</p>
                <p className="mt-1 font-black text-slate-950">{item.value}</p>
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
