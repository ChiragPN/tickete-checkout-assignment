import React from 'react'
import logo from '../assets/icons/logo.svg';

function Footer() {
  return (
    <div className='footer bg-black w-[100%] h-[350px] md:h-[265px] px-4 md:px-0 mt-16'>
        <footer className='main-footer pt-24 pb-8 md:pb-4'>
            <img src={logo} alt="tickete" className='invert md:px-12'/>
            <div className="divider border-[1px] border-solid border-[#DDDDE3] rounded-b mt-10"></div>

            <div className="frame-779 mt-10">
              <div className='flex flex-col-reverse md:flex-row md:space-x-2 md:px-12'>
                <div className="message-text text-[#7D828A] mt-6 md:mt-0">
                  <p>Made with ❤️</p>
                </div>

                <div className="frame-750">
                  <ul className='flex flex-wrap justify-start items-center'>
                    <li className='text-[#ADB1B8] text-sm font-semibold mr-2'><a href="">Privacy policy</a></li>
                    <li className='text-[#7D828A] mr-2'>•</li>
                    <li className='text-[#ADB1B8] text-sm font-semibold mr-2'><a href="">Terms of usage</a></li>
                    <li className='text-[#7D828A] mr-2'>•</li>
                    <li className='text-[#ADB1B8] text-sm font-semibold mr-2'><a href="">Cancellation policy</a></li>
                    <li className='text-[#7D828A] mr-2'>•</li>
                    <li className='text-[#ADB1B8] text-sm font-semibold'><a href="">Site map</a></li>
                  </ul>
                </div>

              </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer