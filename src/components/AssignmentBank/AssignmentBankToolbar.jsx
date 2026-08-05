import { Plus } from 'lucide-react'
import { Button } from '../Common/Button.jsx'
import { SearchBar } from '../Common/SearchBar.jsx'

export const AssignmentBankToolbar = () => (
  <div className="grid gap-3 md:grid-cols-[1fr_auto]">
    <SearchBar placeholder="Tìm bài tập..." />
    <Button><Plus size={18} /> Thêm bài tập</Button>
  </div>
)
