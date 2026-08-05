import { CalendarPlus } from 'lucide-react'
import { DashboardChart } from '../../components/Dashboard/DashboardChart.jsx'
import { DashboardOverview } from '../../components/Dashboard/DashboardOverview.jsx'
import { DashboardTasks } from '../../components/Dashboard/DashboardTasks.jsx'
import { PageHeader } from '../../components/Common/PageHeader.jsx'
import { dashboardToday } from '../../datas/portalData.js'

export const DashboardPage = () => (
  <div className="space-y-5">
    <PageHeader
      title="Dashboard"
      description={`${dashboardToday.dateLabel} - màn hình tổng quan sau đăng nhập cho giáo viên.`}
      action="Tạo lịch dạy"
      icon={CalendarPlus}
    />
    <DashboardOverview />
    <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
      <DashboardChart />
      <DashboardTasks />
    </div>
  </div>
)
