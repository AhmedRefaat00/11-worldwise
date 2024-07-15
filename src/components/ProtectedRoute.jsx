import { useEffect } from "react"
import { useAuth } from "../contexts/AuthProvider"
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ children }) {
    const navigate = useNavigate();

    const { isAuthenticated } = useAuth()
    useEffect(() => {
        if (!isAuthenticated)
            navigate('/')
    }, [isAuthenticated, navigate])
    return isAuthenticated ? children : null;

}

export default ProtectedRoute
