import React from 'react'
import p1 from '../../assets/p1.png'
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import Nbar from '../../Components/Nbar'
import Footer from '../../Components/Footer/Footer'

export default function Login() {
  return (
    <div>
      <Nbar/>
    <div className='bg-pagescolor flex items-center flex-col md:flex-row justify-around'>
      <div className='flex flex-col justify-center'>
        <h1 className='text-3xl font-medium'>Login to Niwali</h1>
        <h2 className='text-xl pb-5 tp-3'>Enter Your Details Below </h2>
      <form action="" className='flex flex-col'>
      <input className="w-full px-3 py-2 my-2 border border-gray-300 rounded" type="email" placeholder='Email'/>
      <input className="w-full px-3 py-2 my-2 border border-gray-300 rounded" type="password" placeholder='Password' />
      </form>
      <div className='flex my-2 justify-between items-center'>
      <Link className='bg-green-500 py-2 px-5 w-20'>Login</Link>
        <Link to="">Forget password ?</Link>
      </div>
      </div>
      <div className='bg-bannerdivcol hidden md:flex flex-col justify-center items-center w-[45rem] h-[45rem] my-4 rounded-md'>
            <img src={logo} alt="" />
          <img src={p1} alt="" className='w-[43rem] h-screen mt-8'/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}
