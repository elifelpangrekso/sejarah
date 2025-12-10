import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { History, Building2, Target } from "lucide-react";

const ProfileSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Sejarah", path: "/profil/sejarah", icon: History },
    { name: "Organisasi Bakti Komdigi", path: "/profil/organisasi", icon: Building2 },
    { name: "Visi & Misi", path: "/profil/visi-misi", icon: Target },
  ];

  return (
    <aside className="w-full lg:w-72 flex-shrink-0">
      <div className="glass rounded-xl p-2 sticky top-24">
        <div className="px-4 py-3 border-b border-border mb-2">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Profil</h3>
        </div>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
