import { Card } from '../Common/Card.jsx'

export const NotificationFilters = () => (
  <Card className="grid gap-3 md:grid-cols-3">
    <select className="h-11 rounded-xl border border-orange-100 px-3 text-sm"><option>Tất cả loại thông báo</option><option>Lịch học</option><option>Bài tập</option></select>
    <select className="h-11 rounded-xl border border-orange-100 px-3 text-sm"><option>Tất cả trạng thái</option><option>Chưa đọc</option><option>Đã đọc</option></select>
    <select className="h-11 rounded-xl border border-orange-100 px-3 text-sm"><option>Mới nhất</option><option>Cũ nhất</option></select>
  </Card>
)
