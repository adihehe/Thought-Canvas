import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { authService } from './appwrite/auth'
import { login,logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'
function App() {
  // const [count, setCount] = useState(0)
     const [loading,setLoading] = useState(false)
     const dispatch = useDispatch()
     useEffect(()=>{
      authService.getCurrentUser().then((userData) => {
        if (userData) {
          dispatch(login({userData}))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
    },[])

    return !loading ? (
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header />
          <main>
          <Outlet/>
          </main>
          <Footer />
        </div>
      </div>
    ) : (<>
    <p>null</p>
    </>)
  
}

export default App
