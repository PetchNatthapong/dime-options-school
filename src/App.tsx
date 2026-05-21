import { useState } from 'react'
import Lesson1 from './lessons/Lesson1'
import Lesson2 from './lessons/Lesson2'
import Lesson3 from './lessons/Lesson3'
import Lesson4 from './lessons/Lesson4'
import Lesson5 from './lessons/Lesson5'
import Lesson6Quiz from './lessons/Lesson6Quiz'
import CompletionScreen from './lessons/CompletionScreen'

const LESSONS = [
  { id: 1, title: 'Option คืออะไร?', short: 'พื้นฐาน' },
  { id: 2, title: 'คำศัพท์สำคัญ', short: 'คำศัพท์' },
  { id: 3, title: 'อ่าน Options Chain', short: 'DIME App' },
  { id: 4, title: 'Long Call', short: 'Long Call' },
  { id: 5, title: 'Long Put', short: 'Long Put' },
  { id: 6, title: 'แบบทดสอบ', short: 'Quiz' },
]

export default function App() {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [completed, setCompleted] = useState(false)

  const goNext = () => {
    if (currentLesson < LESSONS.length - 1) setCurrentLesson(c => c + 1)
  }
  const goBack = () => {
    if (currentLesson > 0) setCurrentLesson(c => c - 1)
  }
  const handleQuizComplete = (score: number) => {
    setQuizScore(score)
    setCompleted(true)
  }
  const restart = () => {
    setCurrentLesson(0)
    setCompleted(false)
    setQuizScore(0)
  }

  const progress = ((currentLesson) / LESSONS.length) * 100

  if (completed) {
    return <CompletionScreen score={quizScore} total={5} onRestart={restart} />
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-white" style={{ fontFamily: "'Sarabun', sans-serif" }}>
      {/* Top nav */}
      <div className="border-b border-white/10 bg-[#0d1117]/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-sm font-black text-black">D</div>
            <div>
              <div className="font-bold text-sm leading-none">DIME Options School</div>
              <div className="text-[10px] text-white/40 mt-0.5">เรียนรู้ Options แบบ Step-by-Step</div>
            </div>
          </div>
          <div className="text-xs text-white/40 font-mono">
            {currentLesson + 1}<span className="text-white/20">/</span>{LESSONS.length}
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-0.5 bg-white/5">
          <div
            className="h-full bg-emerald-500 transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step indicators */}
      <div className="max-w-3xl mx-auto px-4 pt-4 pb-2">
        <div className="flex gap-1.5 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          {LESSONS.map((l, i) => (
            <button
              key={l.id}
              onClick={() => setCurrentLesson(i)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                i === currentLesson
                  ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/30'
                  : i < currentLesson
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-800/60 hover:bg-emerald-900/60'
                  : 'bg-white/5 text-white/25 cursor-not-allowed'
              }`}
            >
              {i < currentLesson ? '✓ ' : `${i + 1}. `}{l.short}
            </button>
          ))}
        </div>
      </div>

      {/* Lesson content */}
      <div className="max-w-3xl mx-auto px-4 py-4">
        <div key={currentLesson} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          {currentLesson === 0 && <Lesson1 />}
          {currentLesson === 1 && <Lesson2 />}
          {currentLesson === 2 && <Lesson3 />}
          {currentLesson === 3 && <Lesson4 />}
          {currentLesson === 4 && <Lesson5 />}
          {currentLesson === 5 && <Lesson6Quiz onComplete={handleQuizComplete} />}
        </div>
      </div>

      {/* Nav buttons */}
      {currentLesson < 5 && (
        <div className="max-w-3xl mx-auto px-4 pb-12 flex justify-between">
          <button
            onClick={goBack}
            disabled={currentLesson === 0}
            className="px-5 py-2.5 rounded-lg border border-white/10 text-sm font-medium text-white/50 hover:text-white hover:border-white/25 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
          >
            ← ย้อนกลับ
          </button>
          <button
            onClick={goNext}
            className="px-7 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-black text-sm font-bold transition-all shadow-lg shadow-emerald-500/25"
          >
            บทต่อไป →
          </button>
        </div>
      )}
    </div>
  )
}
