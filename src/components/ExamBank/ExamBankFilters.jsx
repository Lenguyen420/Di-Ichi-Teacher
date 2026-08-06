import { Filter, Search } from 'lucide-react'
import { examFilters } from '../../datas/examBank.js'
import { Card } from '../Common/Card.jsx'

export const ExamBankFilters = ({ filters, onChange }) => (
  <Card>
    <div className="mb-4 flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange-100 text-orange-700">
        <Filter size={19} />
      </span>
      <div>
        <h2 className="text-lg font-black text-slate-950">Bộ lọc</h2>
        <p className="text-sm text-slate-500">Lọc theo loại đề, kỹ năng, trình độ, giáo viên, ngày tạo và từ khóa.</p>
      </div>
    </div>
    <div className="grid gap-3 lg:grid-cols-6">
      <select className="h-11 rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={filters.type} onChange={(event) => onChange('type', event.target.value)}>
        {examFilters.types.map((item) => <option key={item}>{item}</option>)}
      </select>
      <select className="h-11 rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={filters.skill} onChange={(event) => onChange('skill', event.target.value)}>
        {examFilters.skills.map((item) => <option key={item}>{item}</option>)}
      </select>
      <select className="h-11 rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={filters.level} onChange={(event) => onChange('level', event.target.value)}>
        {examFilters.levels.map((item) => <option key={item}>{item}</option>)}
      </select>
      <select className="h-11 rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={filters.teacher} onChange={(event) => onChange('teacher', event.target.value)}>
        {examFilters.teachers.map((item) => <option key={item}>{item}</option>)}
      </select>
      <input className="h-11 rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" type="date" value={filters.createdAt} onChange={(event) => onChange('createdAt', event.target.value)} />
      <label className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" size={17} />
        <input className="h-11 w-full rounded-xl border border-orange-100 pl-10 pr-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" placeholder="Từ khóa..." value={filters.keyword} onChange={(event) => onChange('keyword', event.target.value)} />
      </label>
    </div>
  </Card>
)
