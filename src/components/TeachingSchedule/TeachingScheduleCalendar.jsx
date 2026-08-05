import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { schedules } from '../../datas/portalData.js'
import { Card } from '../Common/Card.jsx'

export const TeachingScheduleCalendar = ({ onSelectSchedule }) => {
  const calendarEvents = schedules.map((item) => ({
    ...item,
    id: String(item.id),
    classNames: ['diichi-calendar-event'],
  }))

  return (
    <Card className="overflow-hidden">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialDate="2026-08-05"
        initialView="timeGridWeek"
        height="auto"
        events={calendarEvents}
        eventClick={(info) => onSelectSchedule(Number(info.event.id))}
        nowIndicator
        selectable
        slotMinTime="07:00:00"
        slotMaxTime="21:30:00"
        allDaySlot={false}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridDay,timeGridWeek,dayGridMonth',
        }}
        buttonText={{
          today: 'Hôm nay',
          day: 'Ngày',
          week: 'Tuần',
          month: 'Tháng',
        }}
        eventContent={(eventInfo) => (
          <div className="space-y-0.5 p-1">
            <p className="truncate text-xs font-black">{eventInfo.event.title}</p>
            <p className="truncate text-[11px] font-semibold opacity-90">{eventInfo.timeText}</p>
          </div>
        )}
      />
    </Card>
  )
}
