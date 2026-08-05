import { Send } from 'lucide-react'
import { Button } from '../Common/Button.jsx'
import { Card } from '../Common/Card.jsx'

export const ChatPanel = () => (
  <Card className="flex min-h-[520px] flex-col">
    <div className="border-b border-orange-100 pb-4">
      <h2 className="text-lg font-black text-slate-950">Phụ huynh Minh Anh</h2>
      <p className="text-sm text-slate-500">Đang trao đổi về kế hoạch luyện Writing.</p>
    </div>
    <div className="flex-1 space-y-3 py-4">
      <p className="max-w-[78%] rounded-2xl bg-orange-50 p-3 text-sm text-slate-700">Cô ơi, Minh Anh nên luyện thêm kỹ năng nào ạ?</p>
      <p className="ml-auto max-w-[78%] rounded-2xl bg-orange-600 p-3 text-sm text-white">Em đang cần củng cố Writing Task 1. Tôi sẽ gửi thêm checklist luyện tập.</p>
    </div>
    <div className="flex gap-2">
      <input className="h-11 flex-1 rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" placeholder="Nhập tin nhắn..." />
      <Button className="h-11 w-11 px-0" aria-label="Gửi"><Send size={18} /></Button>
    </div>
  </Card>
)
