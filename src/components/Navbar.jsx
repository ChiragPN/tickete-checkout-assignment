import React from 'react'
import logo from '../assets/icons/logo.svg';
import lock from '../assets/icons/lock.svg';
import help from '../assets/icons/help.svg';
import arrow from '../assets/icons/arrow.svg';

function Navbar() {
  return (
    <div>
        <header className='bg-[#F9F9FB40] py-4'>
            <div className='header flex justify-between md:justify-around md:space-x-[350px] items-center w-[100%]'>
                <img src={logo} alt="tickete" className='hidden md:flex'/>
                <img src={arrow} alt="arrow" className='flex md:hidden px-4'/>
                <div className='h-[22px] w-[73px] flex justify-center items-center space-x-1'>
                    <img src={lock} alt="checkout" className='text-[#7E808A]'/>
                    <p className='text-[#60646C] font-medium'>Checkout</p>
                </div>
                <div className='h-[22px] w-[73px] flex justify-around items-center md:space-x-1 text-[#1C2024]'>
                    <img src={help} alt="help" />
                    <p className='hidden md:flex'>Help</p>
                </div>
            </div>
        </header>

        <nav className='header-timer w-[100%] h-[40px] bg-black py-2'>
            <div className='nav text-[#FCFCFD] flex justify-center items-center'>
                <p>Holding your tickets for 30:00</p>
            </div>
        </nav>
    </div>
  )
}

export default Navbar