const products = [
  {
    id: "product-strategy-engine",
    name: "AlphaTide Strategy Engine",
    description:
      "多因子趋势引擎，支持 GMMA、Supertrend、ATR、量能与波动率等指标组合，适配多周期与多标的。"
  },
  {
    id: "product-executor",
    name: "AlphaTide Executor",
    description:
      "交易执行引擎，内置下单重试、限频保护、延迟监控与订单状态追踪，确保策略信号稳定落地。"
  },
  {
    id: "product-risk-manager",
    name: "AlphaTide Risk Manager",
    description:
      "组合级风险管理模块，支持动态 ATR 止损、尾随止盈、最大回撤控制与账户风险限额管理。"
  },
  {
    id: "product-maker-suite",
    name: "AlphaTide Maker Suite",
    description:
      "做市与网格参数生成套件，根据实时波动率与市场深度自动调整 spread、数量与挂单区间。"
  },
  {
    id: "product-ai-copilot",
    name: "AI Trading Copilot",
    description:
      "面向交易者与团队的 AI 助手，提供策略解释、回测解读、风险扫描与市场结构分析服务。"
  }
];

export function Products() {
  return (
    <section id="products" className="page-section border-y border-slate-800/60 bg-slate-950/40 py-14 md:py-20">
      <div className="section-container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            核心产品与引擎
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            我们将策略、执行、风控与做市能力封装成可复用的产品模块，方便你快速集成与扩展。
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              id={product.id}
              className="card-hover flex flex-col gap-2 p-5"
            >
              <h3 className="text-sm font-semibold text-emerald-300 sm:text-base">
                {product.name}
              </h3>
              <p className="text-sm text-slate-300">{product.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
