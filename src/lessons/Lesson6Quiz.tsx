import { useState } from 'react'

const questions = [
  {
    q: 'ถ้าคุณเชื่อว่าหุ้น KBANK จะขึ้นในเดือนหน้า ควรซื้อ Option แบบไหน?',
    options: ['Long Put', 'Long Call', 'Short Call', 'Short Put'],
    answer: 1,
    explanation: 'Long Call ให้สิทธิ์ซื้อหุ้น เมื่อราคาหุ้นขึ้นสูงกว่า Strike คุณจะได้กำไร',
  },
  {
    q: 'ถ้าซื้อ KBANK Call ที่ Strike 140 จ่าย Premium 4 บาท จุด Breakeven อยู่ที่ราคาเท่าไหร่?',
    options: ['฿136', '฿140', '฿144', '฿148'],
    answer: 2,
    explanation: 'Breakeven ของ Call = Strike + Premium = 140 + 4 = ฿144',
  },
  {
    q: '"Out of The Money (OTM)" ของ Call Option หมายความว่าอะไร?',
    options: ['ราคาหุ้น > Strike', 'ราคาหุ้น = Strike', 'ราคาหุ้น < Strike', 'Option หมดอายุแล้ว'],
    answer: 2,
    explanation: 'Call OTM = ราคาหุ้นยังต่ำกว่า Strike ยังไม่มีมูลค่าทันที',
  },
  {
    q: 'ซื้อ PTT Put Strike 30 จ่าย Premium 1.20 บาท × 100 หุ้น ขาดทุนสูงสุดคือเท่าไหร่?',
    options: ['฿30', '฿120', '฿1,200', 'ไม่จำกัด'],
    answer: 1,
    explanation: 'ขาดทุนสูงสุดของผู้ซื้อ Option = Premium ที่จ่ายไป = 1.20 × 100 = ฿120 เท่านั้น',
  },
  {
    q: 'Open Interest (OI) ใน Options Chain บอกข้อมูลอะไร?',
    options: ['ราคาเปิดตลาดวันนี้', 'จำนวน contracts ที่ยังเปิดอยู่', 'กำไรสะสมทั้งหมด', 'ปริมาณการซื้อขายวันนี้'],
    answer: 1,
    explanation: 'OI = Open Interest คือจำนวน contracts ที่ยังไม่ถูก close ยิ่งมาก ยิ่ง Liquid',
  },
]

interface Props {
  onComplete: (score: number) => void
}

export default function Lesson6Quiz({ onComplete }: Props) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [history, setHistory] = useState<boolean[]>([])

  const q = questions[current]
  const isLast = current === questions.length - 1

  const handleSelect = (idx: number) => {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    const correct = idx === q.answer
    if (correct) setCorrectCount(c => c + 1)
    setHistory(h => [...h, correct])
  }

  const handleNext = () => {
    const finalScore = correctCount
    if (isLast) {
      onComplete(finalScore)
    } else {
      setCurrent(c => c + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  const isCorrect = selected === q.answer

  return (
    <div className="space-y-5">
      <div>
        <div className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-1">บทที่ 6</div>
        <h1 className="text-2xl font-bold text-white">แบบทดสอบ</h1>
        <p className="text-white/50 mt-1 text-sm">ทดสอบความเข้าใจก่อนลงทุนจริง</p>
      </div>

      {/* Progress dots */}
      <div className="flex gap-1.5">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
              i < history.length
                ? history[i] ? 'bg-emerald-500' : 'bg-red-500'
                : i === current
                ? 'bg-purple-400 animate-pulse'
                : 'bg-white/10'
            }`}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs text-white/40">
        <span>ข้อ {current + 1} / {questions.length}</span>
        <span className="text-emerald-400">ถูก {correctCount} ข้อ</span>
      </div>

      {/* Question */}
      <div className="bg-[#1a2235] border border-white/10 rounded-xl p-5">
        <div className="text-xs font-semibold text-purple-400 mb-3">คำถามข้อที่ {current + 1}</div>
        <p className="text-white font-semibold text-base leading-relaxed">{q.q}</p>
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {q.options.map((opt, idx) => {
          let cls = 'border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:border-white/20 cursor-pointer'
          if (answered) {
            if (idx === q.answer) {
              cls = 'border-2 border-emerald-500 bg-emerald-950/50 text-emerald-300 font-semibold cursor-not-allowed'
            } else if (idx === selected) {
              cls = 'border-2 border-red-500 bg-red-950/40 text-red-300 cursor-not-allowed'
            } else {
              cls = 'border border-white/5 bg-white/3 text-white/25 cursor-not-allowed'
            }
          }
          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={answered}
              className={`w-full text-left px-4 py-3.5 rounded-xl text-sm transition-all duration-200 ${cls}`}
            >
              <span className="font-mono text-xs mr-2 opacity-50">{String.fromCharCode(65 + idx)}.</span>
              {opt}
              {answered && idx === q.answer && <span className="ml-2">✓</span>}
              {answered && idx === selected && idx !== q.answer && <span className="ml-2">✗</span>}
            </button>
          )
        })}
      </div>

      {/* Explanation */}
      {answered && (
        <div className={`rounded-xl p-4 border transition-all ${isCorrect ? 'bg-emerald-950/50 border-emerald-700/50' : 'bg-red-950/40 border-red-700/40'}`}>
          <div className={`font-bold text-sm mb-1.5 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
            {isCorrect ? '🎉 ถูกต้อง!' : '❌ ไม่ถูกต้อง'}
          </div>
          <p className="text-white/65 text-xs leading-relaxed">{q.explanation}</p>
        </div>
      )}

      {answered && (
        <button
          onClick={handleNext}
          className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 active:scale-95 text-white font-bold text-sm transition-all shadow-lg shadow-purple-600/20"
        >
          {isLast ? '🏆 ดูผลคะแนน' : 'ข้อต่อไป →'}
        </button>
      )}
    </div>
  )
}
