import { Send } from 'lucide-react'
import { Button } from '../Common/Button.jsx'
import { Card } from '../Common/Card.jsx'

export const GradingFeedback = () => (
  <Card>
    <h2 className="text-lg font-black text-slate-950">Phản hồi nhanh</h2>
    <textarea className="mt-4 min-h-32 w-full rounded-xl border border-orange-100 p-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" placeholder="Nhập nhận xét cho học viên..." />
    <Button className="mt-3"><Send size={18} /> Gửi phản hồi</Button>
  </Card>
)
