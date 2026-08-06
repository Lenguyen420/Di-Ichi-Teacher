export const examTabs = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'list', label: 'Danh sách đề thi' },
  { id: 'create', label: 'Tạo đề thi' },
  { id: 'sessions', label: 'Tổ chức kỳ thi' },
  { id: 'results', label: 'Kết quả thi' },
  { id: 'stats', label: 'Thống kê' },
]

export const examFilters = {
  types: ['Tất cả loại đề', 'Kiểm tra 15 phút', 'Kiểm tra giữa kỳ', 'Kiểm tra cuối kỳ', 'Thi thử', 'Thi xếp lớp'],
  skills: ['Tất cả kỹ năng', 'Grammar', 'Vocabulary', 'Reading', 'Listening', 'Writing', 'Speaking'],
  levels: ['Tất cả trình độ', 'Starter', 'Mover', 'Flyer', 'A1', 'A2', 'B1', 'B2', 'IELTS', 'TOEIC'],
  teachers: ['Tất cả giáo viên', 'Ms. Linh', 'Mr. Nam', 'Ms. Hạnh', 'Teacher Admin'],
}

export const supportedExamFiles = ['PDF', 'Word', 'PowerPoint', 'Audio (Listening)', 'Video']

export const examBank = [
  {
    id: 'EXM-001',
    title: 'IELTS Foundation Midterm Test',
    description: 'Đề kiểm tra giữa kỳ cho lớp IELTS Foundation.',
    type: 'Kiểm tra giữa kỳ',
    skill: 'Reading',
    level: 'IELTS',
    duration: 60,
    maxScore: 10,
    submissionType: 'Làm online',
    file: 'ielts-midterm-reading.pdf',
    files: ['ielts-midterm-reading.pdf', 'answer-sheet.docx'],
    teacher: 'Ms. Linh',
    createdAt: '06/08/2026',
    status: 'Đang sử dụng',
  },
  {
    id: 'EXM-002',
    title: 'TOEIC Listening Mock Test 01',
    description: 'Đề thi thử TOEIC Listening với audio.',
    type: 'Thi thử',
    skill: 'Listening',
    level: 'TOEIC',
    duration: 45,
    maxScore: 100,
    submissionType: 'Làm online',
    file: 'toeic-listening-test.mp3',
    files: ['toeic-listening-test.mp3', 'toeic-answer.pdf'],
    teacher: 'Teacher Admin',
    createdAt: '04/08/2026',
    status: 'Đang sử dụng',
  },
  {
    id: 'EXM-003',
    title: 'Grammar 15-minute Check',
    description: 'Bài kiểm tra nhanh ngữ pháp A2.',
    type: 'Kiểm tra 15 phút',
    skill: 'Grammar',
    level: 'A2',
    duration: 15,
    maxScore: 10,
    submissionType: 'Nộp file',
    file: 'grammar-15-min.docx',
    files: ['grammar-15-min.docx'],
    teacher: 'Mr. Nam',
    createdAt: '01/08/2026',
    status: 'Nháp',
  },
  {
    id: 'EXM-004',
    title: 'Kids Flyer Final Test',
    description: 'Đề kiểm tra cuối kỳ cho lớp Kids Flyer.',
    type: 'Kiểm tra cuối kỳ',
    skill: 'Vocabulary',
    level: 'Flyer',
    duration: 50,
    maxScore: 10,
    submissionType: 'Làm online',
    file: 'flyer-final-test.pdf',
    files: ['flyer-final-test.pdf', 'speaking-cards.pptx'],
    teacher: 'Ms. Hạnh',
    createdAt: '28/07/2026',
    status: 'Đã lưu trữ',
  },
  {
    id: 'EXM-005',
    title: 'Placement Speaking Test',
    description: 'Đề thi xếp lớp kỹ năng Speaking.',
    type: 'Thi xếp lớp',
    skill: 'Speaking',
    level: 'B1',
    duration: 20,
    maxScore: 10,
    submissionType: 'Phỏng vấn trực tiếp',
    file: 'placement-speaking.pptx',
    files: ['placement-speaking.pptx'],
    teacher: 'Teacher Admin',
    createdAt: '24/07/2026',
    status: 'Đang sử dụng',
  },
]

export const examClasses = [
  { id: 'IELTS-01', name: 'IELTS 01', students: ['Nguyễn Văn A', 'Nguyễn Văn B', 'Trần Minh Anh', 'Lê Gia Hân'] },
  { id: 'IELTS-02', name: 'IELTS 02', students: ['Phạm Minh Khang', 'Vũ Bảo Ngọc', 'Bùi Khánh Vy', 'Đặng Minh Quân'] },
  { id: 'KIDS-03', name: 'Kids 03', students: ['Đỗ An Nhiên', 'Mai Đức Long', 'Ngô Khánh Linh', 'Hoàng Tú Anh'] },
]

export const examSessions = [
  { id: 'SES-001', title: 'IELTS Foundation Midterm Test', className: 'IELTS 01', date: '06/08/2026', time: '09:00 - 10:00', status: 'Sắp diễn ra' },
  { id: 'SES-002', title: 'TOEIC Listening Mock Test 01', className: 'IELTS 02', date: '08/08/2026', time: '14:00 - 14:45', status: 'Sắp diễn ra' },
  { id: 'SES-003', title: 'Kids Flyer Final Test', className: 'Kids 03', date: '02/08/2026', time: '08:30 - 09:20', status: 'Đang chấm' },
]

export const examResults = [
  { id: 'RES-001', student: 'Nguyễn Văn A', exam: 'IELTS Foundation Midterm Test', className: 'IELTS 01', score: 8.2, status: 'Đã chấm' },
  { id: 'RES-002', student: 'Nguyễn Văn B', exam: 'IELTS Foundation Midterm Test', className: 'IELTS 01', score: 7.5, status: 'Đã chấm' },
  { id: 'RES-003', student: 'Vũ Bảo Ngọc', exam: 'TOEIC Listening Mock Test 01', className: 'IELTS 02', score: 82, status: 'Đang chấm' },
  { id: 'RES-004', student: 'Mai Đức Long', exam: 'Kids Flyer Final Test', className: 'Kids 03', score: 0, status: 'Chưa chấm' },
]
