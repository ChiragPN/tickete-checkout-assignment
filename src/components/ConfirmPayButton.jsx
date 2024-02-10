import React from 'react'
import buttonlock from '../assets/icons/buttonlock.svg';

function ConfirmPayButton() {
  return (
    <div className="payment-mode-803 px-4 mt-5">
      <div className='button flex justify-center items-center mb-4 rounded-2xl bg-black'>
        <button className='flex justify-center items-center p-4 w-[100%] space-x-3 text-white font-medium'>
          <img src={buttonlock} alt="Button Lock" />
          <h1>Confirm & pay</h1>
        </button>
      </div>
    </div>
  )
}

export default ConfirmPayButton