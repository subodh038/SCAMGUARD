
import Settings from "@/components/Settings";
import { useEffect } from "react";

const SettingsPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Settings | Scam Call Interceptor";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Settings />
      </main>
    </div>
  );
};

export default SettingsPage;
