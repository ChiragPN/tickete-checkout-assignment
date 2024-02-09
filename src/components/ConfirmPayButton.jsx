import React from 'react'
import buttonlock from '../assets/icons/buttonlock.svg';

function ConfirmPayButton() {
  return (
    <div className="payment-mode-803 px-4 mt-6">
      {/* <Link></Link> */}
      <p className='text-sm text-[#60646C]'>By clicking “confirm & pay”, you agree to <a href="#" className='text-[#3A5CCC]'>Tickete's general terms and conditions</a> and <a href="#" className='text-[#3A5CCC]'>cancellation policy.</a></p>
      <div className='button flex justify-center items-center my-6 rounded-2xl bg-black'>
        <button className='flex p-4 w-fit space-x-3 text-white font-medium'>
          <img src={buttonlock} alt="Button Lock" />
          <h1>Confirm & pay</h1>
        </button>
      </div>
    </div>
  )
}

export default ConfirmPayButton