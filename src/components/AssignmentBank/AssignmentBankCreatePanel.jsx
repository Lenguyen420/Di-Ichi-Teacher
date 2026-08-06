import { CalendarClock, FileArchive, UploadCloud, X } from 'lucide-react'
import { allowedAssignmentFiles, assignmentFilters } from '../../datas/assignmentBank.js'
import { Button } from '../Common/Button.jsx'
import { Card } from '../Common/Card.jsx'

export const AssignmentBankCreatePanel = ({ form, onChange, onCreate }) => {
  const hasFiles = form.fileNames.length > 0
  const isLimited = form.timeLimitMode === 'limited'

  return (
    <form className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr]" onSubmit={onCreate}>
      <Card>
        <div className="mb-5">
          <h2 className="text-xl font-black text-slate-950">Thông tin</h2>
          <p className="text-sm text-slate-500">Nhập nội dung cơ bản để tạo bài tập mới.</p>
        </div>
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-bold text-slate-700">Tên bài tập</span>
            <input className="mt-2 h-11 w-full rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={form.title} onChange={(event) => onChange('title', event.target.value)} placeholder="Ví dụ: Vocabulary Unit 5 Practice" />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-slate-700">Mô tả</span>
            <textarea className="mt-2 min-h-28 w-full rounded-xl border border-orange-100 px-3 py-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={form.description} onChange={(event) => onChange('description', event.target.value)} placeholder="Mô tả ngắn nội dung bài tập..." />
          </label>
          <div className="grid gap-4 md:grid-cols-3">
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Loại bài tập</span>
              <select className="mt-2 h-11 w-full rounded-xl border border-orange-100 px-3 text-sm" value={form.type} onChange={(event) => onChange('type', event.target.value)}>
                {assignmentFilters.types.slice(1).map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Kỹ năng</span>
              <select className="mt-2 h-11 w-full rounded-xl border border-orange-100 px-3 text-sm" value={form.skill} onChange={(event) => onChange('skill', event.target.value)}>
                {assignmentFilters.skills.slice(1).map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Trình độ</span>
              <select className="mt-2 h-11 w-full rounded-xl border border-orange-100 px-3 text-sm" value={form.level} onChange={(event) => onChange('level', event.target.value)}>
                {assignmentFilters.levels.slice(1).map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
          </div>

          <label className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-orange-200 bg-orange-50/50 px-5 py-6 text-center transition hover:border-orange-400 hover:bg-orange-50">
            <UploadCloud size={34} className="text-orange-600" />
            <span className="mt-3 text-base font-black text-slate-950">Kéo thả nhiều file hoặc chọn file</span>
            <span className="mt-1 text-sm text-slate-500">Có thể chọn nhiều tài liệu cùng lúc</span>
            <input className="hidden" type="file" multiple accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.mp3,.wav,.mp4,.mov,.zip" onChange={(event) => onChange('fileNames', Array.from(new Set([...form.fileNames, ...Array.from(event.target.files || []).map((file) => file.name)])))} />
          </label>

          {hasFiles && (
            <div className="rounded-2xl border border-orange-100 bg-white p-3">
              <p className="mb-2 text-sm font-black text-slate-700">File đã chọn ({form.fileNames.length})</p>
              <div className="flex flex-wrap gap-2">
                {form.fileNames.map((fileName) => (
                  <span key={fileName} className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-black text-orange-700">
                    {fileName}
                    <button className="grid h-5 w-5 place-items-center rounded-full bg-white text-orange-700 transition hover:bg-rose-100 hover:text-rose-600" type="button" onClick={() => onChange('fileNames', form.fileNames.filter((item) => item !== fileName))}>
                      <X size={13} />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {allowedAssignmentFiles.map((item) => (
              <span key={item} className="rounded-full bg-slate-50 px-3 py-1 text-xs font-black text-slate-500">{item}</span>
            ))}
          </div>
        </div>
      </Card>

      <Card>
        <div className="mb-5 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange-100 text-orange-700">
            <FileArchive size={18} />
          </span>
          <div>
            <h2 className="text-xl font-black text-slate-950">Thiết lập</h2>
            <p className="text-sm text-slate-500">Phù hợp cho ngân hàng ôn tập, học viên có thể luyện lại nhiều lần.</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Thời gian làm (phút)</span>
              <input className="mt-2 h-11 w-full rounded-xl border border-orange-100 px-3 text-sm" type="number" min="1" value={form.duration} onChange={(event) => onChange('duration', event.target.value)} />
            </label>
            <label className="block">
              <span className="text-sm font-bold text-slate-700">Điểm tối đa</span>
              <input className="mt-2 h-11 w-full rounded-xl border border-orange-100 px-3 text-sm" type="number" min="1" value={form.maxScore} onChange={(event) => onChange('maxScore', event.target.value)} />
            </label>
          </div>

          <div>
            <span className="text-sm font-bold text-slate-700">Thời gian hiển thị trong ngân hàng</span>
            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <label className={`rounded-2xl border p-4 text-sm font-black transition ${!isLimited ? 'border-orange-400 bg-orange-50 text-orange-700' : 'border-orange-100 text-slate-600'}`}>
                <input className="mr-2 accent-orange-600" type="radio" name="time-limit-mode" checked={!isLimited} onChange={() => onChange('timeLimitMode', 'unlimited')} />
                Không giới hạn
              </label>
              <label className={`rounded-2xl border p-4 text-sm font-black transition ${isLimited ? 'border-orange-400 bg-orange-50 text-orange-700' : 'border-orange-100 text-slate-600'}`}>
                <input className="mr-2 accent-orange-600" type="radio" name="time-limit-mode" checked={isLimited} onChange={() => onChange('timeLimitMode', 'limited')} />
                Chọn ngày giờ
              </label>
            </div>
          </div>

          {isLimited && (
            <div className="rounded-2xl border border-orange-100 bg-orange-50/50 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-black text-orange-700">
                <CalendarClock size={17} />
                Khoảng thời gian truy cập
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-bold text-slate-700">Mở từ</span>
                  <input className="mt-2 h-11 w-full rounded-xl border border-orange-100 px-3 text-sm" type="datetime-local" value={form.availableFrom} onChange={(event) => onChange('availableFrom', event.target.value)} />
                </label>
                <label className="block">
                  <span className="text-sm font-bold text-slate-700">Đóng lúc</span>
                  <input className="mt-2 h-11 w-full rounded-xl border border-orange-100 px-3 text-sm" type="datetime-local" value={form.availableUntil} onChange={(event) => onChange('availableUntil', event.target.value)} />
                </label>
              </div>
            </div>
          )}

          <label className="flex items-center gap-3 rounded-xl bg-orange-50 p-3 text-sm font-bold text-slate-700">
            <input className="h-4 w-4 accent-orange-600" type="checkbox" checked={form.allowDownload} onChange={(event) => onChange('allowDownload', event.target.checked)} />
            Cho phép tải file
          </label>
          <label className="flex items-center gap-3 rounded-xl bg-orange-50 p-3 text-sm font-bold text-slate-700">
            <input className="h-4 w-4 accent-orange-600" type="checkbox" checked={form.requireSubmission} onChange={(event) => onChange('requireSubmission', event.target.checked)} />
            Bắt buộc nộp bài
          </label>
          <label className="block">
            <span className="text-sm font-bold text-slate-700">Ghi chú cho học viên</span>
            <textarea className="mt-2 min-h-28 w-full rounded-xl border border-orange-100 px-3 py-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={form.note} onChange={(event) => onChange('note', event.target.value)} placeholder="Ví dụ: Có thể luyện lại nhiều lần để ôn tập trước bài kiểm tra." />
          </label>
          <Button className="w-full" type="submit">
            <UploadCloud size={18} />
            Lưu bài tập
          </Button>
        </div>
      </Card>
    </form>
  )
}
