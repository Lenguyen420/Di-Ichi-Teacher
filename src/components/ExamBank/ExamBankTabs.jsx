import { examTabs } from '../../datas/examBank.js'

export const ExamBankTabs = ({ activeTab, onChange }) => (
  <div className="overflow-x-auto rounded-2xl border border-orange-100 bg-white p-2 shadow-sm">
    <div className="flex min-w-max gap-2">
      {examTabs.map((tab) => (
        <button
          key={tab.id}
          className={`rounded-xl px-4 py-2 text-sm font-black transition ${activeTab === tab.id ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' : 'text-slate-500 hover:bg-orange-50 hover:text-orange-700'}`}
          type="button"
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  </div>
)
