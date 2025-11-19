type HeroProps = {
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
};

export function Hero({ onPrimaryClick, onSecondaryClick }: HeroProps) {
  return (
    <section
      id="hero"
      className="hero-gradient border-b border-slate-800/60 py-14 text-slate-50 md:py-20"
    >
      <div className="section-container flex flex-col items-center gap-12 md:flex-row md:items-stretch">
        {/* Text side */}
        <div className="max-w-xl space-y-6">
          <p className="inline-flex items-center rounded-full border border-emerald-400/40 bg-slate-950/40 px-3 py-1 text-xs font-medium text-emerald-200 backdrop-blur">
            AI 驱动 · 量化基础设施 · 实盘落地
          </p>
          <p
            id="hero-target-audience"
            className="text-xs text-emerald-100/90 sm:text-sm"
          >
            面向有真实资金的个人交易者、小型基金与量化团队，提供从策略到执行的一站式量化系统搭建服务。
          </p>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              AI 驱动的全能量化交易系统
            </h1>
            <p className="text-sm text-slate-300 sm:text-base">
              AlphaTide Technologies 为你提供从策略研究、回测优化到自动执行与风险管理的一站式量化基础设施。
            </p>
            <p
              id="hero-results-snippet"
              className="text-xs text-slate-300 sm:text-sm"
            >
              降低回撤、减少人工盯盘时间，把策略从 Excel / TradingView 变成可执行的实盘系统。
            </p>
            <p className="text-xs text-slate-400 sm:text-sm">
              AI-powered quant systems for modern trading.
            </p>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              id="hero-primary-cta"
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-medium text-slate-900 shadow-accent-soft transition hover:bg-emerald-300"
              onClick={onPrimaryClick}
            >
              预约免费咨询
            </button>
            <button
              id="hero-secondary-cta"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300/60 bg-transparent px-6 py-3 text-sm font-medium text-emerald-100 transition hover:bg-slate-900/60"
              onClick={onSecondaryClick}
            >
              查看服务概览
            </button>
          </div>

          <p className="text-xs text-slate-400">
            面向有资金的个人交易者与小型基金，帮助你在合理风险下，把交易想法快速落地为可运行的量化系统。
          </p>
        </div>

        {/* Visual side */}
        <div className="w-full max-w-md md:ml-auto">
          <div className="card-hover relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-emerald-900/50 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.25),transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.25),transparent_60%)]" />
            <div className="relative space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-emerald-200">
                Quant Flow
              </p>
              <p className="text-lg font-semibold text-slate-50">
                Strategy → Backtest → Execution → Risk
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-200">
                <div className="rounded-lg bg-slate-900/70 p-3">
                  <p className="font-medium text-emerald-200">Strategy</p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    GMMA / Supertrend / ATR 因子组合，支持多周期。
                  </p>
                </div>
                <div className="rounded-lg bg-slate-900/70 p-3">
                  <p className="font-medium text-emerald-200">Backtest</p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    全量回测与性能分析，控制回撤与风险暴露。
                  </p>
                </div>
                <div className="rounded-lg bg-slate-900/70 p-3">
                  <p className="font-medium text-emerald-200">Execution</p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    多交易所执行引擎，智能调仓与风控指令。
                  </p>
                </div>
                <div className="rounded-lg bg-slate-900/70 p-3">
                  <p className="font-medium text-emerald-200">Risk</p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    组合级风险管理与多账户监控，支持动态止损。
                  </p>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">
                目标：在可控风险下提升长期风险收益比，而不是追逐短期暴利。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
