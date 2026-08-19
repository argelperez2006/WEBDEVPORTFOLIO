import { useState } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const getLinkClass = (isActive: boolean) => {
    if (isActive) {
      return "text-yellow-400 font-semibold drop-shadow-[0_0_6px_rgba(250,204,21,0.5)]";
    } else {
      return "text-neutral-400 hover:text-yellow-300";
    }
  };

  return (
    <header className="bg-neutral-950/90 border-b border-yellow-500/20 sticky top-0 z-50 backdrop-blur-md">
      {/* Mobile Backdrop Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleMenu}
      />

      {/* Aligned Container matching max-w-6xl from Banner */}
      <div className="max-w-6xl mx-auto px-4 relative z-50">
        <div className="flex items-center justify-between h-14">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <NavLink
              to="/"
              className="text-base font-extrabold text-white tracking-wider flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_6px_#facc15]" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500">
                MY PORTFOLIO
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn("text-xs font-mono tracking-wide transition-all duration-300", getLinkClass(isActive))
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Fitted Contact Button */}
            <NavLink to="/contact">
              <Button className="h-8 text-xs px-4 bg-yellow-400 text-black font-semibold hover:bg-yellow-300 hover:shadow-[0_0_12px_rgba(250,204,21,0.5)] border border-yellow-300 transition-all duration-300">
                Contact
              </Button>
            </NavLink>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-1.5 rounded-md text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 border border-yellow-400/30 focus:outline-none transition-colors"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      <div
        className={cn(
          "md:hidden border-t border-yellow-500/20 bg-neutral-950/95 backdrop-blur-lg transition-all duration-300 ease-in-out grid overflow-hidden absolute top-14 left-0 right-0 border-b border-yellow-500/20 shadow-2xl z-50",
          isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 pt-2 pb-4 space-y-2 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn("text-xs font-mono py-1.5 tracking-wider transition-colors", getLinkClass(isActive))
                }
                onClick={toggleMenu}
              >
                {item.label}
              </NavLink>
            ))}
            
            <div className="pt-2 border-t border-yellow-500/20">
              <NavLink to="/contact" onClick={toggleMenu} className="inline-block w-full">
                <Button className="w-full h-8 text-xs bg-yellow-400 text-black font-semibold hover:bg-yellow-300 hover:shadow-[0_0_12px_rgba(250,204,21,0.5)] border border-yellow-300 transition-all">
                  Contact
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}