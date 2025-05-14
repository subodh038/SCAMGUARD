
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Phone, Database, BookOpen, Settings } from "lucide-react";

const navItems = [
  {
    path: "/",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    path: "/call-simulator",
    icon: Phone,
    label: "Simulator",
  },
  {
    path: "/scam-database",
    icon: Database,
    label: "Database",
  },
  {
    path: "/education-center",
    icon: BookOpen,
    label: "Education",
  },
  {
    path: "/settings",
    icon: Settings,
    label: "Settings",
  },
];

const BottomNav = () => {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur">
      <nav className="flex justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center px-3 py-1 text-xs",
                isActive 
                  ? "text-primary dark:text-primary" 
                  : "text-muted-foreground hover:text-foreground transition-colors"
              )}
            >
              <Icon className={cn("h-6 w-6 mb-1", isActive && "text-primary dark:text-primary")} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomNav;
