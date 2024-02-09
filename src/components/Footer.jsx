import React from 'react'
import logo from '../assets/icons/logo.svg';

function Footer() {
  return (
    <div className='footer bg-black w-[100%] h-[350px] px-4 mt-14'>
        <footer className='main-footer pt-24 pb-8'>
            <img src={logo} alt="tickete" className='invert'/>
            <div className="divider border-[1px] border-solid border-[#DDDDE3] rounded-b mt-10"></div>

            <div className="frame-779 mt-10">
              <div className="frame-750 space-y-2">
                <ul className='flex flex-wrap justify-between items-center'>
                  <li className='text-[#ADB1B8] text-sm font-semibold'><a href="">Privacy policy</a></li>
                  <li className='text-[#7D828A]'>•</li>
                  <li className='text-[#ADB1B8] text-sm font-semibold'><a href="">Terms of usage</a></li>
                  <li className='text-[#7D828A]'>•</li>
                  <li className='text-[#ADB1B8] text-sm font-semibold'><a href="">Cancellation policy</a></li>
                  <li className='text-[#7D828A]'>•</li>
                  <li className='text-[#ADB1B8] text-sm font-semibold'><a href="">Site map</a></li>
                </ul>
              </div>

              <div className="message-text text-[#7D828A] mt-6">
                <p>Made with ❤️</p>
              </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer