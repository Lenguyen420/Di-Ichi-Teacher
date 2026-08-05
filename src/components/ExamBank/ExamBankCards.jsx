import { exams } from '../../datas/portalData.js'
import { Badge } from '../Common/Badge.jsx'
import { Card } from '../Common/Card.jsx'

export const ExamBankCards = () => (
  <div className="grid gap-4 md:grid-cols-3">
    {exams.map((exam) => (
      <Card key={exam.title}>
        <Badge tone="orange">{exam.skill}</Badge>
        <h2 className="mt-3 text-lg font-black text-slate-950">{exam.title}</h2>
        <p className="mt-2 text-sm text-slate-500">{exam.duration} - {exam.questions} câu hỏi</p>
      </Card>
    ))}
  </div>
)
