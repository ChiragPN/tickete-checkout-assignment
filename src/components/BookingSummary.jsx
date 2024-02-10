import React from 'react'
import BookingDetails from './BookingDetails';
import PaymentSummary from './PaymentSummary';
import TotalPayableSummary from './TotalPayableSummary';
import GallerySummary from './GallerySummary';
import ConfirmPayButton from './ConfirmPayButton';

function BookingSummary() {
  return (
    <div className='frame-947 px-4 md:flex md:justify-between md:mt-12'>
        <div className='mt-12 md:mt-0 md:hidden'>
            <h1 className='text-[#1C2024] text-3xl sm:text-4xl md:text-5xl font-bold'>Confirm & pay</h1>
        </div>

        <div className="frame-984 md:w-[380px]">
            <div className="booking-summary border-2 border-solid border-[#DDDDE3] rounded-2xl mt-7 md:mt-0">
                <div className="frame-973">
                    <div className="frame-969">
                        <GallerySummary/>
                        <BookingDetails/>
                    </div>
                    <div className="frame-970 px-4">
                        <div className="divider border-[1px] border-dashed border-[#DDDDE3] rounded-b mt-2"></div>
                        <PaymentSummary/>
                    </div>
                </div>
                
                <div className="frame-959">
                    <div className="divider border-[1px] border-solid border-[#DDDDE3] rounded-b mt-2"></div>
                    <TotalPayableSummary/>
                </div>

                <div className='hidden sm:block md:block px-4'>
                    {/* <Link></Link> */}
                    <p className='text-sm text-[#60646C]'>By clicking “confirm & pay”, you agree to <a href="#" className='text-[#3A5CCC]'>Tickete's general terms and conditions</a> and <a href="#" className='text-[#3A5CCC]'>cancellation policy.</a></p>
                </div>

                <div className="hidden sm:block md:block md:mb-7">
                    <ConfirmPayButton/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingSummary