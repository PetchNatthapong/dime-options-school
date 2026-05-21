interface Props {
  score: number
  total: number
  onRestart: () => void
}

export default function CompletionScreen({ score, total, onRestart }: Props) {
  const pct = Math.round((score / total) * 100)
  const grade = pct >= 80 ? { label: 'ยอดเยี่ยม!', color: 'text-emerald-400', bg: 'bg-emerald-950/60 border-emerald-600/50', emoji: '🏆' }
    : pct >= 60 ? { label: 'ดีมาก!', color: 'text-blue-400', bg: 'bg-blue-950/50 border-blue-600/40', emoji: '🎯' }
    : { label: 'ลองอีกครั้ง', color: 'text-orange-400', bg: 'bg-orange-950/40 border-orange-600/40', emoji: '💪' }

  const nextSteps = [
    { icon: '📱', title: 'เปิดแอป DIME', desc: 'ลองดู Options Chain ของหุ้นที่คุณสนใจ' },
    { icon: '🔍', title: 'หา ATM Options', desc: 'ค้นหา Call หรือ Put ที่ Strike ใกล้ราคาปัจจุบัน' },
    { icon: '🧪', title: 'ทดลองด้วยเงินน้อย', desc: 'เริ่มต้นด้วย 1 contract ก่อน เพื่อเรียนรู้จากของจริง' },
    { icon: '📊', title: 'จดบันทึก', desc: 'บันทึก Entry/Exit และเหตุผลทุกครั้ง' },
  ]

  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex flex-col" style={{ fontFamily: "'Sarabun', sans-serif" }}>
      <div className="max-w-3xl mx-auto px-4 py-10 w-full">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-3">{grade.emoji}</div>
          <h1 className="text-3xl font-black text-white">{grade.label}</h1>
          <p className="text-white/50 mt-1">คุณเรียนจบหลักสูตร DIME Options School แล้ว</p>
        </div>

        {/* Score card */}
        <div className={`border rounded-2xl p-6 text-center mb-6 ${grade.bg}`}>
          <div className="text-sm text-white/50 mb-2">คะแนนของคุณ</div>
          <div className={`text-6xl font-black ${grade.color}`}>{score}<span className="text-3xl text-white/30">/{total}</span></div>
          <div className={`text-xl font-bold mt-1 ${grade.color}`}>{pct}%</div>

          {/* Score bar */}
          <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${pct >= 80 ? 'bg-emerald-500' : pct >= 60 ? 'bg-blue-500' : 'bg-orange-500'}`}
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-white/30 mt-1">
            <span>0%</span>
            <span>ผ่าน 60%</span>
            <span>100%</span>
          </div>
        </div>

        {/* What you learned */}
        <div className="bg-[#1a2235] border border-white/10 rounded-xl p-5 mb-5">
          <h3 className="font-bold text-white mb-3">สิ่งที่คุณได้เรียนรู้วันนี้ 📚</h3>
          <div className="space-y-2">
            {[
              'Option คืออะไร และความต่างระหว่าง Call กับ Put',
              'คำศัพท์สำคัญ: Strike, Premium, Expiry, ITM/ATM/OTM',
              'วิธีอ่าน Options Chain บนแอป DIME',
              'Long Call: ทำกำไรเมื่อหุ้นขึ้น พร้อม Payoff Chart',
              'Long Put: ทำกำไรเมื่อหุ้นลง พร้อม Payoff Chart',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span className="text-emerald-400 mt-0.5">✓</span>
                <span className="text-white/65">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-[#161c2a] border border-white/8 rounded-xl p-5 mb-6">
          <h3 className="font-bold text-white mb-3">ขั้นตอนต่อไป 🚀</h3>
          <div className="space-y-3">
            {nextSteps.map((s) => (
              <div key={s.title} className="flex items-start gap-3">
                <span className="text-xl">{s.icon}</span>
                <div>
                  <div className="text-sm font-semibold text-white">{s.title}</div>
                  <div className="text-xs text-white/45 mt-0.5">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning */}
        <div className="bg-amber-950/30 border border-amber-700/40 rounded-xl px-4 py-3 mb-6">
          <div className="text-xs text-amber-200/80 leading-relaxed">
            <span className="font-bold text-amber-400">⚠️ คำเตือน: </span>
            Options มีความเสี่ยงสูง ควรศึกษาเพิ่มเติมและเริ่มต้นด้วยเงินที่สูญเสียได้
            การลงทุนมีความเสี่ยง ผู้ลงทุนควรศึกษาข้อมูลก่อนตัดสินใจ
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={onRestart}
            className="flex-1 py-3 rounded-xl border border-white/15 text-sm font-semibold text-white/60 hover:text-white hover:border-white/30 transition-all"
          >
            ↺ เรียนใหม่อีกครั้ง
          </button>
          <button
            className="flex-1 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-black text-sm font-bold transition-all shadow-lg shadow-emerald-500/25"
          >
            เปิด DIME →
          </button>
        </div>
      </div>
    </div>
  )
}
