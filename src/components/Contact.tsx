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
  onSubmit?: (data: ContactFormData) => Promise<void> | void;
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  type ContactChannel = "email" | "telegram" | "wechat";

  const trackGaEvent = (action: string, params: Record<string, unknown>) => {
    try {
      if (typeof window === "undefined") return;
      const gtag = (window as any).gtag;
      if (typeof gtag === "function") {
        gtag("event", action, params);
      }
    } catch {
      // ignore tracking errors
    }
  };

  const handleContactClick = (channel: ContactChannel) => {
    trackGaEvent("contact_click", {
      event_category: "lead",
      event_label: channel,
      value: 1
    });
  };

  const handleContactCopy = async (channel: ContactChannel, value: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      trackGaEvent("contact_copy", {
        event_category: "lead",
        event_label: channel,
        value: 1
      });

      const labelMap: Record<ContactChannel, string> = {
        email: "邮箱地址",
        telegram: "Telegram 用户名",
        wechat: "微信号"
      };
      alert(`${labelMap[channel]}已复制到剪贴板：${value}`);
    } catch (error) {
      console.error("复制联系方式失败：", error);
    }
  };

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    if (isSubmitting) return;

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      console.log("Contact form data:", formData);
      if (onSubmit) {
        await onSubmit(formData);
      }

      alert(
        "提交成功，我们已收到你的需求，并已向你的邮箱发送自动确认邮件，请注意查收（如未收到，请检查垃圾邮箱）。"
      );

      // GA4 事件：表单提交成功
      trackGaEvent("contact_submit", {
        event_category: "lead",
        event_label: "contact_form",
        value: 1,
        email: formData.email,
        name: formData.name,
        telegram: formData.telegram || undefined
      });

      setFormData(initialForm);
      setErrors({});
    } catch (error) {
      console.error("提交失败：", error);
      setSubmitError("提交失败，请稍后重试，或直接通过 Email / Telegram 与我们联系。");
    } finally {
      setIsSubmitting(false);
    }
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
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-medium text-slate-900 shadow-accent-soft transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
              >
                {isSubmitting ? "提交中..." : "提交需求"}
              </button>
              {submitError && (
                <p className="mt-2 text-xs text-red-400">{submitError}</p>
              )}
            </div>
          </form>

          <div className="mt-6 border-t border-slate-800 pt-4 text-xs text-slate-300">
            <p>
              Email：{" "}
              <a
                id="contact-email-link"
                href="mailto:yfjelley@gmail.com"
                className="text-emerald-300 hover:text-emerald-200"
                onClick={() => handleContactClick("email")}
              >
                yfjelley@gmail.com
              </a>
              <button
                type="button"
                className="ml-2 rounded-full border border-emerald-400/40 px-2 py-0.5 text-[11px] text-emerald-200 hover:border-emerald-300 hover:text-emerald-100"
                onClick={() => handleContactCopy("email", "yfjelley@gmail.com")}
              >
                复制
              </button>
            </p>
            <p className="mt-1">
              Telegram：{" "}
              <a
                id="contact-telegram-link"
                href="https://t.me/yf16881"
                className="text-emerald-300 hover:text-emerald-200"
                onClick={() => handleContactClick("telegram")}
              >
                @yf16881
              </a>
              <button
                type="button"
                className="ml-2 rounded-full border border-emerald-400/40 px-2 py-0.5 text-[11px] text-emerald-200 hover:border-emerald-300 hover:text-emerald-100"
                onClick={() => handleContactCopy("telegram", "@yf16881")}
              >
                复制
              </button>
            </p>
            <p className="mt-1">
              WeChat：{" "}
              <span id="contact-wechat-handle" className="text-emerald-300">
                btc1688
              </span>
              <button
                type="button"
                className="ml-2 rounded-full border border-emerald-400/40 px-2 py-0.5 text-[11px] text-emerald-200 hover:border-emerald-300 hover:text-emerald-100"
                onClick={() => handleContactCopy("wechat", "btc1688")}
              >
                复制
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
