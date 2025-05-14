
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t mt-12">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-5 w-5 text-app-blue" />
              <span className="text-lg font-bold">ScamGuard</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Protecting you from scam calls with AI and community intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-sm">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">App</h4>
              <div className="flex flex-col gap-2">
                <a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a>
                <a href="#call-simulator" className="text-muted-foreground hover:text-foreground transition-colors">Call Simulator</a>
                <a href="#scam-database" className="text-muted-foreground hover:text-foreground transition-colors">Scam Database</a>
                <a href="#education" className="text-muted-foreground hover:text-foreground transition-colors">Education</a>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold">Legal</h4>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
              <h4 className="font-semibold">Connect</h4>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Report a Bug</a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Feedback</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ScamGuard AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
