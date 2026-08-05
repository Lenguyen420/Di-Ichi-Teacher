import paintDocxUrl from '../assets/documents/CDS_K1_TH11_T1 THỰC HÀNH VẼ TRÊN PAINT (TIẾT 2).docx?url'
import paintPdfUrl from '../assets/documents/CDS_K1_TH11_T1 THỰC HÀNH VẼ TRÊN PAINT (TIẾT 2).pdf?url'
import fallingApplesUrl from '../assets/documents/Falling Apples.pptx?url'
import canvaVideoUrl from '../assets/documents/video_giới thiệu giao diện canva video.mp4?url'

const sharedDocuments = [
  {
    id: 'paint-pdf',
    title: 'Thực hành vẽ trên Paint - PDF',
    type: 'PDF',
    url: paintPdfUrl,
    previewable: true,
  },
  {
    id: 'paint-docx',
    title: 'Thực hành vẽ trên Paint - DOCX',
    type: 'DOCX',
    url: paintDocxUrl,
    previewable: false,
  },
  {
    id: 'falling-apples',
    title: 'Falling Apples',
    type: 'PPTX',
    url: fallingApplesUrl,
    previewable: false,
  },
  {
    id: 'canva-video',
    title: 'Video giới thiệu giao diện Canva',
    type: 'MP4',
    url: canvaVideoUrl,
    previewable: true,
  },
]

export const scheduleDocuments = {
  1: sharedDocuments.slice(0, 3),
  2: [sharedDocuments[0], sharedDocuments[2], sharedDocuments[3]],
  3: [sharedDocuments[1], sharedDocuments[2], sharedDocuments[3]],
}
