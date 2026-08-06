import { Filter, Search } from 'lucide-react'
import { assignmentFilters } from '../../datas/assignmentBank.js'
import { Card } from '../Common/Card.jsx'

export const AssignmentBankFilters = ({ filters, onChange }) => (
  <Card>
    <div className="mb-4 flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange-100 text-orange-700">
        <Filter size={19} />
      </span>
      <div>
        <h2 className="text-lg font-black text-slate-950">Bộ lọc</h2>
        <p className="text-sm text-slate-500">Lọc bài tập theo kỹ năng, trình độ, loại bài, người tạo và từ khóa.</p>
      </div>
    </div>
    <div className="grid gap-3 lg:grid-cols-5">
      <select className="h-11 rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={filters.skill} onChange={(event) => onChange('skill', event.target.value)}>
        {assignmentFilters.skills.map((item) => <option key={item}>{item}</option>)}
      </select>
      <select className="h-11 rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={filters.level} onChange={(event) => onChange('level', event.target.value)}>
        {assignmentFilters.levels.map((item) => <option key={item}>{item}</option>)}
      </select>
      <select className="h-11 rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={filters.type} onChange={(event) => onChange('type', event.target.value)}>
        {assignmentFilters.types.map((item) => <option key={item}>{item}</option>)}
      </select>
      <select className="h-11 rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={filters.creator} onChange={(event) => onChange('creator', event.target.value)}>
        {assignmentFilters.creators.map((item) => <option key={item}>{item}</option>)}
      </select>
      <label className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" size={17} />
        <input className="h-11 w-full rounded-xl border border-orange-100 pl-10 pr-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" placeholder="Từ khóa..." value={filters.keyword} onChange={(event) => onChange('keyword', event.target.value)} />
      </label>
    </div>
  </Card>
)
