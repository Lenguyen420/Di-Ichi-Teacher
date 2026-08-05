import { BellPlus } from 'lucide-react'
import { PageHeader } from '../../components/Common/PageHeader.jsx'
import { NotificationFilters } from '../../components/Notifications/NotificationFilters.jsx'
import { NotificationList } from '../../components/Notifications/NotificationList.jsx'

export const NotificationsPage = () => (
  <div className="space-y-5">
    <PageHeader title="Thông báo" description="Theo dõi cập nhật lịch học, bài tập, báo cáo và các thay đổi vận hành." action="Gửi thông báo" icon={BellPlus} />
    <NotificationFilters />
    <NotificationList />
  </div>
)
