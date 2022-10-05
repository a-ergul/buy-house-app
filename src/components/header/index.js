import React from 'react'

import Logo from '../../assets/logo.gif'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className=' mb-12 border-b border-grey'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link to='/'>
                <img  src={Logo} width="100"/>
            </Link>
           
            <div className='flex items-center gap-6'>
                <Link className='hover:text-green-800 transition' to="/addproperty">Add Property</Link>
                <Link className='hover:text-green-800 transition'>
                    Log In
                </Link>
                <Link className="bg-green-700 text-white px-4 py-3 rounded-lg transition">
                    Sign Up
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header