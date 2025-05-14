
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Phone, Database, Settings } from "lucide-react";

const NavLink = ({
  to,
  children,
  icon: Icon,
}: {
  to: string;
  children: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <Link
    to={to}
    className="group flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
  >
    <Icon className="h-4 w-4" />
    <span>{children}</span>
  </Link>
);

const MainNav = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem className="mr-1">
          <NavLink to="/" icon={LayoutDashboard}>Dashboard</NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="mr-1">
          <NavLink to="/call-simulator" icon={Phone}>Call Simulator</NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="mr-1">
          <NavLink to="/scam-database" icon={Database}>Scam Database</NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="mr-1">
          <NavigationMenuTrigger>More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4">
              <li>
                <NavLink to="/education-center" icon={Database}>Education Center</NavLink>
              </li>
              <li>
                <NavLink to="/settings" icon={Settings}>Settings</NavLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNav;
