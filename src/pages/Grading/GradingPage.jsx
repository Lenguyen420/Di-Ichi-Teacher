import { CheckCircle2 } from 'lucide-react'
import { PageHeader } from '../../components/Common/PageHeader.jsx'
import { GradingFeedback } from '../../components/Grading/GradingFeedback.jsx'
import { GradingStats } from '../../components/Grading/GradingStats.jsx'
import { GradingTable } from '../../components/Grading/GradingTable.jsx'

export const GradingPage = () => (
  <div className="space-y-5">
    <PageHeader title="Chấm điểm" description="Theo dõi hàng đợi bài nộp, nhập điểm và gửi phản hồi cho học viên." action="Chấm nhanh" icon={CheckCircle2} />
    <GradingStats />
    <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
      <GradingTable />
      <GradingFeedback />
    </div>
  </div>
)
