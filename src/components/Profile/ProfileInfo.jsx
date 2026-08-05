import { teacher } from '../../datas/portalData.js'
import { Card } from '../Common/Card.jsx'

export const ProfileInfo = () => (
  <Card>
    <h2 className="text-lg font-black text-slate-950">Thông tin cá nhân</h2>
    <div className="mt-4 space-y-3 text-sm text-slate-600">
      <p>Email: {teacher.email}</p>
      <p>Điện thoại: {teacher.phone}</p>
      <p>Chuyên môn: IELTS Writing, Speaking, Grammar</p>
    </div>
  </Card>
)
