import React from 'react'
import greenpiggy from '../assets/icons/greenpiggy.svg'
// import blackinfo from '../assets/icons/blackinfo.svg'

function TotalPayable() {
  return (
    <div className='frame-785 px-4'>
        <div className="frame-845 mt-14">
            <div className="frame-949 space-y-3">
                <div className="badge border-2 border-solid border-[#B4DFC4] text-sm px-3 py-1 flex items-center justify-center space-x-2 bg-[#F2FCF5] w-fit rounded-full">
                    <img src={greenpiggy} alt="piggy" />
                    <p className='font-medium text-[#299764]'>You save price</p>
                </div>

                <div className="heading-949 text-2xl font-semibold">
                    <h1>Total payable: $XXX</h1>
                </div>
            </div>

            <div className="section border-2 border-solid border-[#D3D4DB] p-4 mt-7 rounded-2xl flex">
                <div className="container flex">
                    {/* <div className="info-icon flex items-start">
                        <img src={blackinfo} alt="Info" />                    
                    </div> */}

                    <div className="information space-y-2">
                        <h1 className='font-semibold text-lg'>You will be charged in AED</h1>
                        <p className='text-[#60646C] text-lg'>The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates Dirham (AED).</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="divider border-[1px] border-solid border-[#DDDDE3] rounded-b mt-6"></div>
    </div>
  )
}

export default TotalPayable