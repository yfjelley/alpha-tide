const cases = [
  {
    id: "case-multi-factor-trend",
    title: "多因子 4H 趋势策略",
    exchange: "交易所：Binance USDT 永续",
    content:
      "基于 GMMA + Supertrend + ATR 的 4 小时趋势跟随策略，支持自动选币与组合调仓。",
    highlight:
      "通过动态止损和尾随止盈控制回撤，并在回测中显著优于等权持有。"
  },
  {
    id: "case-mm-parameter-generator",
    title: "做市参数自动生成器",
    exchange: "交易所：Hyperliquid / Binance",
    content:
      "根据波动率、深度与资金费率自动生成做市参数，并同步到 Hummingbot 配置。",
    highlight:
      "降低人工调参时间，同时在高波动时自动加宽 spread 以控制风险。"
  },
  {
    id: "case-copy-trading-system",
    title: "多账户合约跟单系统",
    exchange: "",
    content:
      "实现主账户交易→多个子账户自动跟单，支持不同比例与风险上限配置。",
    highlight:
      "帮助客户管理多账户资金，实现统一策略与风险管理。"
  }
];

export function Cases() {
  return (
    <section id="cases" className="py-12 md:py-16">
      <div className="section-container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            部分项目与方案示例
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            出于保密原因，这里仅展示简化后的结构与结果，不涉及具体账户与标的。
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="card-hover flex flex-col justify-between p-5"
            >
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  {c.title}
                </h3>
                {c.exchange && (
                  <p className="text-xs text-emerald-300">{c.exchange}</p>
                )}
                <p className="text-sm text-slate-300">{c.content}</p>
              </div>
              <p className="mt-3 text-xs text-emerald-200">{c.highlight}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cases;
