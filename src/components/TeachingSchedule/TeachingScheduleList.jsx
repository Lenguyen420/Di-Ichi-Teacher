import dayjs from 'dayjs'
import { schedules } from '../../datas/portalData.js'
import { Badge } from '../Common/Badge.jsx'
import { Card } from '../Common/Card.jsx'

export const TeachingScheduleList = ({ selectedId, onSelectSchedule }) => (
  <Card>
    <h2 className="text-lg font-black text-slate-950">Lịch trong ngày</h2>
    <p className="mt-1 text-sm text-slate-500">Bấm vào một buổi học để xem chi tiết.</p>
    <div className="mt-4 space-y-3">
      {schedules.map((item) => (
        <button
          key={item.id}
          className={`w-full rounded-xl border p-3 text-left transition ${selectedId === item.id ? 'border-orange-400 bg-orange-50 ring-4 ring-orange-100' : 'border-orange-100 hover:bg-orange-50'}`}
          onClick={() => onSelectSchedule(item.id)}
          type="button"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-bold text-slate-900">{item.title}</p>
              <p className="text-sm text-slate-500">{dayjs(item.start).format('HH:mm')} - {item.room}</p>
            </div>
            <Badge>{item.status}</Badge>
          </div>
        </button>
      ))}
    </div>
  </Card>
)
