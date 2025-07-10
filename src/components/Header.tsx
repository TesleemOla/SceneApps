import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 px-4 lg:px-8 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
           <img src="/LogoSVG.svg" alt="SceneApps Logo" className="w-8 h-8" />
          
          <span className="text-xl font-semibold text-gray-900">SceneApps</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-primary-green transition-colors">
            Features
          </a>
          <a href="#about" className="text-gray-600 hover:text-primary-green transition-colors">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-primary-green transition-colors">
            Contact
          </a>
        </nav>
        
        <button 
          className="md:hidden text-gray-600 z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t md:hidden">
            <nav className="flex flex-col py-4 px-4 space-y-4">
              <a 
                href="#features" 
                className="text-gray-600 hover:text-primary-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#about" 
                className="text-gray-600 hover:text-primary-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-primary-green transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
