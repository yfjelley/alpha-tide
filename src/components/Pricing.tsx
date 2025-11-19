const plans = [
  {
    id: "pricing-one-off",
    name: "单次项目制",
    target:
      "适用对象：有明确策略想法，希望一次性落地为可运行系统的交易者或团队。",
    scope:
      "范围：包含策略开发、回测、基础风控与实盘部署。",
    price: "价格区间：USD $1,500 – $10,000+"
  },
  {
    id: "pricing-retainer",
    name: "持续优化与维护",
    target:
      "适用对象：希望在实盘中持续迭代策略与系统的客户。",
    scope:
      "内容：按月提供监控、参数调整、风控优化与新功能开发。",
    price: "价格：月费，按具体需求定制。"
  },
  {
    id: "pricing-enterprise",
    name: "企业级定制",
    target:
      "适用对象：资金规模较大、需要多策略、多账户与团队协作支持的客户。",
    scope:
      "内容：完整量化交易基础设施搭建与团队工作流支持。",
    price: "价格：需单独沟通评估。"
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="page-section border-y border-slate-800/60 bg-slate-950/40 py-14 md:py-20">
      <div className="section-container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            合作方式与大致价格区间
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            实际费用取决于策略复杂度与系统规模，以下价格区间仅供参考，具体可在沟通后确认。
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={plan.id}
              id={plan.id}
              className={`card-hover flex flex-col p-5 ${
                index === 1 ? "border-emerald-400/70 bg-slate-950/80" : ""
              }`}
            >
              <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                {plan.name}
              </h3>
              <p className="mt-3 text-xs text-slate-300 sm:text-sm">
                {plan.target}
              </p>
              <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                {plan.scope}
              </p>
              <p className="mt-3 text-xs font-medium text-emerald-300 sm:text-sm">
                {plan.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
