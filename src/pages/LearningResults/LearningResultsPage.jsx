import { Download } from 'lucide-react'
import { PageHeader } from '../../components/Common/PageHeader.jsx'
import { LearningResultsCards } from '../../components/LearningResults/LearningResultsCards.jsx'
import { LearningResultsChart } from '../../components/LearningResults/LearningResultsChart.jsx'

export const LearningResultsPage = () => (
  <div className="space-y-5">
    <PageHeader title="Kết quả học tập" description="Phân tích tiến bộ học viên theo kỹ năng, mục tiêu và kết quả trung bình." action="Xuất báo cáo" icon={Download} />
    <LearningResultsCards />
    <LearningResultsChart />
  </div>
)
