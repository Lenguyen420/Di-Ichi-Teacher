import { FilePlus2, Settings2, UploadCloud, X } from 'lucide-react'
import { examFilters, supportedExamFiles } from '../../datas/examBank.js'
import { Button } from '../Common/Button.jsx'
import { Card } from '../Common/Card.jsx'

export const ExamCreatePanel = ({ form, onChange, onSubmit, isEditing }) => (
  <form className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]" onSubmit={onSubmit}>
    <Card>
      <div className="mb-5">
        <h2 className="text-xl font-black text-slate-950">Thông tin đề</h2>
        <p className="text-sm text-slate-500">Tạo hoặc chỉnh sửa thông tin cơ bản của đề thi.</p>
      </div>
      <div className="space-y-4">
        <label className="block">
          <span className="text-sm font-bold text-slate-700">Tên đề thi</span>
          <input className="mt-2 h-11 w-full rounded-xl border border-orange-100 px-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={form.title} onChange={(event) => onChange('title', event.target.value)} placeholder="Ví dụ: IELTS 01 Final Test" />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-slate-700">Mô tả</span>
          <textarea className="mt-2 min-h-28 w-full rounded-xl border border-orange-100 px-3 py-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={form.description} onChange={(event) => onChange('description', event.target.value)} placeholder="Mô tả mục tiêu, phạm vi và lưu ý của đề thi..." />
        </label>
        <div className="grid gap-4 md:grid-cols-3">
          <label className="block">
            <span className="text-sm font-bold text-slate-700">Loại đề</span>
            <select className="mt-2 h-11 w-full rounded-xl border border-orange-100 px-3 text-sm" value={form.type} onChange={(event) => onChange('type', event.target.value)}>
              {examFilters.types.slice(1).map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-bold text-slate-700">Kỹ năng</span>
            <select className="mt-2 h-11 w-full rounded-xl border border-orange-100 px-3 text-sm" value={form.skill} onChange={(event) => onChange('skill', event.target.value)}>
              {examFilters.skills.slice(1).map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-bold text-slate-700">Trình độ</span>
            <select className="mt-2 h-11 w-full rounded-xl border border-orange-100 px-3 text-sm" value={form.level} onChange={(event) => onChange('level', event.target.value)}>
              {examFilters.levels.slice(1).map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>

        <label className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-orange-200 bg-orange-50/50 px-5 py-6 text-center transition hover:border-orange-400 hover:bg-orange-50">
          <UploadCloud size={34} className="text-orange-600" />
          <span className="mt-3 text-base font-black text-slate-950">Kéo thả file hoặc chọn file</span>
          <span className="mt-1 text-sm text-slate-500">Hỗ trợ PDF, Word, PowerPoint, Audio và Video</span>
          <input className="hidden" type="file" multiple accept=".pdf,.doc,.docx,.ppt,.pptx,.mp3,.wav,.mp4,.mov" onChange={(event) => onChange('fileNames', Array.from(new Set([...form.fileNames, ...Array.from(event.target.files || []).map((file) => file.name)])))} />
        </label>

        {form.fileNames.length > 0 && (
          <div className="rounded-2xl border border-orange-100 p-3">
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
          {supportedExamFiles.map((item) => (
            <span key={item} className="rounded-full bg-slate-50 px-3 py-1 text-xs font-black text-slate-500">{item}</span>
          ))}
        </div>
      </div>
    </Card>

    <Card>
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-orange-100 text-orange-700">
          <Settings2 size={18} />
        </span>
        <div>
          <h2 className="text-xl font-black text-slate-950">Thiết lập</h2>
          <p className="text-sm text-slate-500">Cấu hình thời gian, điểm và hình thức nộp bài.</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-bold text-slate-700">Thời gian làm bài</span>
            <input className="mt-2 h-11 w-full rounded-xl border border-orange-100 px-3 text-sm" type="number" min="1" value={form.duration} onChange={(event) => onChange('duration', event.target.value)} />
          </label>
          <label className="block">
            <span className="text-sm font-bold text-slate-700">Điểm tối đa</span>
            <input className="mt-2 h-11 w-full rounded-xl border border-orange-100 px-3 text-sm" type="number" min="1" value={form.maxScore} onChange={(event) => onChange('maxScore', event.target.value)} />
          </label>
        </div>
        <label className="block">
          <span className="text-sm font-bold text-slate-700">Hình thức nộp bài</span>
          <select className="mt-2 h-11 w-full rounded-xl border border-orange-100 px-3 text-sm" value={form.submissionType} onChange={(event) => onChange('submissionType', event.target.value)}>
            <option>Làm online</option>
            <option>Nộp file</option>
            <option>Phỏng vấn trực tiếp</option>
          </select>
        </label>
        <label className="flex items-center gap-3 rounded-xl bg-orange-50 p-3 text-sm font-bold text-slate-700">
          <input className="h-4 w-4 accent-orange-600" type="checkbox" checked={form.allowDownload} onChange={(event) => onChange('allowDownload', event.target.checked)} />
          Cho phép tải đề
        </label>
        <label className="block">
          <span className="text-sm font-bold text-slate-700">Ghi chú cho học viên</span>
          <textarea className="mt-2 min-h-28 w-full rounded-xl border border-orange-100 px-3 py-3 text-sm outline-none focus:border-orange-300 focus:ring-4 focus:ring-orange-100" value={form.note} onChange={(event) => onChange('note', event.target.value)} placeholder="Ví dụ: Chuẩn bị tai nghe trước khi làm Listening." />
        </label>
        <Button className="w-full" type="submit">
          <FilePlus2 size={18} />
          {isEditing ? 'Cập nhật đề thi' : 'Lưu đề thi'}
        </Button>
      </div>
    </Card>
  </form>
)
