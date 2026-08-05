import { Plus } from 'lucide-react'
import { Button } from '../Common/Button.jsx'
import { SearchBar } from '../Common/SearchBar.jsx'

export const ExamBankToolbar = () => (
  <div className="grid gap-3 md:grid-cols-[1fr_auto]">
    <SearchBar placeholder="Tìm đề thi..." />
    <Button><Plus size={18} /> Tạo đề thi</Button>
  </div>
)
