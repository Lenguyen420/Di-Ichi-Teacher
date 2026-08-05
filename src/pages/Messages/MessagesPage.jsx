import { MessageCirclePlus } from 'lucide-react'
import { PageHeader } from '../../components/Common/PageHeader.jsx'
import { ChatPanel } from '../../components/Messages/ChatPanel.jsx'
import { ConversationList } from '../../components/Messages/ConversationList.jsx'
import { MessageInfo } from '../../components/Messages/MessageInfo.jsx'

export const MessagesPage = () => (
  <div className="space-y-5">
    <PageHeader title="Tin nhắn" description="Trao đổi nhanh với học viên, phụ huynh và bộ phận đào tạo." action="Tin nhắn mới" icon={MessageCirclePlus} />
    <div className="grid gap-5 xl:grid-cols-[320px_1fr_300px]">
      <ConversationList />
      <ChatPanel />
      <MessageInfo />
    </div>
  </div>
)
