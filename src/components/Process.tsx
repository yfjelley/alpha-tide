import { useInView } from "../hooks/useInView";

const steps = [
  {
    id: "process-step-1",
    title: "Step 1 — 需求沟通",
    description:
      "了解你的资金规模、交易所、风险承受度与策略方向，梳理可落地的目标。"
  },
  {
    id: "process-step-2",
    title: "Step 2 — 方案设计与报价",
    description:
      "输出策略与系统方案文档，包含架构、技术栈、预期交付物与时间计划，并给出报价区间。"
  },
  {
    id: "process-step-3",
    title: "Step 3 — 开发与回测验证",
    description:
      "按阶段交付核心功能与回测报告，与你一起评估策略表现与风控合理性。"
  },
  {
    id: "process-step-4",
    title: "Step 4 — 实盘部署与监控",
    description:
      "帮你部署到服务器或云环境，配置监控与日志系统，确保策略稳定运行。"
  },
  {
    id: "process-step-5",
    title: "Step 5 — 持续优化（可选）",
    description:
      "提供按月维护与优化服务，包括参数微调、新标的接入与风险规则更新。"
  }
];

export function Process() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="process" className="page-section border-y border-slate-800/60 bg-slate-950/40 py-14 md:py-20">
      <div className="section-container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            合作流程
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            我们用清晰的流程，帮助你把交易想法在短时间内变成可运行的量化系统。
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-8 space-y-4 md:mt-10 ${inView ? "fade-in-up in-view" : "fade-in-up"}`}
        >
          {steps.map((step, index) => (
            <article
              key={step.id}
              id={step.id}
              className="relative flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/20 text-xs font-semibold text-emerald-300">
                  {index + 1}
                </div>
                {index !== steps.length - 1 && (
                  <div className="mt-1 h-full w-px flex-1 bg-gradient-to-b from-emerald-400/50 to-transparent" />
                )}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 sm:text-sm">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
