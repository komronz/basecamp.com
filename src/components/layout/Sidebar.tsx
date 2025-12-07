import { NavLink, useLocation } from "react-router-dom";
import { 
  Mountain, 
  Users, 
  Shirt, 
  Backpack, 
  Ruler, 
  Shield, 
  Lightbulb, 
  HelpCircle, 
  Mail,
  Home,
  Menu,
  X,
  ShoppingCart
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useCart } from "@/hooks/use-cart";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About Us", icon: Mountain },
  { to: "/team", label: "Our Team", icon: Users },
  { to: "/clothing", label: "Clothing", icon: Shirt },
  { to: "/equipment", label: "Equipment", icon: Backpack },
  { to: "/size-guide", label: "Size Guide", icon: Ruler },
  { to: "/safety", label: "Safety Information", icon: Shield },
  { to: "/tips", label: "Outdoor Tips & Tricks", icon: Lightbulb },
  { to: "/faq", label: "FAQ", icon: HelpCircle },
  { to: "/contact", label: "Contact Us", icon: Mail },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { totalItems, setIsOpen: setCartOpen } = useCart();

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-sidebar text-sidebar-foreground lg:hidden shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Cart button */}
      <button
        onClick={() => setCartOpen(true)}
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-primary text-primary-foreground shadow-lg flex items-center gap-2"
      >
        <ShoppingCart size={20} />
        {totalItems > 0 && (
          <span className="min-w-[20px] h-5 rounded-full bg-background text-foreground text-xs font-bold flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-64 bg-sidebar z-40 transform transition-transform duration-300 ease-out flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <NavLink to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 rounded-lg bg-sidebar-primary flex items-center justify-center">
              <Mountain className="w-6 h-6 text-sidebar-primary-foreground" />
            </div>
            <div>
              <h1 className="font-display font-bold text-lg text-sidebar-foreground">Basecamp</h1>
              <p className="text-xs text-sidebar-foreground/60">Hiking Partner</p>
            </div>
          </NavLink>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "nav-link",
                      isActive && "active"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <p className="text-xs text-sidebar-foreground/50 text-center">
            © 2024 Basecamp
          </p>
        </div>
      </aside>
    </>
  );
}
