import { gradingQueue } from '../../datas/portalData.js'
import { Badge } from '../Common/Badge.jsx'
import { DataTable } from '../Common/DataTable.jsx'

export const GradingTable = () => {
  const columns = [
    { accessorKey: 'student', header: 'Học viên' },
    { accessorKey: 'className', header: 'Lớp' },
    { accessorKey: 'task', header: 'Bài nộp' },
    { accessorKey: 'submitted', header: 'Giờ nộp' },
    { accessorKey: 'status', header: 'Trạng thái', cell: ({ getValue }) => <Badge tone="amber">{getValue()}</Badge> },
  ]
  return <DataTable columns={columns} data={gradingQueue} />
}
