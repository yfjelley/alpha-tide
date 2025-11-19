const stats = [
  {
    id: "trust-clients-count",
    value: "100+",
    label: "累计服务客户"
  },
  {
    id: "trust-systems-count",
    value: "300+",
    label: "累计交付策略 / 系统"
  },
  {
    id: "trust-platforms-count",
    value: "10+",
    label: "覆盖交易平台与生态"
  }
];

export function Trust() {
  return (
    <section
      id="trust"
      className="page-section border-y border-slate-800/60 bg-slate-950/40 py-14 md:py-20"
    >
      <div className="section-container">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
            我们的影响力
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            我们的影响力
          </h2>
          <p className="mt-3 text-xs text-slate-300 sm:text-sm">
            数据来自 AlphaTide 全栈量化系统的真实交付成果。
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              id={stat.id}
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/70 px-6 py-5 text-center"
            >
              <div className="text-2xl font-semibold text-emerald-300 sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs text-slate-200 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust;
