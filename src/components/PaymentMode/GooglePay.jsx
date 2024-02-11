import React from 'react'
import googlepay from '../../assets/icons/googlepay.svg';
import radiobtn from '../../assets/icons/radiobtn.svg';

function GooglePay() {
  return (
    <div className='payment-mode border-2 border-solid border-[#D3D4DB] rounded-2xl bg-[#F9F9FB] mb-8 p-6'>
      <div className="frame-801 flex justify-between items-center">
        <div className="frame-799 flex items-center space-x-3">
          <img src={googlepay} alt="Google Pay" />
          <p className='text-[#8B8D98] font-medium'>Coming soon</p>
        </div>
        <img src={radiobtn} alt="Radio button" />
      </div>
    </div>
  )
}

export default GooglePay