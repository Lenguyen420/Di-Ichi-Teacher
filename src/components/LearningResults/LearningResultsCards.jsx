import { learningResults } from '../../datas/portalData.js'
import { Card } from '../Common/Card.jsx'

export const LearningResultsCards = () => (
  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
    {learningResults.map((item) => (
      <Card key={item.skill}>
        <p className="text-sm font-bold text-slate-500">{item.skill}</p>
        <p className="mt-3 text-3xl font-black text-slate-950">{item.average}</p>
        <p className="text-xs font-semibold text-orange-600">Mục tiêu {item.target}</p>
      </Card>
    ))}
  </div>
)
