const exchanges = [
  { id: "exchange-binance", name: "Binance" },
  { id: "exchange-okx", name: "OKX" },
  { id: "exchange-bybit", name: "Bybit" },
  { id: "exchange-hyperliquid", name: "Hyperliquid" }
];

const stats = [
  {
    id: "trust-strategies-count",
    label: "累计开发策略 / 系统",
    value: "XX+"
  },
  {
    id: "trust-markets-count",
    label: "覆盖交易对 / 市场",
    value: "XX+"
  },
  {
    id: "trust-capital-scale",
    label: "最大单策略实盘资金规模",
    value: "$XXXk+"
  }
];

export function Trust() {
  return (
    <section
      id="trust"
      className="border-y border-slate-800/60 bg-slate-950/40 py-12 md:py-16"
    >
      <div className="section-container grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.6fr)] md:items-center">
        <div className="max-w-md space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
            支持的交易所
          </p>
          <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
            与主流加密货币交易所深度对接
          </h2>
          <p className="mt-3 text-xs text-slate-300 sm:text-sm">
            支持在 Binance、OKX、Bybit、Hyperliquid 等交易所上落地策略与系统，覆盖合约与现货市场。
          </p>
        </div>
        <div className="flex-1 space-y-5 md:space-y-6">
          <div className="flex flex-wrap gap-3">
            {exchanges.map((ex) => (
              <div
                key={ex.id}
                id={ex.id}
                className="inline-flex items-center rounded-full border border-emerald-400/40 bg-slate-950/60 px-3 py-1 text-xs font-medium text-emerald-100"
              >
                {ex.name}
              </div>
            ))}
          </div>
          <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3 sm:text-sm">
            {stats.map((stat) => (
              <div
                key={stat.id}
                id={stat.id}
                className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3"
              >
                <p className="text-[11px] text-slate-400">{stat.label}</p>
                <p className="mt-1 text-sm font-semibold text-slate-50 sm:text-base">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trust;
