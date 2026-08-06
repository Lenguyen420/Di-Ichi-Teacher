import { useMemo, useState } from 'react'
import { FilePlus2 } from 'lucide-react'
import { toast } from 'sonner'
import { PageHeader } from '../../components/Common/PageHeader.jsx'
import { ExamBankDashboard } from '../../components/ExamBank/ExamBankDashboard.jsx'
import { ExamBankFilters } from '../../components/ExamBank/ExamBankFilters.jsx'
import { ExamBankTable } from '../../components/ExamBank/ExamBankTable.jsx'
import { ExamBankTabs } from '../../components/ExamBank/ExamBankTabs.jsx'
import { ExamCreatePanel } from '../../components/ExamBank/ExamCreatePanel.jsx'
import { ExamOrganizeModal } from '../../components/ExamBank/ExamOrganizeModal.jsx'
import { ExamPreviewModal } from '../../components/ExamBank/ExamPreviewModal.jsx'
import { ExamResultsPanel } from '../../components/ExamBank/ExamResultsPanel.jsx'
import { ExamSessionsPanel } from '../../components/ExamBank/ExamSessionsPanel.jsx'
import { ExamStatsPanel } from '../../components/ExamBank/ExamStatsPanel.jsx'
import { examBank, examClasses, examResults, examSessions } from '../../datas/examBank.js'

const defaultExamForm = {
  title: '',
  description: '',
  type: 'Kiểm tra 15 phút',
  skill: 'Grammar',
  level: 'A1',
  fileNames: [],
  duration: 45,
  maxScore: 10,
  submissionType: 'Làm online',
  allowDownload: false,
  note: '',
}

const defaultFilters = {
  type: 'Tất cả loại đề',
  skill: 'Tất cả kỹ năng',
  level: 'Tất cả trình độ',
  teacher: 'Tất cả giáo viên',
  createdAt: '',
  status: 'Tất cả trạng thái',
  keyword: '',
}

const defaultSessionForm = {
  className: examClasses[0].name,
  allStudents: true,
  students: [],
  examDate: '2026-08-06',
  startTime: '09:00',
  endTime: '10:00',
  autoOpen: true,
  autoSubmit: true,
  allowEarlySubmit: true,
}

export const ExamBankPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [exams, setExams] = useState(examBank)
  const [sessions, setSessions] = useState(examSessions)
  const [selectedExam, setSelectedExam] = useState(examBank[0])
  const [previewExam, setPreviewExam] = useState(null)
  const [editingExamId, setEditingExamId] = useState(null)
  const [isOrganizeOpen, setIsOrganizeOpen] = useState(false)
  const [filters, setFilters] = useState(defaultFilters)
  const [examForm, setExamForm] = useState(defaultExamForm)
  const [sessionForm, setSessionForm] = useState(defaultSessionForm)

  const metrics = useMemo(() => [
    { id: 'total', label: 'Tổng số đề thi', value: exams.length, target: 'list', status: 'Tất cả trạng thái' },
    { id: 'active', label: 'Đề thi đang sử dụng', value: exams.filter((item) => item.status === 'Đang sử dụng').length, target: 'list', status: 'Đang sử dụng' },
    { id: 'midterm', label: 'Đề thi giữa kỳ', value: exams.filter((item) => item.type === 'Kiểm tra giữa kỳ').length, target: 'list', type: 'Kiểm tra giữa kỳ' },
    { id: 'final', label: 'Đề thi cuối kỳ', value: exams.filter((item) => item.type === 'Kiểm tra cuối kỳ').length, target: 'list', type: 'Kiểm tra cuối kỳ' },
    { id: 'upcoming', label: 'Kỳ thi sắp diễn ra', value: sessions.filter((item) => item.status === 'Sắp diễn ra').length, target: 'sessions' },
    { id: 'grading', label: 'Bài thi đang chấm', value: sessions.filter((item) => item.status === 'Đang chấm').length, target: 'results' },
  ], [exams, sessions])

  const filteredExams = useMemo(() => exams.filter((item) => {
    const fileText = Array.isArray(item.files) ? item.files.join(' ') : item.file
    const matchesType = filters.type === 'Tất cả loại đề' || item.type === filters.type
    const matchesSkill = filters.skill === 'Tất cả kỹ năng' || item.skill === filters.skill
    const matchesLevel = filters.level === 'Tất cả trình độ' || item.level === filters.level
    const matchesTeacher = filters.teacher === 'Tất cả giáo viên' || item.teacher === filters.teacher
    const matchesStatus = filters.status === 'Tất cả trạng thái' || item.status === filters.status
    const matchesDate = !filters.createdAt || item.createdAt === new Date(filters.createdAt).toLocaleDateString('vi-VN')
    const keyword = filters.keyword.trim().toLowerCase()
    const matchesKeyword = !keyword || item.title.toLowerCase().includes(keyword) || fileText.toLowerCase().includes(keyword)

    return matchesType && matchesSkill && matchesLevel && matchesTeacher && matchesStatus && matchesDate && matchesKeyword
  }), [exams, filters])

  const updateFilter = (field, value) => setFilters((current) => ({ ...current, [field]: value }))
  const updateExamForm = (field, value) => setExamForm((current) => ({ ...current, [field]: value }))
  const updateSessionForm = (field, value) => {
    setSessionForm((current) => ({
      ...current,
      [field]: value,
      ...(field === 'className' ? { allStudents: true, students: [] } : {}),
      ...(field === 'allStudents' && value ? { students: [] } : {}),
    }))
  }

  const handleMetricDetail = (metric) => {
    if (metric.target === 'sessions' || metric.target === 'results') {
      setActiveTab(metric.target)
      return
    }

    setFilters({ ...defaultFilters, status: metric.status || defaultFilters.status, type: metric.type || defaultFilters.type })
    setActiveTab('list')
  }

  const openOrganize = (exam = selectedExam) => {
    if (!exam) {
      toast.error('Vui lòng chọn đề thi trước')
      return
    }
    setSelectedExam(exam)
    setPreviewExam(null)
    setIsOrganizeOpen(true)
  }

  const handleSubmitExam = (event) => {
    event.preventDefault()

    if (!examForm.title.trim()) {
      toast.error('Vui lòng nhập tên đề thi')
      return
    }

    const files = examForm.fileNames.length > 0 ? examForm.fileNames : ['Chưa có file']
    const payload = {
      title: examForm.title.trim(),
      description: examForm.description.trim(),
      type: examForm.type,
      skill: examForm.skill,
      level: examForm.level,
      duration: Number(examForm.duration) || 45,
      maxScore: Number(examForm.maxScore) || 10,
      submissionType: examForm.submissionType,
      files,
      file: files.join(', '),
      teacher: 'Teacher Admin',
      createdAt: new Date().toLocaleDateString('vi-VN'),
    }

    if (editingExamId) {
      const updatedExam = { ...exams.find((item) => item.id === editingExamId), ...payload }
      setExams((current) => current.map((item) => item.id === editingExamId ? updatedExam : item))
      setSelectedExam(updatedExam)
      setEditingExamId(null)
      toast.success('Đã cập nhật đề thi')
    } else {
      const newExam = { id: `EXM-${Date.now()}`, ...payload, status: 'Đang sử dụng' }
      setExams((current) => [newExam, ...current])
      setSelectedExam(newExam)
      toast.success('Đã tạo đề thi mới')
    }

    setExamForm(defaultExamForm)
    setActiveTab('list')
  }

  const handleAction = (action, exam) => {
    if (action === 'preview') {
      setSelectedExam(exam)
      setPreviewExam(exam)
      return
    }

    if (action === 'organize') {
      openOrganize(exam)
      return
    }

    if (action === 'edit') {
      setSelectedExam(exam)
      setPreviewExam(null)
      setEditingExamId(exam.id)
      setExamForm({
        title: exam.title,
        description: exam.description,
        type: exam.type,
        skill: exam.skill,
        level: exam.level,
        fileNames: exam.files || (exam.file ? exam.file.split(', ') : []),
        duration: exam.duration,
        maxScore: exam.maxScore,
        submissionType: exam.submissionType,
        allowDownload: false,
        note: '',
      })
      setActiveTab('create')
      return
    }

    if (action === 'copy') {
      const copiedExam = {
        ...exam,
        id: `EXM-${Date.now()}`,
        title: `${exam.title} (bản sao)`,
        createdAt: new Date().toLocaleDateString('vi-VN'),
        status: 'Đang sử dụng',
      }
      setExams((current) => [copiedExam, ...current])
      setSelectedExam(copiedExam)
      setPreviewExam(null)
      toast.success('Đã nhân bản đề thi')
      return
    }

    if (action === 'delete') {
      setExams((current) => current.filter((item) => item.id !== exam.id))
      if (selectedExam?.id === exam.id) setSelectedExam(null)
      if (previewExam?.id === exam.id) setPreviewExam(null)
      if (editingExamId === exam.id) setEditingExamId(null)
      toast.success('Đã xóa đề thi')
    }
  }

  const handleOrganizeExam = (event) => {
    event.preventDefault()

    if (!selectedExam) {
      toast.error('Vui lòng chọn đề thi')
      return
    }

    if (!sessionForm.allStudents && sessionForm.students.length === 0) {
      toast.error('Vui lòng chọn học viên hoặc toàn bộ lớp')
      return
    }

    if (!sessionForm.examDate || !sessionForm.startTime || !sessionForm.endTime) {
      toast.error('Vui lòng nhập ngày thi, giờ bắt đầu và giờ kết thúc')
      return
    }

    const newSession = {
      id: `SES-${Date.now()}`,
      title: selectedExam.title,
      className: sessionForm.className,
      date: new Date(sessionForm.examDate).toLocaleDateString('vi-VN'),
      time: `${sessionForm.startTime} - ${sessionForm.endTime}`,
      status: 'Sắp diễn ra',
    }

    setSessions((current) => [newSession, ...current])
    setIsOrganizeOpen(false)
    setActiveTab('sessions')
    toast.success('Đã bắt đầu kỳ thi', {
      description: `${selectedExam.title} đã được lên lịch cho ${sessionForm.className}.`,
    })
  }

  return (
    <div className="space-y-5">
      <PageHeader title="Ngân hàng đề thi" description="Quản lý đề thi, tạo đề, tổ chức kỳ thi, theo dõi kết quả và thống kê." action="Tạo đề thi" icon={FilePlus2} />
      <ExamBankTabs activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'dashboard' && <ExamBankDashboard metrics={metrics} onViewDetail={handleMetricDetail} />}

      {activeTab === 'list' && (
        <div className="space-y-5">
          <ExamBankFilters filters={filters} onChange={updateFilter} />
          <ExamBankTable exams={filteredExams} onAction={handleAction} />
        </div>
      )}

      {activeTab === 'create' && <ExamCreatePanel form={examForm} onChange={updateExamForm} onSubmit={handleSubmitExam} isEditing={Boolean(editingExamId)} />}

      {activeTab === 'sessions' && <ExamSessionsPanel sessions={sessions} selectedExam={selectedExam} onOpenOrganize={openOrganize} />}

      {activeTab === 'results' && <ExamResultsPanel results={examResults} />}

      {activeTab === 'stats' && <ExamStatsPanel exams={exams} />}

      <ExamPreviewModal
        exam={previewExam}
        onClose={() => setPreviewExam(null)}
        onEdit={(exam) => handleAction('edit', exam)}
        onCopy={(exam) => handleAction('copy', exam)}
        onOrganize={openOrganize}
      />
      <ExamOrganizeModal
        isOpen={isOrganizeOpen}
        exam={selectedExam}
        form={sessionForm}
        onChange={updateSessionForm}
        onClose={() => setIsOrganizeOpen(false)}
        onSubmit={handleOrganizeExam}
      />
    </div>
  )
}
