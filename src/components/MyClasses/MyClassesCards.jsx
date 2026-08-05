import { ArrowRight, UsersRound } from 'lucide-react'
import { myClasses } from '../../datas/myClasses.js'
import { Badge } from '../Common/Badge.jsx'
import { Card } from '../Common/Card.jsx'

export const MyClassesCards = ({ selectedId, onSelect }) => (
  <div className="-mx-4 overflow-x-auto px-4 pb-3">
    <div className="flex min-w-max gap-4">
    {myClasses.map((item) => (
      <button key={item.id} onClick={() => onSelect(item.id)} className="w-72 shrink-0 text-left">
        <Card className={`h-full transition hover:-translate-y-1 hover:shadow-lg ${selectedId === item.id ? 'border-orange-400 ring-4 ring-orange-100' : ''}`}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-black text-orange-600">{item.id}</p>
              <h2 className="mt-1 text-lg font-black text-slate-950">{item.name}</h2>
            </div>
            <ArrowRight className={selectedId === item.id ? 'text-orange-600' : 'text-slate-300'} size={20} />
          </div>
          <p className="mt-3 text-sm font-semibold text-slate-500">{item.level}</p>
          <p className="text-sm text-slate-500">{item.time}</p>
          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-600">
              <UsersRound size={16} className="text-orange-500" />
              {item.size} học viên
            </span>
            <Badge tone="green">{item.status}</Badge>
          </div>
          <div className="mt-4 h-2 rounded-full bg-orange-100">
            <div className="h-2 rounded-full bg-orange-500" style={{ width: `${item.progress}%` }} />
          </div>
        </Card>
      </button>
    ))}
    </div>
  </div>
)
