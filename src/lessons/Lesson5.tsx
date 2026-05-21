import { useState } from 'react'

const STRIKE = 30
const PREMIUM = 1.20
const MULTIPLIER = 100

export default function Lesson5() {
  const [stockPrice, setStockPrice] = useState(30)

  const intrinsicValue = Math.max(0, STRIKE - stockPrice)
  const pnl = (intrinsicValue - PREMIUM) * MULTIPLIER
  const breakeven = STRIKE - PREMIUM

  const isProfit = pnl > 0
  const isBreakeven = Math.abs(pnl) < 1

  const prices = Array.from({ length: 61 }, (_, i) => 10 + i)
  const getPayoff = (p: number) => (Math.max(0, STRIKE - p) - PREMIUM) * MULTIPLIER

  const chartMin = -200
  const chartMax = 1800
  const chartH = 160
  const chartW = 600

  const toY = (val: number) => {
    const ratio = (val - chartMin) / (chartMax - chartMin)
    return chartH - ratio * chartH
  }
  const toX = (price: number) => ((price - 10) / 60) * chartW

  const pathD = prices
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${toX(p)} ${toY(getPayoff(p))}`)
    .join(' ')

  const zeroY = toY(0)
  const currentX = toX(stockPrice)
  const currentPnlY = toY(pnl)
  const breakevenX = toX(breakeven)

  return (
    <div className="space-y-5">
      <div>
        <div className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-1">บทที่ 5</div>
        <h1 className="text-2xl font-bold text-white">Long Put Strategy</h1>
        <p className="text-white/50 mt-1 text-sm">ทำกำไรเมื่อราคาหุ้น<span className="text-red-400 font-semibold"> ลง</span></p>
      </div>

      {/* Comparison */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-emerald-950/30 border border-emerald-700/40 rounded-xl p-3 text-center">
          <div className="text-emerald-400 font-bold text-sm">Long CALL</div>
          <div className="text-2xl mt-1">📈</div>
          <div className="text-xs text-white/50 mt-1">กำไรตอนหุ้นขึ้น</div>
        </div>
        <div className="bg-red-950/30 border border-red-700/40 rounded-xl p-3 text-center ring-2 ring-red-500/40">
          <div className="text-red-400 font-bold text-sm">Long PUT ← เรากำลังเรียน</div>
          <div className="text-2xl mt-1">📉</div>
          <div className="text-xs text-white/50 mt-1">กำไรตอนหุ้นลง</div>
        </div>
      </div>

      {/* Setup */}
      <div className="bg-[#1a2235] border border-white/10 rounded-xl p-4">
        <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Setup ตัวอย่าง</div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/5 rounded-lg p-3 text-center">
            <div className="text-[10px] text-white/40 mb-1">หุ้น</div>
            <div className="font-bold text-white text-sm">PTT</div>
            <div className="text-[10px] text-white/40">Put Option</div>
          </div>
          <div className="bg-red-950/40 border border-red-800/40 rounded-lg p-3 text-center">
            <div className="text-[10px] text-red-400/70 mb-1">Strike Price</div>
            <div className="font-bold text-white text-sm">฿{STRIKE}</div>
            <div className="text-[10px] text-white/40">ATM</div>
          </div>
          <div className="bg-white/5 rounded-lg p-3 text-center">
            <div className="text-[10px] text-white/40 mb-1">Premium</div>
            <div className="font-bold text-white text-sm">฿{PREMIUM}</div>
            <div className="text-[10px] text-white/40">×100 = ฿{PREMIUM * 100}</div>
          </div>
        </div>
      </div>

      {/* Interactive slider */}
      <div className="bg-[#0d1117] border border-white/10 rounded-xl p-5">
        <div className="flex items-center justify-between mb-1">
          <div className="text-sm font-semibold text-white">ราคาหุ้น PTT ณ วันหมดอายุ</div>
          <div className="font-mono font-bold text-lg text-white">฿{stockPrice}</div>
        </div>
        <input
          type="range"
          min={10}
          max={70}
          value={stockPrice}
          onChange={(e) => setStockPrice(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #ef4444 0%, #ef4444 ${((stockPrice - 10) / 60) * 100}%, #374151 ${((stockPrice - 10) / 60) * 100}%, #374151 100%)`,
          }}
        />
        <div className="flex justify-between text-[10px] text-white/30 mt-1">
          <span>฿10</span>
          <span>฿30 (ATM)</span>
          <span>฿70</span>
        </div>

        {/* P&L display */}
        <div className={`mt-4 rounded-xl p-4 text-center transition-all duration-300 ${
          isProfit
            ? 'bg-emerald-950/60 border border-emerald-600/50'
            : isBreakeven
            ? 'bg-yellow-950/40 border border-yellow-600/40'
            : 'bg-red-950/50 border border-red-700/50'
        }`}>
          <div className="text-xs text-white/50 mb-1">กำไร / ขาดทุน (100 หุ้น)</div>
          <div className={`text-3xl font-black transition-all duration-300 ${
            isProfit ? 'text-emerald-400' : isBreakeven ? 'text-yellow-400' : 'text-red-400'
          }`}>
            {pnl >= 0 ? '+' : ''}{pnl.toLocaleString('th-TH', { minimumFractionDigits: 0 })} บาท
          </div>
          <div className="text-xs text-white/40 mt-1">
            {isProfit ? '🎉 กำไร! หุ้นลงตามที่คาด' : isBreakeven ? '⚖️ เสมอตัว' : `❌ ขาดทุน (สูงสุด -${PREMIUM * MULTIPLIER} บาท)`}
          </div>
        </div>

        {/* Key levels */}
        <div className="grid grid-cols-3 gap-2 mt-3 text-center">
          <div className="bg-white/5 rounded-lg px-2 py-2">
            <div className="text-[9px] text-white/40">Max Loss</div>
            <div className="text-xs font-bold text-red-400">-{(PREMIUM * MULTIPLIER).toFixed(0)} บาท</div>
          </div>
          <div className="bg-yellow-950/30 border border-yellow-700/30 rounded-lg px-2 py-2">
            <div className="text-[9px] text-yellow-400/70">Breakeven</div>
            <div className="text-xs font-bold text-yellow-400">฿{breakeven}</div>
          </div>
          <div className="bg-white/5 rounded-lg px-2 py-2">
            <div className="text-[9px] text-white/40">Max Profit</div>
            <div className="text-xs font-bold text-emerald-400">สูงสุด ฿{(STRIKE - PREMIUM) * MULTIPLIER}</div>
          </div>
        </div>
      </div>

      {/* SVG Payoff Chart */}
      <div className="bg-[#0d1117] border border-white/10 rounded-xl p-4">
        <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">กราฟ Payoff</div>
        <div className="overflow-hidden rounded-lg">
          <svg viewBox={`0 0 ${chartW} ${chartH + 20}`} className="w-full" style={{ height: 180 }}>
            <line x1="0" y1={zeroY} x2={chartW} y2={zeroY} stroke="#374151" strokeWidth="1" strokeDasharray="4,4" />
            <line x1={breakevenX} y1="0" x2={breakevenX} y2={chartH} stroke="#eab308" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />

            {/* Loss clip */}
            <clipPath id="lossClip2">
              <rect x="0" y={zeroY} width={chartW} height={chartH - zeroY} />
            </clipPath>
            <path d={pathD} fill="none" stroke="#ef4444" strokeWidth="2.5" clipPath="url(#lossClip2)" />

            {/* Profit clip */}
            <clipPath id="profitClip2">
              <rect x="0" y="0" width={chartW} height={zeroY} />
            </clipPath>
            <path d={pathD} fill="none" stroke="#10b981" strokeWidth="2.5" clipPath="url(#profitClip2)" />

            <circle cx={currentX} cy={currentPnlY} r="5" fill={isProfit ? '#10b981' : isBreakeven ? '#eab308' : '#ef4444'} />
            <line x1={currentX} y1={currentPnlY} x2={currentX} y2={zeroY} stroke={isProfit ? '#10b981' : '#ef4444'} strokeWidth="1.5" strokeDasharray="2,2" opacity="0.5" />

            <text x={breakevenX} y={chartH + 15} textAnchor="middle" fill="#eab308" fontSize="9">BE ฿{breakeven}</text>
            <text x="5" y={zeroY - 4} fill="#6b7280" fontSize="9">฿0</text>
          </svg>
        </div>
        <div className="flex justify-center gap-5 mt-2 text-[10px]">
          <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-emerald-400" /><span className="text-white/50">กำไร</span></div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-red-400" /><span className="text-white/50">ขาดทุน</span></div>
          <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 bg-yellow-400" /><span className="text-white/50">Breakeven</span></div>
        </div>
      </div>

      {/* Call vs Put compare */}
      <div className="bg-[#161c2a] border border-white/8 rounded-xl p-4">
        <h3 className="font-bold text-white text-sm mb-3">Call vs Put เปรียบเทียบ</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-white/10">
                <td className="pb-2 text-white/40"></td>
                <td className="pb-2 text-emerald-400 font-bold text-center">Long Call</td>
                <td className="pb-2 text-red-400 font-bold text-center">Long Put</td>
              </tr>
            </thead>
            <tbody className="space-y-1">
              {[
                ['มุมมอง', 'หุ้นขึ้น ↑', 'หุ้นลง ↓'],
                ['กำไร', 'ไม่จำกัด', 'จำกัด (หุ้น→0)'],
                ['ขาดทุน', 'Premium เท่านั้น', 'Premium เท่านั้น'],
                ['Breakeven', 'Strike + Premium', 'Strike − Premium'],
              ].map(([label, call, put]) => (
                <tr key={label} className="border-b border-white/5">
                  <td className="py-1.5 text-white/40 font-medium">{label}</td>
                  <td className="py-1.5 text-center text-white/70">{call}</td>
                  <td className="py-1.5 text-center text-white/70">{put}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
