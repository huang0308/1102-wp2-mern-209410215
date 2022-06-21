import { useAppContext } from '../context/appContext_15';
import { Navigate } from 'react-router-dom';

const ProtectedRoute_15 = ({ children }) => {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to='/landing' />;
  }
  return children;
};

export default ProtectedRoute_15;
