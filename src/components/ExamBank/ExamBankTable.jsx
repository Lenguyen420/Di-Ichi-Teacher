import { Copy, Edit3, Eye, PlayCircle, Trash2 } from 'lucide-react'
import { Badge } from '../Common/Badge.jsx'
import { Button } from '../Common/Button.jsx'

const getStatusTone = (status) => {
  if (status === 'Đang sử dụng') return 'green'
  if (status === 'Đã lưu trữ') return 'slate'
  return 'orange'
}

export const ExamBankTable = ({ exams, onAction }) => (
  <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1180px] text-left text-sm">
        <thead className="bg-orange-50 text-xs uppercase text-orange-700">
          <tr>
            <th className="px-4 py-3 font-black">Tên đề</th>
            <th className="px-4 py-3 font-black">Loại</th>
            <th className="px-4 py-3 font-black">Kỹ năng</th>
            <th className="px-4 py-3 font-black">Trình độ</th>
            <th className="px-4 py-3 font-black">Thời gian</th>
            <th className="px-4 py-3 font-black">File</th>
            <th className="px-4 py-3 font-black">Người tạo</th>
            <th className="px-4 py-3 font-black">Thao tác</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-orange-50">
          {exams.map((item) => (
            <tr key={item.id} className="hover:bg-orange-50/50">
              <td className="px-4 py-3">
                <p className="font-black text-slate-950">{item.title}</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs text-slate-400">{item.id}</span>
                  <Badge tone={getStatusTone(item.status)}>{item.status}</Badge>
                </div>
              </td>
              <td className="px-4 py-3 font-bold text-slate-700">{item.type}</td>
              <td className="px-4 py-3"><Badge>{item.skill}</Badge></td>
              <td className="px-4 py-3 text-slate-600">{item.level}</td>
              <td className="px-4 py-3 font-bold text-slate-700">{item.duration} phút</td>
              <td className="max-w-48 truncate px-4 py-3 text-slate-600">{item.file}</td>
              <td className="px-4 py-3 text-slate-600">{item.teacher}</td>
              <td className="px-4 py-3">
                <div className="flex flex-wrap gap-2">
                  <Button className="min-h-9 px-3" variant="secondary" onClick={() => onAction('preview', item)}><Eye size={15} /> Xem</Button>
                  <Button className="min-h-9 px-3" variant="secondary" onClick={() => onAction('edit', item)}><Edit3 size={15} /> Chỉnh sửa</Button>
                  <Button className="min-h-9 px-3" onClick={() => onAction('organize', item)}><PlayCircle size={15} /> Tổ chức thi</Button>
                  <Button className="min-h-9 px-3" variant="secondary" onClick={() => onAction('copy', item)}><Copy size={15} /> Nhân bản</Button>
                  <Button className="min-h-9 bg-rose-500 px-3 hover:bg-rose-600" onClick={() => onAction('delete', item)}><Trash2 size={15} /> Xóa</Button>
                </div>
              </td>
            </tr>
          ))}
          {exams.length === 0 && (
            <tr>
              <td className="px-4 py-10 text-center text-sm font-bold text-slate-400" colSpan={8}>Không tìm thấy đề thi phù hợp.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
)
