import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProviders';
import Loader from '../components/Loader/Loader';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    if (loading) {
        return <Loader/>;
    }
    if (user) {
        return children;
    } 
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have to log in first to view details',
            footer: '<a href="">Why do I have this issue?</a>',
        });
    }

    return  <Navigate to='/login' state={{ from: location }} replace={true}></Navigate>
    
};

export default PrivateRoutes;
