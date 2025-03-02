import React from 'react'
import { logout } from '../../store/authSlice'
import { authService } from '../../appwrite/auth'
import { useDispatch } from 'react-redux'

function Logoutbtn() {
 const dispatch = useDispatch();
 const logOutHandler = ()=>{
    authService.logout().then(()=>{
        dispatch(logout())
    }).catch((error)=>{
        console.log("Failed to logout",error);
        
    })
}
  return (
    <button  className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full' onClick={()=>{
        logOutHandler()}}>
        LogOut
    </button>

  )
}

export default Logoutbtn