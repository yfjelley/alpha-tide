const services = [
  {
    id: "service-strategy-research",
    title: "定制量化策略研发",
    description:
      "基于 GMMA、Supertrend、ATR、因子模型等构建趋势、CTA、动量等多类型策略，提供完整回测与性能分析报告。"
  },
  {
    id: "service-execution-engine",
    title: "自动化交易系统开发",
    description:
      "为 Binance / OKX / Bybit / Hyperliquid 等交易所构建自动开平仓、调仓、止损止盈执行引擎，支持多账户与多策略并行。"
  },
  {
    id: "service-market-making-tools",
    title: "做市与网格参数工具",
    description:
      "结合波动率与深度数据，自动生成做市与网格策略参数，支持与 Hummingbot 等框架集成。"
  },
  {
    id: "service-ai-assistant",
    title: "AI 交易助手与风险监控",
    description:
      "基于多智能体（Multi-Agent）架构，提供策略说明、风险洞察、市场结构解读与实时风险预警。"
  }
];

export function Services() {
  return (
    <section id="services" className="page-section py-14 md:py-20">
      <div className="section-container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            我们能帮你做什么？
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            AlphaTide 提供覆盖策略生命周期全流程的量化技术服务，从策略研发到自动化执行与风控管理。
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="card-hover flex flex-col gap-2 p-6"
            >
              <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                {service.title}
              </h3>
              <p className="text-sm text-slate-300">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
