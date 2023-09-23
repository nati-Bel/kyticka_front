import {checkLoginStatus } from '../helpers/authUtils'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


export const ProtectedRoute = ({children}) =>{
    console.log()
    const navigateTo=useNavigate()
    
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
      const userIsLoggedIn = checkLoginStatus();
      setIsLoggedIn(userIsLoggedIn);
    }, []);
    
    if(!isLoggedIn){
            return navigateTo('/login')
    }
    
    return children

}