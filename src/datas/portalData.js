export const teacher = {
  name: 'Cô Linh Trần',
  role: 'Giáo viên IELTS & General English',
  email: 'linh.tran@di-ichi.edu.vn',
  phone: '090 123 4567',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80',
}

export const dashboardToday = {
  dateLabel: 'Hôm nay, 05/08/2026',
  classesToday: 3,
  homeworkToGrade: 36,
  examsToGrade: 12,
  newNotifications: 5,
  newMessages: 9,
  nextClass: {
    name: 'Kids Starter B',
    time: '14:00 - 15:30',
    room: 'Phòng 104',
    lesson: 'Phonics review & speaking game',
    students: 16,
  },
}

export const dashboardStats = [
  { label: 'Lớp hôm nay', value: '03', note: '2 offline, 1 online', tone: 'orange' },
  { label: 'Homework cần chấm', value: '36', note: '12 bài hôm nay', tone: 'amber' },
  { label: 'Bài thi cần chấm', value: '12', note: '3 bài ưu tiên', tone: 'rose' },
  { label: 'Tin nhắn mới', value: '09', note: '3 phụ huynh', tone: 'green' },
]

export const classAttendance = [
  { className: 'IELTS Foundation A', attendance: 96, students: 18 },
  { className: 'Kids Starter B', attendance: 88, students: 16 },
  { className: 'TOEIC Compact C', attendance: 91, students: 22 },
  { className: 'Communication Plus', attendance: 94, students: 14 },
]

export const weeklyPerformance = [
  { day: 'T2', attendance: 92, homework: 78 },
  { day: 'T3', attendance: 88, homework: 82 },
  { day: 'T4', attendance: 94, homework: 85 },
  { day: 'T5', attendance: 91, homework: 80 },
  { day: 'T6', attendance: 96, homework: 89 },
  { day: 'T7', attendance: 90, homework: 84 },
]

export const schedules = [
  { id: 1, title: 'IELTS Foundation A', start: '2026-08-05T08:00:00', end: '2026-08-05T09:30:00', room: 'Phòng 301', status: 'Đã dạy' },
  { id: 2, title: 'Kids Starter B', start: '2026-08-05T14:00:00', end: '2026-08-05T15:30:00', room: 'Phòng 104', status: 'Buổi tiếp theo' },
  { id: 3, title: 'TOEIC Compact C', start: '2026-08-05T18:00:00', end: '2026-08-05T20:00:00', room: 'Online', status: 'Online' },
]

export const classes = [
  { id: 'CLS-001', name: 'IELTS Foundation A', level: 'IELTS 4.0-5.0', schedule: 'T2, T4 - 08:00', students: 18, room: 'Phòng 301', progress: 68, status: 'Đang học' },
  { id: 'CLS-002', name: 'Kids Starter B', level: 'Starter', schedule: 'T3, T5 - 14:00', students: 16, room: 'Phòng 104', progress: 42, status: 'Đang học' },
  { id: 'CLS-003', name: 'TOEIC Compact C', level: 'TOEIC 550+', schedule: 'T5, T7 - 18:00', students: 22, room: 'Online', progress: 76, status: 'Đang học' },
]

export const classTabs = [
  'Chi tiết lớp',
  'Danh sách học viên',
  'Điểm danh',
  'Lesson (Bài học)',
  'Homework',
  'Quiz & Thi Online',
  'Tài liệu',
  'Thảo luận',
  'Báo cáo lớp',
]

export const students = [
  { name: 'Nguyễn Minh Anh', attendance: '96%', homework: '15/16', score: 8.4, status: 'Tốt' },
  { name: 'Trần Bảo Lâm', attendance: '91%', homework: '14/16', score: 7.8, status: 'Ổn định' },
  { name: 'Lê Gia Hân', attendance: '88%', homework: '13/16', score: 7.5, status: 'Cần hỗ trợ' },
]

export const assignments = [
  { title: 'Writing Task 1 - Line Graph', className: 'IELTS Foundation A', due: '08/08/2026', submissions: '14/18', status: 'Đang giao' },
  { title: 'Vocabulary Unit 6 Practice', className: 'IELTS Foundation A', due: '06/08/2026', submissions: '18/18', status: 'Cần chấm' },
  { title: 'Phonics Short Vowels', className: 'Kids Starter B', due: '09/08/2026', submissions: '0/16', status: 'Nháp' },
]

export const exams = [
  { title: 'IELTS Mini Test 2', skill: 'Listening + Reading', duration: '60 phút', questions: 40, status: 'Cần chấm' },
  { title: 'TOEIC Grammar Check', skill: 'Part 5', duration: '25 phút', questions: 30, status: 'Nháp' },
  { title: 'Kids Speaking Checkpoint', skill: 'Speaking', duration: '10 phút', questions: 8, status: 'Cần chấm' },
]

export const gradingQueue = [
  { student: 'Nguyễn Minh Anh', className: 'IELTS Foundation A', task: 'Writing Task 1', submitted: '08:20', status: 'Chờ chấm' },
  { student: 'Trần Bảo Lâm', className: 'IELTS Foundation A', task: 'Vocabulary Unit 6', submitted: '08:45', status: 'Đã chấm' },
  { student: 'Lê Gia Hân', className: 'Kids Starter B', task: 'Phonics Practice', submitted: '09:10', status: 'Cần xem lại' },
]

export const learningResults = [
  { skill: 'Listening', average: 7.6, target: 8.0 },
  { skill: 'Reading', average: 7.9, target: 8.0 },
  { skill: 'Writing', average: 6.8, target: 7.5 },
  { skill: 'Speaking', average: 7.1, target: 7.5 },
]

export const conversations = [
  { name: 'Phụ huynh Minh Anh', message: 'Cô ơi, tuần này em cần ôn thêm Writing không?', time: '09:12', unread: 2 },
  { name: 'IELTS Foundation A', message: 'Reminder: nộp bài trước 21:00 hôm nay.', time: '08:30', unread: 0 },
  { name: 'Academic Office', message: 'Cập nhật lịch phòng học từ ngày mai.', time: 'Hôm qua', unread: 1 },
]

export const notifications = [
  { title: 'Thay đổi phòng học', message: 'IELTS Foundation A chuyển sang Phòng 302 vào thứ Sáu.', type: 'Lịch học', read: false },
  { title: 'Bài tập sắp hết hạn', message: 'Vocabulary Unit 6 sẽ hết hạn lúc 21:00 hôm nay.', type: 'Bài tập', read: false },
  { title: 'Báo cáo tháng', message: 'Báo cáo kết quả tháng 7 đã sẵn sàng để xem.', type: 'Báo cáo', read: true },
]

export const scheduleDetails = [
  {
    id: 1,
    className: 'IELTS Foundation A',
    level: 'IELTS 4.0-5.0',
    time: '08:00 - 09:30',
    room: 'Phòng 301',
    status: 'Đã dạy',
    teacherNote: 'Ôn lại dạng mô tả xu hướng trước khi vào bài mới.',
    curriculum: {
      title: 'Unit 6 - Describing trends',
      objectives: ['Nhận diện xu hướng tăng/giảm', 'Viết overview cho line graph', 'Luyện paraphrase số liệu'],
      materials: ['Slide Unit 6', 'Worksheet Line Graph', 'Band 7 sample answer'],
    },
    students: [
      { name: 'Nguyễn Minh Anh', status: 'Có mặt' },
      { name: 'Trần Bảo Lâm', status: 'Có mặt' },
      { name: 'Lê Gia Hân', status: 'Vắng có phép' },
    ],
  },
  {
    id: 2,
    className: 'Kids Starter B',
    level: 'Starter',
    time: '14:00 - 15:30',
    room: 'Phòng 104',
    status: 'Buổi tiếp theo',
    teacherNote: 'Chuẩn bị flashcard và trò chơi nói theo cặp.',
    curriculum: {
      title: 'Phonics review & speaking game',
      objectives: ['Ôn short vowels', 'Luyện hỏi đáp chủ đề toys', 'Mini speaking circle'],
      materials: ['Flashcard vowels', 'Starter book page 42', 'Speaking game cards'],
    },
    students: [
      { name: 'Đỗ An Nhiên', status: 'Có mặt' },
      { name: 'Phạm Minh Khang', status: 'Có mặt' },
      { name: 'Vũ Bảo Ngọc', status: 'Chưa điểm danh' },
    ],
  },
  {
    id: 3,
    className: 'TOEIC Compact C',
    level: 'TOEIC 550+',
    time: '18:00 - 20:00',
    room: 'Online',
    status: 'Online',
    teacherNote: 'Gửi link meeting trước giờ học 15 phút.',
    curriculum: {
      title: 'Part 5 grammar clinic',
      objectives: ['Ôn word forms', 'Luyện chọn đáp án nhanh', 'Chữa lỗi thường gặp'],
      materials: ['TOEIC Part 5 set 03', 'Grammar cheat sheet', 'Online quiz link'],
    },
    students: [
      { name: 'Nguyễn Quốc Huy', status: 'Có mặt' },
      { name: 'Hoàng Tú Anh', status: 'Có mặt' },
      { name: 'Mai Đức Long', status: 'Chưa điểm danh' },
    ],
  },
]
