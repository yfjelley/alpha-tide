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

  const handleContactSubmit = (data: ContactFormData) => {
    // 预留 onSubmit(formData) 接口，当前简单打印数据
    console.log("onSubmit hook:", data);
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
