export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="border-t border-slate-800 bg-slate-950/80 py-6 text-xs text-slate-400"
    >
      <div className="section-container flex flex-col items-center justify-between gap-3 md:flex-row">
        <p>© {year} AlphaTide Technologies. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            id="footer-twitter"
            href="#"
            className="hover:text-emerald-300"
          >
            Twitter / X
          </a>
          <a
            id="footer-telegram"
            href="#"
            className="hover:text-emerald-300"
          >
            Telegram
          </a>
          <a
            id="footer-github"
            href="#"
            className="hover:text-emerald-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

