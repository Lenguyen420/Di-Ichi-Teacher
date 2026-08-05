import { BookPlus } from 'lucide-react'
import { PageHeader } from '../../components/Common/PageHeader.jsx'
import { AssignmentBankSummary } from '../../components/AssignmentBank/AssignmentBankSummary.jsx'
import { AssignmentBankTable } from '../../components/AssignmentBank/AssignmentBankTable.jsx'
import { AssignmentBankToolbar } from '../../components/AssignmentBank/AssignmentBankToolbar.jsx'

export const AssignmentBankPage = () => (
  <div className="space-y-5">
    <PageHeader title="Ngân hàng bài tập" description="Quản lý bài tập mẫu, trạng thái giao bài và tiến độ nộp bài của từng lớp." action="Tạo bài tập" icon={BookPlus} />
    <AssignmentBankToolbar />
    <AssignmentBankSummary />
    <AssignmentBankTable />
  </div>
)
