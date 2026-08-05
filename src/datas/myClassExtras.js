export const quizTemplates = [
  {
    id: 'quiz-vocab',
    title: 'Quiz Vocabulary',
    questions: 10,
    duration: 15,
    status: 'Sẵn sàng',
    joined: 25,
    submitted: 20,
    total: 30,
  },
  {
    id: 'quiz-grammar',
    title: 'Present Perfect Check',
    questions: 12,
    duration: 20,
    status: 'Nháp',
    joined: 0,
    submitted: 0,
    total: 30,
  },
]

export const classMaterials = [
  { id: 'mat-slide', title: 'Unit 4 - Present Perfect Slides', type: 'Slide', visibility: 'Hiện', access: 'Chỉ xem', shared: true },
  { id: 'mat-pdf', title: 'Student Handout Unit 4', type: 'PDF', visibility: 'Hiện', access: 'Cho tải', shared: true },
  { id: 'mat-audio', title: 'Listening Practice Audio', type: 'Audio', visibility: 'Ẩn', access: 'Chỉ xem', shared: false },
  { id: 'mat-video', title: 'Grammar Explainer Video', type: 'Video', visibility: 'Hiện', access: 'Chỉ xem', shared: true },
  { id: 'mat-word', title: 'Writing Worksheet', type: 'File Word', visibility: 'Hiện', access: 'Cho tải', shared: false },
]

export const discussionThreads = [
  {
    id: 'disc-1',
    author: 'Nguyễn Minh Anh',
    role: 'Học viên',
    message: 'Cô ơi, em chưa rõ khi nào dùng since và for trong Present Perfect ạ.',
    replies: 3,
    attachment: 'present-perfect-question.png',
    time: '09:12',
  },
  {
    id: 'disc-2',
    author: 'Cô Linh Trần',
    role: 'Giáo viên',
    message: 'Các em hoàn thành quiz vocabulary trước 15:30 nhé. Ai xong sớm làm thêm phần practice.',
    replies: 8,
    attachment: null,
    time: '10:05',
  },
]
