import { Activity, ArrowRight, CalendarClock, ClipboardCheck, FileText, GraduationCap, Timer } from 'lucide-react'

const icons = {
  total: FileText,
  active: Activity,
  midterm: ClipboardCheck,
  final: GraduationCap,
  upcoming: CalendarClock,
  grading: Timer,
}

const tones = {
  total: 'bg-orange-100 text-orange-700',
  active: 'bg-emerald-100 text-emerald-700',
  midterm: 'bg-sky-100 text-sky-700',
  final: 'bg-amber-100 text-amber-700',
  upcoming: 'bg-violet-100 text-violet-700',
  grading: 'bg-rose-100 text-rose-700',
}

export const ExamBankDashboard = ({ metrics, onViewDetail }) => (
  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
    {metrics.map((item) => {
      const Icon = icons[item.id]

      return (
        <button key={item.id} className="group relative overflow-hidden rounded-2xl border border-orange-100 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100" type="button" onClick={() => onViewDetail(item)}>
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
          <p className="relative mt-1 text-sm font-bold text-slate-500">{item.label}</p>
        </button>
      )
    })}
  </div>
)
