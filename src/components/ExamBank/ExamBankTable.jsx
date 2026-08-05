import { exams } from '../../datas/portalData.js'
import { Badge } from '../Common/Badge.jsx'
import { DataTable } from '../Common/DataTable.jsx'

export const ExamBankTable = () => {
  const columns = [
    { accessorKey: 'title', header: 'Đề thi' },
    { accessorKey: 'skill', header: 'Kỹ năng' },
    { accessorKey: 'duration', header: 'Thời lượng' },
    { accessorKey: 'questions', header: 'Số câu' },
    { accessorKey: 'status', header: 'Trạng thái', cell: ({ getValue }) => <Badge tone="green">{getValue()}</Badge> },
  ]
  return <DataTable columns={columns} data={exams} />
}
