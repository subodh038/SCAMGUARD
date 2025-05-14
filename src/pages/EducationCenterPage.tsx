
import EducationCenter from "@/components/EducationCenter";
import { useEffect } from "react";

const EducationCenterPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "Education Center | Scam Call Interceptor";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <EducationCenter />
      </main>
    </div>
  );
};

export default EducationCenterPage;
