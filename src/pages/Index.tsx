
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the dashboard page
    navigate("/");
  }, [navigate]);

  return null; // This component doesn't render anything, just redirects
};

export default Index;
