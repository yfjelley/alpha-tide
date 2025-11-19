import { useState } from "react";

type HeaderProps = {
  onNavClick: (sectionId: string) => void;
  onConsultClick: () => void;
};

const navItems: { id: string; label: string }[] = [
  { id: "services", label: "Services" },
  { id: "products", label: "Products" },
  { id: "why-us", label: "Why Us" },
  { id: "process", label: "Process" },
  { id: "cases", label: "Cases" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" }
];

export function Header({ onNavClick, onConsultClick }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const handleNav = (id: string) => {
    onNavClick(id);
    setOpen(false);
  };

  return (
    <header
      id="header"
      className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur"
    >
      <div className="section-container flex h-16 items-center justify-between">
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => handleNav("hero")}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400 text-slate-900 text-lg font-black">
            A
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide text-slate-50">
              AlphaTide Technologies
            </div>
            <div className="text-xs text-slate-400">
              AI + Quant Trading Systems
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              className="text-sm text-slate-300 transition hover:text-emerald-400"
              onClick={() => handleNav(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            id="nav-consult-button"
            className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-900 shadow-accent-soft transition hover:bg-emerald-300"
            onClick={onConsultClick}
          >
            预约咨询
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          id="nav-mobile-toggle"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:bg-slate-800 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-slate-200" />
            <span className="block h-0.5 w-6 bg-slate-200" />
          </div>
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950/95 md:hidden">
          <nav className="section-container flex flex-col gap-2 py-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-mobile-${item.id}`}
                className="w-full rounded-md px-2 py-2 text-left text-sm text-slate-200 hover:bg-slate-800/80"
                onClick={() => handleNav(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button
              id="nav-mobile-consult-button"
              className="mt-2 w-full rounded-full bg-emerald-400 px-4 py-2 text-sm font-medium text-slate-900 shadow-accent-soft transition hover:bg-emerald-300"
              onClick={() => {
                onConsultClick();
                setOpen(false);
              }}
            >
              预约咨询
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;

