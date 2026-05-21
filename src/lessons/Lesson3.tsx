export default function Lesson3() {
  const chain = [
    { strike: 130, callPremium: '12.50', callOI: '2,340', putPremium: '0.80', putOI: '890', moneyness: 'ITM' },
    { strike: 135, callPremium: '8.00', callOI: '5,120', putPremium: '1.50', putOI: '1,230', moneyness: 'ITM' },
    { strike: 140, callPremium: '4.20', callOI: '8,450', putPremium: '3.80', putOI: '7,890', moneyness: 'ATM' },
    { strike: 145, callPremium: '1.80', callOI: '6,230', putPremium: '7.50', putOI: '4,560', moneyness: 'OTM' },
    { strike: 150, callPremium: '0.65', callOI: '3,100', putPremium: '12.00', putOI: '2,100', moneyness: 'OTM' },
  ]

  return (
    <div className="space-y-5">
      <div>
        <div className="text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1">บทที่ 3</div>
        <h1 className="text-2xl font-bold text-white">อ่าน Options Chain บน DIME</h1>
        <p className="text-white/50 mt-1 text-sm">เข้าใจตารางก่อนกดซื้อ</p>
      </div>

      {/* DIME mockup */}
      <div className="flex justify-center">
        <div className="w-64 bg-[#0a0f1a] border border-white/15 rounded-3xl overflow-hidden shadow-2xl shadow-black/60">
          {/* Phone header */}
          <div className="bg-[#111827] px-4 pt-4 pb-3">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center text-xs font-black text-black">D</div>
                <span className="text-xs font-bold text-white">DIME</span>
              </div>
              <div className="text-[10px] text-white/40">10:24</div>
            </div>
            <div className="text-center">
              <div className="text-base font-black text-white">KBANK</div>
              <div className="text-xs text-white/50">ธนาคารกสิกรไทย</div>
              <div className="text-xl font-bold text-emerald-400 mt-1">฿140.00</div>
              <div className="text-[10px] text-emerald-400/80">+2.50 (+1.82%) ▲</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-white/10 bg-[#0d1520]">
            {['Info', 'Options', 'Chart'].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-2 text-[11px] font-semibold ${tab === 'Options' ? 'text-emerald-400 border-b-2 border-emerald-400' : 'text-white/35'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Options header */}
          <div className="px-3 pt-3 pb-2 bg-[#0d1520]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] text-white/50">หมดอายุ</span>
              <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-md px-2 py-0.5">
                <span className="text-[10px] text-emerald-400 font-bold">29 พ.ค. 2568</span>
              </div>
            </div>

            {/* Mini chain header */}
            <div className="grid grid-cols-3 text-[9px] text-white/30 text-center font-semibold mb-1">
              <span className="text-emerald-400/70">CALL</span>
              <span>Strike</span>
              <span className="text-red-400/70">PUT</span>
            </div>

            {/* Mini chain rows */}
            {chain.map((row) => (
              <div
                key={row.strike}
                className={`grid grid-cols-3 text-[9px] text-center py-1 rounded-md mb-0.5 ${
                  row.moneyness === 'ATM'
                    ? 'bg-yellow-500/10 border border-yellow-500/20'
                    : 'bg-white/3'
                }`}
              >
                <span className={`font-semibold ${row.moneyness === 'ITM' ? 'text-emerald-400' : 'text-emerald-400/60'}`}>
                  {row.callPremium}
                </span>
                <span className={`font-bold ${row.moneyness === 'ATM' ? 'text-yellow-400' : 'text-white/70'}`}>
                  {row.strike}
                </span>
                <span className={`font-semibold ${row.moneyness === 'OTM' ? 'text-red-400' : 'text-red-400/60'}`}>
                  {row.putPremium}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="px-3 pb-4 bg-[#0d1520]">
            <div className="flex gap-2 mt-2">
              <button className="flex-1 py-2 bg-emerald-500/20 border border-emerald-500/40 rounded-lg text-[10px] font-bold text-emerald-400">
                ซื้อ Call
              </button>
              <button className="flex-1 py-2 bg-red-500/20 border border-red-500/40 rounded-lg text-[10px] font-bold text-red-400">
                ซื้อ Put
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Steps to navigate DIME */}
      <div className="bg-[#1a2235] border border-white/10 rounded-xl p-4">
        <h3 className="font-bold text-white text-sm mb-3">วิธีเข้า Options Chain บน DIME</h3>
        <div className="space-y-2">
          {[
            { step: 1, action: 'เปิดแอป DIME', detail: 'Login ด้วย User & Password' },
            { step: 2, action: 'ค้นหาหุ้น', detail: 'พิมพ์ชื่อหุ้น เช่น "KBANK" หรือ "PTT"' },
            { step: 3, action: 'กดแท็บ "Options"', detail: 'ดูที่แถบด้านบนของหน้า Quote' },
            { step: 4, action: 'เลือกวันหมดอายุ', detail: 'เลือกเดือนที่ต้องการ (แนะนำเดือนที่ใกล้สุด)' },
            { step: 5, action: 'เลือก Strike & กด Buy', detail: 'เลือก Call หรือ Put ตามมุมมอง' },
          ].map((s) => (
            <div key={s.step} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[10px] font-bold text-emerald-400">{s.step}</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{s.action}</div>
                <div className="text-xs text-white/45 mt-0.5">{s.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reading the chain */}
      <div className="bg-[#0d1117] border border-white/10 rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-white/8 bg-[#111827]">
          <div className="text-xs font-bold text-white">Options Chain — KBANK (ราคาปัจจุบัน ฿140)</div>
          <div className="text-[10px] text-white/40 mt-0.5">หมดอายุ 29 พ.ค. 2568</div>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-7 text-[10px] text-white/40 font-semibold px-3 py-2 border-b border-white/8">
          <span className="col-span-1 text-emerald-400/80">Premium</span>
          <span className="col-span-1 text-emerald-400/80 text-right">OI</span>
          <span className="col-span-1" />
          <span className="col-span-1 text-center font-bold text-white/60">Strike</span>
          <span className="col-span-1" />
          <span className="col-span-1 text-red-400/80 text-right">OI</span>
          <span className="col-span-1 text-red-400/80 text-right">Premium</span>
        </div>

        {chain.map((row) => (
          <div
            key={row.strike}
            className={`grid grid-cols-7 text-xs px-3 py-2.5 border-b border-white/5 items-center ${
              row.moneyness === 'ATM' ? 'bg-yellow-500/8' : row.moneyness === 'ITM' ? 'bg-emerald-950/20' : ''
            }`}
          >
            <span className="col-span-1 text-emerald-400 font-semibold">{row.callPremium}</span>
            <span className="col-span-1 text-white/35 text-right text-[10px]">{row.callOI}</span>
            <span className="col-span-1" />
            <div className="col-span-1 text-center">
              <span className={`font-bold text-sm ${row.moneyness === 'ATM' ? 'text-yellow-400' : 'text-white/80'}`}>
                {row.strike}
              </span>
              {row.moneyness === 'ATM' && (
                <div className="text-[8px] text-yellow-400/70 font-semibold">ATM</div>
              )}
            </div>
            <span className="col-span-1" />
            <span className="col-span-1 text-white/35 text-right text-[10px]">{row.putOI}</span>
            <span className="col-span-1 text-red-400 font-semibold text-right">{row.putPremium}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="bg-white/5 rounded-lg p-3">
          <div className="font-bold text-white mb-1">OI คืออะไร?</div>
          <div className="text-white/50 text-[11px]">Open Interest = จำนวน contracts ที่ยังเปิดอยู่ในตลาด ยิ่งมาก ยิ่ง Liquid</div>
        </div>
        <div className="bg-white/5 rounded-lg p-3">
          <div className="font-bold text-white mb-1">เลือก Strike ไหนดี?</div>
          <div className="text-white/50 text-[11px]">มือใหม่แนะนำ ATM หรือ OTM ใกล้ ๆ Premium ไม่แพงเกินไป</div>
        </div>
      </div>
    </div>
  )
}
