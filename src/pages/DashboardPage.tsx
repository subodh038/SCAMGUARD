
import Dashboard from "@/components/Dashboard";
import { useEffect } from "react";

const DashboardPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Dashboard | Scam Call Interceptor";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Dashboard />
      </main>
    </div>
  );
};

export default DashboardPage;
