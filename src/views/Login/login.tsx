import Link from 'next/link'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import ApiCall from 'services/ApiCall'
import "react-toastify/dist/ReactToastify.css"

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    try {
      await ApiCall.login({ username, password })

      setLoading(false)
    } catch (error: any) {      
      setLoading(false)
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className='flex justify-center items-center min-h-screen'>
        <div className='border w-[500px] h-full p-16 rounded-xl flex flex-col items-center'>
          <img src='/fav.png' alt='logo' className='w-[64px]' />
          <input type="text" name="username" placeholder='username' autoComplete='false' value={username} onChange={(e) => setUsername(e.target.value)} className='focus:outline-none border-2 rounded-md w-full py-3 px-4 my-2' />
          <input type="password" name="password" placeholder='password' autoComplete='false' value={password} onChange={(e) => setPassword(e.target.value)} className='focus:outline-none border-2 rounded-md w-full py-3 px-4 my-2' />
          <button type="button" onClick={() => handleLogin()} disabled={loading} className='border w-full p-3 mt-6 rounded-lg bg-indigo-600 text-white hover:bg-opacity-80 font-semibold disabled:bg-opacity-80'>Login</button>
          <a href="/forgot-password" className='mr-auto mt-1 text-gray-500'>Forgot password?</a>
          <div className="flex w-full gap-2 my-3">
            <hr className='my-auto w-full' />
            <span>or</span>
            <hr className='my-auto w-full' />
          </div>
          <Link href={'/register'} className='border border-indigo-600 w-full p-3 rounded-lg bg-white text-indigo-600 hover:shadow-inner font-semibold text-center'>Register</Link>
        </div>
      </div>
    </>
  )
}

export default Login