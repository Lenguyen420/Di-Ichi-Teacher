import { Badge } from '../Common/Badge.jsx'
import { Card } from '../Common/Card.jsx'

export const ProfileTeaching = () => (
  <Card>
    <h2 className="text-lg font-black text-slate-950">Giảng dạy & chứng chỉ</h2>
    <div className="mt-4 flex flex-wrap gap-2">
      <Badge>IELTS 8.0</Badge>
      <Badge tone="green">TESOL Advanced</Badge>
      <Badge tone="amber">7 năm kinh nghiệm</Badge>
      <Badge tone="orange">8 lớp phụ trách</Badge>
    </div>
  </Card>
)
