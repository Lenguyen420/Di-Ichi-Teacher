import { notifications } from '../../datas/portalData.js'
import { Badge } from '../Common/Badge.jsx'
import { Card } from '../Common/Card.jsx'

export const NotificationList = () => (
  <Card>
    <div className="space-y-3">
      {notifications.map((item) => (
        <div key={item.title} className="rounded-2xl border border-orange-100 p-4">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
            <div>
              <h2 className="font-black text-slate-950">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-500">{item.message}</p>
            </div>
            <Badge tone={item.read ? 'slate' : 'orange'}>{item.type}</Badge>
          </div>
        </div>
      ))}
    </div>
  </Card>
)
