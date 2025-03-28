import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({children}) => {
  const {user} = useAuth();
  const navigate = useNavigate();
  if(!user) {
    navigate('/login', {replace: true});
    return null;
  }
  return (
    {children}
  )
}

export default ProtectedRoute