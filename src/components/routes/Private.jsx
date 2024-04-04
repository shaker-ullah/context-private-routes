import PropTypes from 'prop-types'
import { AuthContext } from '../../Providers/AUthProvider';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if(loading){
       return <p>Loading ....</p>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};


Private.propTypes = {
    children: PropTypes.node
}

export default Private;