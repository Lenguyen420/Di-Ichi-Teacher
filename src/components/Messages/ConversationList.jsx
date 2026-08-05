import { conversations } from '../../datas/portalData.js'
import { Badge } from '../Common/Badge.jsx'
import { Card } from '../Common/Card.jsx'

export const ConversationList = () => (
  <Card>
    <h2 className="text-lg font-black text-slate-950">Hội thoại</h2>
    <div className="mt-4 space-y-2">
      {conversations.map((item) => (
        <button key={item.name} className="w-full rounded-xl p-3 text-left transition hover:bg-orange-50">
          <div className="flex items-center justify-between gap-3">
            <p className="font-bold text-slate-900">{item.name}</p>
            {item.unread > 0 && <Badge tone="rose">{item.unread}</Badge>}
          </div>
          <p className="mt-1 truncate text-sm text-slate-500">{item.message}</p>
        </button>
      ))}
    </div>
  </Card>
)
