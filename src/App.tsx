import emailjs from "@emailjs/browser";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Trust from "./components/Trust";
import Process from "./components/Process";
import Cases from "./components/Cases";
import Pricing from "./components/Pricing";
import Contact, { ContactFormData } from "./components/Contact";
import Footer from "./components/Footer";

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const headerOffset = 80;
  const rect = element.getBoundingClientRect();
  const offsetTop = rect.top + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
}

function App() {
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  const handleContactSubmit = async (data: ContactFormData) => {
    console.log("onSubmit hook:", data);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_469m70a";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn(
        "EmailJS 配置缺失，请在环境变量中设置 VITE_EMAILJS_SERVICE_ID / VITE_EMAILJS_TEMPLATE_ID / VITE_EMAILJS_PUBLIC_KEY。"
      );
      return;
    }

    const templateParams = {
      name: data.name,
      email: data.email,
      telegram: data.telegram || "N/A",
      experience: data.experience || "N/A",
      coreProblem: data.coreProblem || "N/A",
      capital: data.capital || "N/A",
      message: data.message || "N/A",
      // 一些模板中使用 title 字段，这里用用户的需求摘要填充
      title: data.coreProblem || "AlphaTide 联系表单"
    };

    await emailjs.send(serviceId, templateId, templateParams, {
      publicKey
    });
  };

  return (
    <div className="min-h-screen bg-[color:var(--color-bg)] text-slate-50">
      <Header
        onNavClick={handleNavClick}
        onConsultClick={() => handleNavClick("contact")}
      />

      <main className="space-y-6 pt-4 md:space-y-10 md:pt-8">
        <Hero
          onPrimaryClick={() => handleNavClick("contact")}
          onSecondaryClick={() => handleNavClick("services")}
        />
        <Services />
        <Products />
        <WhyUs />
        <Trust />
        <Process />
        <Cases />
        <Pricing />
        <Contact onSubmit={handleContactSubmit} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
