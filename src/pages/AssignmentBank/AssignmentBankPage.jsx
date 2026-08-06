import { useMemo, useState } from 'react'
import { BookPlus } from 'lucide-react'
import { toast } from 'sonner'
import { PageHeader } from '../../components/Common/PageHeader.jsx'
import { AssignmentAssignPanel } from '../../components/AssignmentBank/AssignmentAssignPanel.jsx'
import { AssignmentBankCreatePanel } from '../../components/AssignmentBank/AssignmentBankCreatePanel.jsx'
import { AssignmentBankDashboard } from '../../components/AssignmentBank/AssignmentBankDashboard.jsx'
import { AssignmentBankFilters } from '../../components/AssignmentBank/AssignmentBankFilters.jsx'
import { AssignmentBankStats } from '../../components/AssignmentBank/AssignmentBankStats.jsx'
import { AssignmentBankTable } from '../../components/AssignmentBank/AssignmentBankTable.jsx'
import { AssignmentBankTabs } from '../../components/AssignmentBank/AssignmentBankTabs.jsx'
import { AssignmentPreviewModal } from '../../components/AssignmentBank/AssignmentPreviewModal.jsx'
import { assignmentBank, assignableClasses } from '../../datas/assignmentBank.js'

const defaultCreateForm = {
  title: '',
  description: '',
  type: 'Homework',
  skill: 'Grammar',
  level: 'A1',
  fileNames: [],
  duration: 15,
  maxScore: 10,
  timeLimitMode: 'unlimited',
  availableFrom: '',
  availableUntil: '',
  allowDownload: true,
  requireSubmission: true,
  note: '',
}

const defaultAssignForm = {
  className: assignableClasses[0].name,
  allStudents: true,
  students: [],
  mode: 'class',
  classDuration: 45,
  deadlineDate: '2026-08-08',
  deadlineTime: '23:59',
}

const defaultFilters = {
  skill: 'Tất cả kỹ năng',
  level: 'Tất cả trình độ',
  type: 'Tất cả loại bài',
  creator: 'Tất cả người tạo',
  status: 'Tất cả trạng thái',
  keyword: '',
}

export const AssignmentBankPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [assignments, setAssignments] = useState(assignmentBank)
  const [selectedAssignment, setSelectedAssignment] = useState(assignmentBank[0])
  const [isAssignOpen, setIsAssignOpen] = useState(false)
  const [previewAssignment, setPreviewAssignment] = useState(null)
  const [editingAssignmentId, setEditingAssignmentId] = useState(null)
  const [filters, setFilters] = useState(defaultFilters)
  const [createForm, setCreateForm] = useState(defaultCreateForm)
  const [assignForm, setAssignForm] = useState(defaultAssignForm)

  const metrics = useMemo(() => [
    { id: 'total', label: 'Tổng số bài tập', value: assignments.length, hint: 'All', status: 'Tất cả trạng thái' },
    { id: 'new', label: 'Bài tập mới', value: assignments.filter((item) => item.status === 'Mới').length, hint: 'New', status: 'Mới' },
    { id: 'assigned', label: 'Bài tập đã giao', value: assignments.filter((item) => item.status === 'Đã giao').length, hint: 'Done', status: 'Đã giao' },
    { id: 'active', label: 'Bài tập đang hoạt động', value: assignments.filter((item) => item.status === 'Đang hoạt động').length, hint: 'Live', status: 'Đang hoạt động' },
    { id: 'expired', label: 'Bài tập hết hạn', value: assignments.filter((item) => item.status === 'Hết hạn').length, hint: 'Late', status: 'Hết hạn' },
  ], [assignments])

  const filteredAssignments = useMemo(() => assignments.filter((item) => {
    const fileText = Array.isArray(item.files) ? item.files.join(' ') : item.file
    const matchesSkill = filters.skill === 'Tất cả kỹ năng' || item.skill === filters.skill
    const matchesLevel = filters.level === 'Tất cả trình độ' || item.level === filters.level
    const matchesType = filters.type === 'Tất cả loại bài' || item.type === filters.type
    const matchesCreator = filters.creator === 'Tất cả người tạo' || item.creator === filters.creator
    const matchesStatus = filters.status === 'Tất cả trạng thái' || item.status === filters.status
    const keyword = filters.keyword.trim().toLowerCase()
    const matchesKeyword = !keyword || item.title.toLowerCase().includes(keyword) || fileText.toLowerCase().includes(keyword)

    return matchesSkill && matchesLevel && matchesType && matchesCreator && matchesStatus && matchesKeyword
  }), [assignments, filters])

  const updateFilter = (field, value) => setFilters((current) => ({ ...current, [field]: value }))
  const updateCreateForm = (field, value) => {
    setCreateForm((current) => ({
      ...current,
      [field]: value,
      ...(field === 'timeLimitMode' && value === 'unlimited' ? { availableFrom: '', availableUntil: '' } : {}),
    }))
  }
  const updateAssignForm = (field, value) => {
    setAssignForm((current) => ({
      ...current,
      [field]: value,
      ...(field === 'className' ? { allStudents: true, students: [] } : {}),
      ...(field === 'allStudents' && value ? { students: [] } : {}),
    }))
  }

  const openAssignPopup = (assignment = selectedAssignment) => {
    setSelectedAssignment(assignment)
    setIsAssignOpen(true)
  }

  const handleMetricDetail = (metric) => {
    setFilters({ ...defaultFilters, status: metric.status })
    setActiveTab('list')
    toast.info(`Đang xem chi tiết: ${metric.label}`)
  }

  const handleCreate = (event) => {
    event.preventDefault()

    if (!createForm.title.trim()) {
      toast.error('Vui lòng nhập tên bài tập')
      return
    }

    if (createForm.timeLimitMode === 'limited' && (!createForm.availableFrom || !createForm.availableUntil)) {
      toast.error('Vui lòng chọn ngày giờ mở và đóng bài tập')
      return
    }

    const files = createForm.fileNames.length > 0 ? createForm.fileNames : ['Chưa có file']
    const assignmentPayload = {
      title: createForm.title.trim(),
      description: createForm.description.trim(),
      type: createForm.type,
      skill: createForm.skill,
      level: createForm.level,
      files,
      file: files.join(', '),
      creator: 'Teacher Admin',
      createdAt: new Date().toLocaleDateString('vi-VN'),
      duration: Number(createForm.duration) || 15,
      maxScore: Number(createForm.maxScore) || 10,
      timeLimitMode: createForm.timeLimitMode,
      availableFrom: createForm.availableFrom,
      availableUntil: createForm.availableUntil,
    }

    if (editingAssignmentId) {
      const updatedAssignment = {
        ...assignments.find((item) => item.id === editingAssignmentId),
        ...assignmentPayload,
      }

      setAssignments((current) => current.map((item) => (
        item.id === editingAssignmentId ? updatedAssignment : item
      )))
      setSelectedAssignment(updatedAssignment)
      setEditingAssignmentId(null)
      toast.success('Đã cập nhật bài tập')
    } else {
      const newAssignment = {
        id: `ASG-${Date.now()}`,
        ...assignmentPayload,
        status: 'Mới',
      }

      setAssignments((current) => [newAssignment, ...current])
      setSelectedAssignment(newAssignment)
      toast.success('Đã tạo bài tập mới')
    }

    setCreateForm(defaultCreateForm)
    setActiveTab('list')
  }

  const handleAction = (action, item) => {
    if (action === 'assign') {
      openAssignPopup(item)
      return
    }

    if (action === 'delete') {
      setAssignments((current) => current.filter((assignment) => assignment.id !== item.id))
      if (selectedAssignment?.id === item.id) setSelectedAssignment(null)
      if (previewAssignment?.id === item.id) setPreviewAssignment(null)
      if (editingAssignmentId === item.id) setEditingAssignmentId(null)
      toast.success('Đã xóa bài tập')
      return
    }

    if (action === 'preview') {
      setSelectedAssignment(item)
      setPreviewAssignment(item)
      return
    }

    if (action === 'edit') {
      setSelectedAssignment(item)
      setPreviewAssignment(null)
      setEditingAssignmentId(item.id)
      setCreateForm({
        title: item.title,
        description: item.description,
        type: item.type,
        skill: item.skill,
        level: item.level,
        fileNames: item.files || (item.file ? item.file.split(', ') : []),
        duration: item.duration,
        maxScore: item.maxScore,
        timeLimitMode: item.timeLimitMode || 'unlimited',
        availableFrom: item.availableFrom || '',
        availableUntil: item.availableUntil || '',
        allowDownload: true,
        requireSubmission: true,
        note: '',
      })
      setActiveTab('create')
      toast.info('Đã đưa bài tập sang tab Tạo bài tập để chỉnh sửa')
    }
  }

  const handleAssign = (event) => {
    event.preventDefault()

    if (!selectedAssignment) {
      toast.error('Vui lòng chọn bài tập trước khi giao')
      return
    }

    if (!assignForm.allStudents && assignForm.students.length === 0) {
      toast.error('Vui lòng chọn học viên hoặc chọn toàn bộ lớp')
      return
    }

    if (assignForm.mode === 'class' && (!assignForm.classDuration || Number(assignForm.classDuration) < 1)) {
      toast.error('Vui lòng nhập thời gian làm bài trên lớp')
      return
    }

    if (assignForm.mode === 'home' && (!assignForm.deadlineDate || !assignForm.deadlineTime)) {
      toast.error('Vui lòng chọn deadline và giờ nộp')
      return
    }

    setAssignments((current) => current.map((item) => (
      item.id === selectedAssignment.id ? { ...item, status: 'Đã giao' } : item
    )))
    setSelectedAssignment((current) => current ? { ...current, status: 'Đã giao' } : current)
    setIsAssignOpen(false)
    toast.success('Đã giao bài tập', {
      description: `${selectedAssignment.title} đã được giao cho ${assignForm.className}.`,
    })
  }

  return (
    <div className="space-y-5">
      <PageHeader title="Ngân hàng bài tập" description="Quản lý bài tập theo tab: tổng quan, danh sách, tạo mới, giao bài và thống kê." action="Tạo bài tập" icon={BookPlus} />
      <AssignmentBankTabs activeTab={activeTab} onChange={setActiveTab} />

      {activeTab === 'dashboard' && <AssignmentBankDashboard metrics={metrics} onViewDetail={handleMetricDetail} />}

      {activeTab === 'list' && (
        <div className="space-y-5">
          <AssignmentBankFilters filters={filters} onChange={updateFilter} />
          <AssignmentBankTable assignments={filteredAssignments} onAction={handleAction} />
        </div>
      )}

      {activeTab === 'create' && <AssignmentBankCreatePanel form={createForm} onChange={updateCreateForm} onCreate={handleCreate} />}

      {activeTab === 'stats' && <AssignmentBankStats assignments={assignments} />}

      <AssignmentAssignPanel
        isOpen={isAssignOpen}
        selectedAssignment={selectedAssignment}
        assignForm={assignForm}
        onChange={updateAssignForm}
        onClose={() => setIsAssignOpen(false)}
        onSubmit={handleAssign}
      />
      <AssignmentPreviewModal
        assignment={previewAssignment}
        onClose={() => setPreviewAssignment(null)}
        onEdit={(assignment) => handleAction('edit', assignment)}
        onAssign={(assignment) => {
          setPreviewAssignment(null)
          openAssignPopup(assignment)
        }}
      />
    </div>
  )
}
