import { FormEvent, useState } from "react";

export type ContactFormData = {
  name: string;
  email: string;
  telegram: string;
  experience: string;
  coreProblem: string;
  capital: string;
  message: string;
};

type ContactProps = {
  onSubmit?: (data: ContactFormData) => void;
};

const initialForm: ContactFormData = {
  name: "",
  email: "",
  telegram: "",
  experience: "",
  coreProblem: "",
  capital: "",
  message: ""
};

export function Contact({ onSubmit }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialForm);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleChange =
    (field: keyof ContactFormData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const value = event.target.value;
      setFormData((prev) => ({ ...prev, [field]: value }));
    };

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "请输入姓名。";
    }
    if (!formData.email.trim()) {
      newErrors.email = "请输入邮箱地址。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "请输入有效的邮箱地址。";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    console.log("Contact form data:", formData);
    if (onSubmit) {
      onSubmit(formData);
    }

    alert("感谢你的提交，我们会尽快与您联系。");
    setFormData(initialForm);
    setErrors({});
  };

  return (
    <section id="contact" className="page-section py-14 md:py-20">
      <div className="section-container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            告诉我们你的想法，从这里开始构建你的量化系统
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:text-base">
            简单介绍你的交易背景与需求，我们会在合理时间内与您联系，并给出初步方案建议。
          </p>
          <p
            id="contact-response-time"
            className="mt-2 text-xs text-slate-400 sm:text-sm"
          >
            提交后我们会在 24–48 小时内通过 Email / Telegram 与你联系。
          </p>
        </div>

        <div className="mt-8 max-w-2xl rounded-2xl border border-slate-800 bg-slate-950/70 p-6 md:mt-10 md:p-8">
          <form id="contact-form" onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium text-slate-200"
                >
                  Name / 姓名<span className="text-emerald-300">*</span>
                </label>
                <input
                  id="contact-name"
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-400/40 placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2"
                  placeholder="例如：张三 / Alpha Fund"
                  value={formData.name}
                  onChange={handleChange("name")}
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium text-slate-200"
                >
                  Email<span className="text-emerald-300">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-400/40 placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange("email")}
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-telegram"
                  className="block text-xs font-medium text-slate-200"
                >
                  Telegram / 联系方式（可选）
                </label>
                <input
                  id="contact-telegram"
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-400/40 placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2"
                  placeholder="@yourhandle / WeChat / 其他"
                  value={formData.telegram}
                  onChange={handleChange("telegram")}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-experience"
                  className="block text-xs font-medium text-slate-200"
                >
                  你目前的交易经验
                </label>
                <select
                  id="contact-experience"
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-400/40 focus:border-emerald-400 focus:ring-2"
                  value={formData.experience}
                  onChange={handleChange("experience")}
                >
                  <option value="">请选择</option>
                  <option value="新手交易者">新手交易者</option>
                  <option value="有一定经验">有一定经验</option>
                  <option value="专业交易者 / 团队">专业交易者 / 团队</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-core-problem"
                  className="block text-xs font-medium text-slate-200"
                >
                  你最想解决的核心问题是什么？
                </label>
                <select
                  id="contact-core-problem"
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-400/40 focus:border-emerald-400 focus:ring-2"
                  value={formData.coreProblem}
                  onChange={handleChange("coreProblem")}
                >
                  <option value="">请选择</option>
                  <option value="策略落地">策略落地（从想法到可运行系统）</option>
                  <option value="自动化执行">自动化执行（减少人工盯盘）</option>
                  <option value="风控">风控与风险管理</option>
                  <option value="做市">做市与网格策略</option>
                  <option value="跟单系统">多账户跟单系统</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="contact-capital"
                  className="block text-xs font-medium text-slate-200"
                >
                  资金规模区间（可选）
                </label>
                <select
                  id="contact-capital"
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-400/40 focus:border-emerald-400 focus:ring-2"
                  value={formData.capital}
                  onChange={handleChange("capital")}
                >
                  <option value="">请选择</option>
                  <option value="< $10,000">&lt; $10,000</option>
                  <option value="$10,000 – $50,000">$10,000 – $50,000</option>
                  <option value="$50,000 – $200,000">$50,000 – $200,000</option>
                  <option value="$200,000+">$200,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs font-medium text-slate-200"
              >
                简要描述你的需求
              </label>
              <textarea
                id="contact-message"
                className="mt-1 min-h-[120px] w-full rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none ring-emerald-400/40 placeholder:text-slate-500 focus:border-emerald-400 focus:ring-2"
                placeholder="例如：希望在 Binance 上构建多因子趋势策略，资金规模约 $50,000，主要关注回撤控制与稳定收益。"
                value={formData.message}
                onChange={handleChange("message")}
              />
            </div>

            <div className="pt-2">
              <button
                id="contact-submit-button"
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-medium text-slate-900 shadow-accent-soft transition hover:bg-emerald-300 md:w-auto"
              >
                提交需求
              </button>
            </div>
          </form>

          <div className="mt-6 border-t border-slate-800 pt-4 text-xs text-slate-300">
            <p>
              Email：{" "}
              <a
                id="contact-email-link"
                href="mailto:contact@alphatide.tech"
                className="text-emerald-300 hover:text-emerald-200"
              >
                contact@alphatide.tech
              </a>
            </p>
            <p className="mt-1">
              Telegram：{" "}
              <a
                id="contact-telegram-link"
                href="https://t.me/alphatide"
                className="text-emerald-300 hover:text-emerald-200"
              >
                @alphatide
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
