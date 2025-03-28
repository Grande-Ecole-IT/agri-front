import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useLoading } from "../hooks/useLoading";
import AILoader from "./AILoader";

const RedirectConnected = ({children}) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { loading } = useLoading(true);

    useEffect(() => {
        if (user) {
          navigate("/dashboard", { replace: true });
        }
      }, [user, navigate]);

  return loading ? <AILoader /> : children;
}

export default RedirectConnected