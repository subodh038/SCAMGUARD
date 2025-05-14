
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, Bell, User } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="flex items-center mr-4">
          <div className="flex items-center gap-1 font-bold text-xl">
            <span className="text-app-blue dark:text-app-blue-light">Scam</span>
            <span className="dark:text-white">Guard</span>
          </div>
        </div>
        
        <div className="flex-1 ml-auto flex items-center space-x-4">
          <div className="ml-auto flex items-center space-x-4">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-background pl-8 md:w-[200px] lg:w-[250px] border-border"
              />
            </div>
            
            <ThemeToggle />
            
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-secondary/80"
            >
              <Bell className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-secondary/80"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
