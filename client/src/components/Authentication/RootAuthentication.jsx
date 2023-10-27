import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
const RootAuthentication = () => {

    const user = useSelector((state) => state.root);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?._id) {
            navigate('/');
        }
    },[])
  return (
    <div>
            <Outlet/>
      
    </div>
  )
}

export default RootAuthentication
