import { Badge } from '../Common/Badge.jsx'
import { Card } from '../Common/Card.jsx'
import { MyClassesAttendance } from './MyClassesAttendance.jsx'
import { MyClassesDiscussion } from './MyClassesDiscussion.jsx'
import { MyClassesHomework } from './MyClassesHomework.jsx'
import { MyClassesInfo } from './MyClassesInfo.jsx'
import { MyClassesMaterials } from './MyClassesMaterials.jsx'
import { MyClassesQuiz } from './MyClassesQuiz.jsx'
import { MyClassesStudents } from './MyClassesStudents.jsx'

export const MyClassesDetail = ({ selectedClass, activeTab }) => {
  const renderContent = () => {
    if (activeTab === 'Danh sách học viên') return <MyClassesStudents selectedClass={selectedClass} />
    if (activeTab === 'Homework') return <MyClassesHomework selectedClass={selectedClass} />
    if (activeTab === 'Quiz & Thi Online') return <MyClassesQuiz selectedClass={selectedClass} />
    if (activeTab === 'Tài liệu') return <MyClassesMaterials selectedClass={selectedClass} />
    if (activeTab === 'Thảo luận') return <MyClassesDiscussion selectedClass={selectedClass} />
    if (activeTab === 'Điểm danh') return <MyClassesAttendance selectedClass={selectedClass} />
    return <MyClassesInfo selectedClass={selectedClass} />
  }

  return (
    <div className="space-y-5">
      <Card>
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
          <div>
            <Badge>{activeTab}</Badge>
            <h2 className="mt-3 text-2xl font-black text-slate-950">{selectedClass.name}</h2>
            <p className="mt-1 text-sm text-slate-500">{selectedClass.nextLesson}</p>
          </div>
          <div className="rounded-2xl bg-orange-50 px-4 py-3 text-sm font-black text-orange-700">
            {selectedClass.size} học viên
          </div>
        </div>
      </Card>
      {renderContent()}
    </div>
  )
}
