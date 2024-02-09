import React from 'react'
import close from '../assets/icons/close.svg';

function FreeCancellation() {
  return (
    <div className='container border-2 border-solid border-[#D3D4DB] rounded-2xl p-4'>
        <div className="content">
            <div className="wrapper flex justify-between items-center">
                <h1 className='text-[#1C2024] text-lg font-semibold'>Free cancellation</h1>
                <img src={close} alt="close" />
            </div>
        </div>
        <div>
            <p className='text-[#60646C] text-base'>Tickets can be cancelled by 13th December, 2022.</p>
        </div>
    </div>
  )
}

export default FreeCancellation