import {checkLoginStatus } from '../helpers/authUtils'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'


export const ProtectedRoute = ({children}) =>{
    console.log()
    const navigateTo=useNavigate()
    
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    useEffect(() => {
      // Verificar el estado de inicio de sesión cuando el componente se monta
      const userIsLoggedIn = checkLoginStatus();
      setIsLoggedIn(userIsLoggedIn);
    }, []);
    

    if(!isLoggedIn){
            return navigateTo('/login')
    }
    
    return children

}