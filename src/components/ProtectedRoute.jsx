import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useLoading } from "../hooks/useLoading";
import AILoader from "./AILoader";
const ProtectedRoute = ({children}) => {
  const {user} = useAuth();
  const navigate = useNavigate();
  const { loading, stopLoading } = useLoading(true);

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
    stopLoading();
  },[user, navigate, stopLoading]);
  return loading ? <AILoader /> : children;
}

export default ProtectedRoute