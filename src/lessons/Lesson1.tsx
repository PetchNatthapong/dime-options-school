export default function Lesson1() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1">บทที่ 1</div>
        <h1 className="text-2xl font-bold text-white">Option คืออะไร?</h1>
        <p className="text-white/50 mt-1 text-sm">ทำความเข้าใจพื้นฐานก่อนลงทุนจริง</p>
      </div>

      {/* Analogy card */}
      <div className="bg-[#1a2235] border border-white/10 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-bold text-white mb-1">เข้าใจง่าย ๆ ผ่านชีวิตจริง</div>
            <p className="text-white/65 text-sm leading-relaxed">
              ลองนึกภาพว่าคุณอยากจอง<span className="text-yellow-400 font-semibold">คอนโดราคา 3,000,000 บาท</span>
              ไว้ก่อน โดยจ่ายเงินจอง <span className="text-emerald-400 font-semibold">50,000 บาท</span> (ไม่ใช่ราคาเต็ม)
            </p>
            <p className="text-white/65 text-sm leading-relaxed mt-2">
              ถ้า 3 เดือนต่อมา ราคาคอนโดขึ้นเป็น 3,500,000 บาท
              คุณก็ <span className="text-emerald-400 font-semibold">ใช้สิทธิ์ซื้อ</span> ในราคาเดิม 3,000,000 บาท ได้กำไร!
            </p>
            <p className="text-white/65 text-sm leading-relaxed mt-2">
              แต่ถ้าราคาคอนโดลงเหลือ 2,800,000 บาท คุณก็แค่
              <span className="text-red-400 font-semibold"> ไม่ใช้สิทธิ์</span> เสียแค่เงินจอง 50,000 บาท
            </p>
            <div className="mt-3 text-xs text-white/40 bg-white/5 rounded-lg px-3 py-2">
              👉 เงินจอง = <span className="text-emerald-400">Premium</span> | ราคาคอนโด = <span className="text-blue-400">Strike Price</span>
            </div>
          </div>
        </div>
      </div>

      {/* Call vs Put */}
      <div>
        <h2 className="text-sm font-bold text-white/60 uppercase tracking-wider mb-3">Option มี 2 ประเภท</h2>
        <div className="grid grid-cols-2 gap-3">
          {/* Call */}
          <div className="bg-emerald-950/50 border border-emerald-700/50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                <span className="text-emerald-400 font-black text-sm">C</span>
              </div>
              <div>
                <div className="font-bold text-white text-sm">CALL</div>
                <div className="text-[10px] text-emerald-400/70">สิทธิ์ซื้อ</div>
              </div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed mb-3">
              ให้สิทธิ์คุณ<span className="text-emerald-400 font-semibold">ซื้อ</span>หุ้นที่ราคาที่ตกลงไว้
            </p>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-emerald-400">▲</span>
                <span className="text-white/70">ราคาหุ้นขึ้น = กำไร</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-red-400">▼</span>
                <span className="text-white/70">ราคาหุ้นลง = เสียแค่ Premium</span>
              </div>
            </div>
            <div className="mt-3 bg-emerald-900/30 rounded-lg p-2">
              <div className="text-[10px] text-emerald-400/80 font-medium">ตัวอย่าง KBANK Call</div>
              <div className="text-[10px] text-white/50 mt-0.5">ซื้อสิทธิ์ซื้อ KBANK ที่ 140 บาท</div>
              <div className="text-[10px] text-white/50">จ่าย Premium: 3.50 บาท/หุ้น</div>
            </div>
          </div>

          {/* Put */}
          <div className="bg-red-950/30 border border-red-800/40 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                <span className="text-red-400 font-black text-sm">P</span>
              </div>
              <div>
                <div className="font-bold text-white text-sm">PUT</div>
                <div className="text-[10px] text-red-400/70">สิทธิ์ขาย</div>
              </div>
            </div>
            <p className="text-white/60 text-xs leading-relaxed mb-3">
              ให้สิทธิ์คุณ<span className="text-red-400 font-semibold">ขาย</span>หุ้นที่ราคาที่ตกลงไว้
            </p>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-emerald-400">▲</span>
                <span className="text-white/70">ราคาหุ้นลง = กำไร</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-red-400">▼</span>
                <span className="text-white/70">ราคาหุ้นขึ้น = เสียแค่ Premium</span>
              </div>
            </div>
            <div className="mt-3 bg-red-900/20 rounded-lg p-2">
              <div className="text-[10px] text-red-400/80 font-medium">ตัวอย่าง PTT Put</div>
              <div className="text-[10px] text-white/50 mt-0.5">ซื้อสิทธิ์ขาย PTT ที่ 30 บาท</div>
              <div className="text-[10px] text-white/50">จ่าย Premium: 1.20 บาท/หุ้น</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Options */}
      <div className="bg-[#161c2a] border border-white/8 rounded-xl p-5">
        <h3 className="font-bold text-white mb-3 text-sm">ทำไมต้องเล่น Options?</h3>
        <div className="space-y-3">
          {[
            { icon: '🎯', title: 'ใช้เงินน้อยกว่า', desc: 'ควบคุมหุ้น 100 หุ้น ด้วยเงินเพียง Premium เท่านั้น' },
            { icon: '🛡️', title: 'จำกัดความเสี่ยง', desc: 'ขาดทุนสูงสุดแค่ Premium ที่จ่ายไป ไม่เกินกว่านั้น' },
            { icon: '📈', title: 'ทำกำไรได้ทั้งขาขึ้น-ลง', desc: 'Call กำไรตอนหุ้นขึ้น, Put กำไรตอนหุ้นลง' },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="text-xl mt-0.5">{item.icon}</span>
              <div>
                <div className="text-sm font-semibold text-white">{item.title}</div>
                <div className="text-xs text-white/50 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key point */}
      <div className="bg-amber-950/30 border border-amber-700/40 rounded-xl px-4 py-3 flex gap-2">
        <span className="text-amber-400 text-lg">⚠️</span>
        <div className="text-xs text-amber-200/80 leading-relaxed">
          <span className="font-bold text-amber-400">จำไว้: </span>
          ผู้ซื้อ Option <span className="font-semibold">มีสิทธิ์ แต่ไม่มีพันธะ</span> ที่จะต้องซื้อหรือขายหุ้น
          ถ้าไม่ได้กำไร ก็แค่ไม่ใช้สิทธิ์
        </div>
      </div>
    </div>
  )
}
