export default function Lesson2() {
  const terms = [
    {
      term: 'Strike Price',
      thai: 'ราคาใช้สิทธิ์',
      color: 'blue',
      icon: '🎯',
      desc: 'ราคาที่คุณตกลงจะซื้อ (Call) หรือขาย (Put) หุ้น',
      example: 'Strike 140 บาท หมายถึง คุณมีสิทธิ์ซื้อ KBANK ที่ราคา 140 บาทเสมอ ไม่ว่าตลาดจะขึ้นไปแค่ไหน',
      tag: 'ราคาเป้าหมาย',
    },
    {
      term: 'Premium',
      thai: 'ราคาซื้อขาย Option',
      color: 'emerald',
      icon: '💰',
      desc: 'ราคาที่คุณจ่ายเพื่อได้สิทธิ์นั้น (ต้นทุนสูงสุด)',
      example: 'Premium 3.50 บาท × 100 หุ้น = จ่าย 350 บาท เพื่อควบคุมหุ้น 100 หุ้น',
      tag: 'ต้นทุน',
    },
    {
      term: 'Expiry Date',
      thai: 'วันหมดอายุ',
      color: 'orange',
      icon: '📅',
      desc: 'วันสุดท้ายที่คุณสามารถใช้สิทธิ์ได้',
      example: 'Options ไทยจะ Expire ทุกวันพฤหัสบดีสุดท้ายของเดือน ผ่านแล้วหมดอายุทันที',
      tag: 'กำหนดเวลา',
    },
    {
      term: 'In The Money (ITM)',
      thai: 'กำไรทันที',
      color: 'emerald',
      icon: '✅',
      desc: 'Option มีมูลค่าจริงตอนนี้ ใช้สิทธิ์แล้วได้กำไร',
      example: 'KBANK ราคา 150 บาท, Call Strike 140 = ITM (มีกำไร 10 บาท/หุ้น)',
      tag: 'มีกำไร',
    },
    {
      term: 'At The Money (ATM)',
      thai: 'ราคาพอดี',
      color: 'yellow',
      icon: '⚖️',
      desc: 'ราคาหุ้นอยู่ใกล้เคียง Strike Price มาก',
      example: 'KBANK ราคา 140 บาท, Call Strike 140 = ATM (ไม่กำไร ไม่ขาดทุน)',
      tag: 'เสมอตัว',
    },
    {
      term: 'Out of The Money (OTM)',
      thai: 'ยังไม่คุ้ม',
      color: 'red',
      icon: '❌',
      desc: 'ใช้สิทธิ์แล้วยังขาดทุนอยู่ ต้องรอราคาหุ้นขยับ',
      example: 'KBANK ราคา 130 บาท, Call Strike 140 = OTM (ยังไม่ถึงราคาใช้สิทธิ์)',
      tag: 'ยังไม่กำไร',
    },
  ]

  const colorMap: Record<string, string> = {
    blue: 'border-blue-700/50 bg-blue-950/30',
    emerald: 'border-emerald-700/50 bg-emerald-950/30',
    orange: 'border-orange-700/50 bg-orange-950/20',
    yellow: 'border-yellow-700/40 bg-yellow-950/20',
    red: 'border-red-700/50 bg-red-950/30',
  }
  const tagColorMap: Record<string, string> = {
    blue: 'bg-blue-900/60 text-blue-300',
    emerald: 'bg-emerald-900/60 text-emerald-300',
    orange: 'bg-orange-900/50 text-orange-300',
    yellow: 'bg-yellow-900/40 text-yellow-300',
    red: 'bg-red-900/50 text-red-300',
  }

  return (
    <div className="space-y-5">
      <div>
        <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1">บทที่ 2</div>
        <h1 className="text-2xl font-bold text-white">คำศัพท์สำคัญ</h1>
        <p className="text-white/50 mt-1 text-sm">6 คำที่ต้องรู้ก่อนดู Options Chain</p>
      </div>

      {/* Moneyness visual */}
      <div className="bg-[#1a2235] border border-white/10 rounded-xl p-4">
        <div className="text-xs font-semibold text-white/50 mb-3 uppercase tracking-wider">ตำแหน่งของ Option</div>
        <div className="relative">
          <div className="flex justify-between text-[10px] text-white/40 mb-1">
            <span>OTM (Call)</span>
            <span>ATM</span>
            <span>ITM (Call)</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden flex">
            <div className="flex-1 bg-red-800/60" />
            <div className="w-2 bg-yellow-500" />
            <div className="flex-1 bg-emerald-800/60" />
          </div>
          <div className="flex justify-between text-[10px] mt-1">
            <span className="text-red-400">ราคาหุ้น &lt; Strike</span>
            <span className="text-yellow-400">ราคาหุ้น = Strike</span>
            <span className="text-emerald-400">ราคาหุ้น &gt; Strike</span>
          </div>
        </div>
        <div className="mt-3 text-center text-xs text-white/40 bg-white/5 rounded-lg py-2">
          ตัวอย่าง: KBANK Call Strike 140 บาท
        </div>
        <div className="flex justify-between mt-2">
          {[120, 130, 140, 150, 160].map((p) => (
            <div key={p} className="text-center">
              <div className={`text-xs font-bold ${p < 140 ? 'text-red-400' : p === 140 ? 'text-yellow-400' : 'text-emerald-400'}`}>{p}</div>
              <div className={`text-[9px] mt-0.5 ${p < 140 ? 'text-red-400/60' : p === 140 ? 'text-yellow-400/60' : 'text-emerald-400/60'}`}>
                {p < 140 ? 'OTM' : p === 140 ? 'ATM' : 'ITM'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Terms */}
      <div className="space-y-3">
        {terms.map((t) => (
          <div key={t.term} className={`border rounded-xl p-4 ${colorMap[t.color]}`}>
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{t.icon}</span>
                <div>
                  <div className="font-bold text-white text-sm">{t.term}</div>
                  <div className="text-xs text-white/45">{t.thai}</div>
                </div>
              </div>
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${tagColorMap[t.color]}`}>
                {t.tag}
              </span>
            </div>
            <p className="text-white/65 text-xs mt-2 leading-relaxed">{t.desc}</p>
            <div className="mt-2 bg-black/20 rounded-lg px-3 py-2">
              <span className="text-[10px] text-white/40 font-medium">📌 ตัวอย่าง: </span>
              <span className="text-[10px] text-white/60">{t.example}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick cheatsheet */}
      <div className="bg-[#161c2a] border border-white/8 rounded-xl p-4">
        <div className="text-xs font-bold text-white/50 mb-3 uppercase tracking-wider">🗒️ สรุปย่อ</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {[
            ['Strike Price', 'ราคาใช้สิทธิ์'],
            ['Premium', 'เงินที่จ่ายซื้อ Option'],
            ['Expiry', 'วันหมดอายุ'],
            ['ITM', 'กำไรทันที'],
            ['ATM', 'ราคาพอดี'],
            ['OTM', 'ยังไม่คุ้ม'],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between bg-white/5 rounded-lg px-2.5 py-1.5">
              <span className="text-emerald-400 font-mono font-semibold">{k}</span>
              <span className="text-white/50">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
