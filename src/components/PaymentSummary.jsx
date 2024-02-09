import React from 'react'
import plus from '../assets/icons/plus.svg';

function PaymentSummary() {
  return (
    <div className="frame-972 my-6 text-[#60646C] flex justify-between">
        <a href="#" className='underline'>View payment summary</a>
        <button>
            <img src={plus} alt="+" />
        </button>
    </div>
  )
}

export default PaymentSummary