
import ScamDatabase from "@/components/ScamDatabase";
import { useEffect } from "react";

const ScamDatabasePage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Scam Database | Scam Call Interceptor";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <ScamDatabase />
      </main>
    </div>
  );
};

export default ScamDatabasePage;
