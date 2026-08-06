import { Activity, ArrowRight, BookOpenCheck, Clock3, FilePlus2, ListChecks } from 'lucide-react'

const icons = {
  total: BookOpenCheck,
  new: FilePlus2,
  assigned: ListChecks,
  active: Activity,
  expired: Clock3,
}

const tones = {
  total: 'bg-orange-100 text-orange-700',
  new: 'bg-emerald-100 text-emerald-700',
  assigned: 'bg-sky-100 text-sky-700',
  active: 'bg-amber-100 text-amber-700',
  expired: 'bg-rose-100 text-rose-700',
}

export const AssignmentBankDashboard = ({ metrics, onViewDetail }) => (
  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
    {metrics.map((item) => {
      const Icon = icons[item.id]

      return (
        <button
          key={item.id}
          className="group relative overflow-hidden rounded-2xl border border-orange-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100"
          type="button"
          onClick={() => onViewDetail(item)}
        >
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-50" />
          <div className="relative flex items-center justify-between">
            <span className={`grid h-11 w-11 place-items-center rounded-2xl ${tones[item.id]}`}>
              <Icon size={20} />
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-orange-50 text-orange-600 transition group-hover:bg-orange-600 group-hover:text-white">
              <ArrowRight size={18} />
            </span>
          </div>
          <p className="relative mt-5 text-3xl font-black text-slate-950">{item.value}</p>
          <div className="relative mt-1 flex items-center justify-between gap-3">
            <p className="text-sm font-bold text-slate-500">{item.label}</p>
            <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-black text-slate-500">{item.hint}</span>
          </div>
        </button>
      )
    })}
  </div>
)
