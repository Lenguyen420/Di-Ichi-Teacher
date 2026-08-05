import { FilePlus2 } from 'lucide-react'
import { PageHeader } from '../../components/Common/PageHeader.jsx'
import { ExamBankCards } from '../../components/ExamBank/ExamBankCards.jsx'
import { ExamBankTable } from '../../components/ExamBank/ExamBankTable.jsx'
import { ExamBankToolbar } from '../../components/ExamBank/ExamBankToolbar.jsx'

export const ExamBankPage = () => (
  <div className="space-y-5">
    <PageHeader title="Ngân hàng đề thi" description="Tổ chức quiz, mini test và đề thi online theo kỹ năng, thời lượng và trạng thái sử dụng." action="Tạo đề thi" icon={FilePlus2} />
    <ExamBankToolbar />
    <ExamBankCards />
    <ExamBankTable />
  </div>
)
