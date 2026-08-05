import { assignments } from '../../datas/portalData.js'
import { Badge } from '../Common/Badge.jsx'
import { DataTable } from '../Common/DataTable.jsx'

export const AssignmentBankTable = () => {
  const columns = [
    { accessorKey: 'title', header: 'Bài tập' },
    { accessorKey: 'className', header: 'Lớp' },
    { accessorKey: 'due', header: 'Hạn nộp' },
    { accessorKey: 'submissions', header: 'Bài nộp' },
    { accessorKey: 'status', header: 'Trạng thái', cell: ({ getValue }) => <Badge tone="amber">{getValue()}</Badge> },
  ]
  return <DataTable columns={columns} data={assignments} />
}
