import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Beranda", path: "/" },
    {
      name: "Profil",
      path: "/profil",
      submenu: [
        { name: "Sejarah", path: "/profil/sejarah" },
        { name: "Organisasi", path: "/profil/organisasi" },
        { name: "Visi & Misi", path: "/profil/visi-misi" },
      ],
    },
    { name: "Layanan", path: "/layanan" },
    { name: "Program", path: "/program" },
    { name: "Berita", path: "/berita" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">B</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-foreground font-bold text-xl">BAKTI</span>
              <span className="text-muted-foreground text-xs block -mt-1">KOMDIGI</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <button
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1",
                      location.pathname.includes(item.path)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    onMouseEnter={() => setProfileOpen(true)}
                    onMouseLeave={() => setProfileOpen(false)}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                      location.pathname === item.path
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Submenu */}
                {item.submenu && (
                  <div
                    className={cn(
                      "absolute top-full left-0 mt-1 py-2 min-w-[180px] glass rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    )}
                    onMouseEnter={() => setProfileOpen(true)}
                    onMouseLeave={() => setProfileOpen(false)}
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className={cn(
                          "block px-4 py-2 text-sm transition-colors",
                          location.pathname === sub.path
                            ? "text-primary bg-primary/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        )}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/portal"
            className="hidden lg:block px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Portal Layanan
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-foreground font-medium"
                      onClick={() => setProfileOpen(!profileOpen)}
                    >
                      {item.name}
                      <ChevronDown className={cn("w-4 h-4 transition-transform", profileOpen && "rotate-180")} />
                    </button>
                    {profileOpen && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="block px-4 py-2 text-muted-foreground hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-4 py-3 text-foreground font-medium hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/portal"
              className="block mx-4 mt-4 px-5 py-3 rounded-lg bg-primary text-primary-foreground text-center font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Portal Layanan
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
