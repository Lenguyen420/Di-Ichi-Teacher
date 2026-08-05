import { myClassTabs } from '../../datas/myClassTabs.js'
import { cn } from '../../utils/cn.js'

export const MyClassesTabs = ({ activeTab, onChange }) => (
  <div className="flex gap-2 overflow-x-auto rounded-2xl border border-orange-100 bg-white p-2 shadow-sm">
    {myClassTabs.map((tab) => (
      <button
        key={tab}
        onClick={() => onChange(tab)}
        className={cn('min-h-10 shrink-0 rounded-xl px-3 text-sm font-bold transition', activeTab === tab ? 'bg-orange-600 text-white' : 'text-slate-600 hover:bg-orange-50 hover:text-orange-700')}
      >
        {tab}
      </button>
    ))}
  </div>
)
