import { useMemo, useState } from 'react'
import { Plus } from 'lucide-react'
import { PageHeader } from '../../components/Common/PageHeader.jsx'
import { TeachingScheduleCalendar } from '../../components/TeachingSchedule/TeachingScheduleCalendar.jsx'
import { TeachingScheduleDetailPanel } from '../../components/TeachingSchedule/TeachingScheduleDetailPanel.jsx'
import { TeachingScheduleList } from '../../components/TeachingSchedule/TeachingScheduleList.jsx'
import { scheduleDetails } from '../../datas/portalData.js'

export const TeachingSchedulePage = () => {
  const [selectedScheduleId, setSelectedScheduleId] = useState(scheduleDetails[1].id)
  const selectedSchedule = useMemo(
    () => scheduleDetails.find((item) => item.id === selectedScheduleId) || scheduleDetails[0],
    [selectedScheduleId],
  )

  return (
    <div className="space-y-5">
      <PageHeader
        title="Lịch giảng dạy"
        description="Lịch dạng Google Calendar với chế độ xem theo ngày, tuần, tháng và chi tiết từng buổi học."
        action="Thêm lịch"
        icon={Plus}
      />
      <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
        <div className="space-y-5">
          <TeachingScheduleCalendar onSelectSchedule={setSelectedScheduleId} />
          <TeachingScheduleList selectedId={selectedScheduleId} onSelectSchedule={setSelectedScheduleId} />
        </div>
        <TeachingScheduleDetailPanel schedule={selectedSchedule} />
      </div>
    </div>
  )
}
