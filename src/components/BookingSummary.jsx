import React from 'react'
// import gallery from '../assets/icons/gallery.svg'
import BookingDetails from './BookingDetails';
import PaymentSummary from './PaymentSummary';

function BookingSummary() {
  return (
    <div className='frame-947 px-4'>
        <div className="frame-984 mt-12">
            <h1 className='text-[#1C2024] text-2xl font-bold'>Confirm & pay</h1>
            <div className="booking-summary border-2 border-solid border-[#DDDDE3] rounded-2xl mt-7">
                <div className="frame-973">
                    <div className="frame-969">
                        {/* <div className="gallery">
                            <img src={gallery}/>
                        </div> */}
                        <BookingDetails/>
                    </div>
                    <div className="frame-970 px-4">
                        <div className="divider border-[1px] border-dashed border-[#DDDDE3] rounded-b mt-2"></div>
                        <PaymentSummary/>
                    </div>
                </div>
                <div className="frame-959">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingSummary