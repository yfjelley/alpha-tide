const reasons = [
  "AI 驱动的多智能体架构，将策略研究、执行与风控自动连接起来。",
  "专注 Binance / OKX / Bybit / Hyperliquid 等主流合约与现货市场。",
  "具备从个人交易者到小型基金的实盘落地经验，而非纯理论研究。",
  "可扩展的策略与系统框架，支持你在未来逐步增加资金与策略。",
  "透明的技术实现与文档，让你真正理解系统在做什么。"
];

export function WhyUs() {
  return (
    <section id="why-us" className="page-section py-14 md:py-20">
      <div className="section-container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            为什么选择 AlphaTide？
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            我们不仅写交易脚本，而是为你构建可持续演进的量化交易系统。
          </p>
        </div>

        <ul className="mt-8 space-y-4 text-sm text-slate-200 md:mt-10">
          {reasons.map((reason, index) => (
            <li
              key={index}
              id={`why-us-reason-${index + 1}`}
              className="flex gap-3"
            >
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20 text-xs text-emerald-300">
                ✓
              </span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyUs;
