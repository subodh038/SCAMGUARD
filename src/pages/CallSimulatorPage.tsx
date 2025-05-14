
import CallSimulator from "@/components/CallSimulator";
import { useEffect } from "react";

const CallSimulatorPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Call Simulator | Scam Call Interceptor";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <CallSimulator />
      </main>
    </div>
  );
};

export default CallSimulatorPage;
