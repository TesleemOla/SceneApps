import { Mail } from "lucide-react";
import { Link } from "wouter";


export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12 mb-20 items-start">
          {/* Company Info */}
          <div className="space-y-6 lg:col-span-6" data-testid="footer-company">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity w-fit no-default-hover-elevate">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-transparent shrink-0">
                <img 
                  src="/favicon.png" 
                  alt="SceneApps Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 leading-none" data-testid="text-company-logo">SceneApps</span>
            </Link>
            <p className="text-base text-slate-600 leading-relaxed max-w-sm font-medium">
              A Delaware C-Corp with operations based in Nigeria. Redefining how humans connect, express, and understand each other through authentic emotional intelligence.
            </p>
          </div>

          {/* Privacy & Terms */}
          <div data-testid="footer-links" className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-slate-400 mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-[15px] font-semibold text-slate-600 hover:text-[hsl(var(--vibrant))] transition-colors" data-testid="link-privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[15px] font-semibold text-slate-600 hover:text-[hsl(var(--vibrant))] transition-colors" data-testid="link-terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/child-safety" className="text-[15px] font-semibold text-slate-600 hover:text-[hsl(var(--vibrant))] transition-colors" data-testid="link-child-safety">
                  Child Safety Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-testid="footer-contact" className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-slate-400 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3" data-testid="text-email">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href="mailto:contact@sceneapps.com" className="text-[15px] font-semibold text-slate-600 hover:text-[hsl(var(--vibrant))] transition-colors">
                  contact@sceneapps.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 font-medium whitespace-nowrap" data-testid="text-copyright">
              © {currentYear} SceneApps Incorporated. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
