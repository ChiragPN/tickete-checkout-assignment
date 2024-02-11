import React from 'react'
import greenpiggy from '../../assets/icons/greenpiggy.svg'

function TotalPayable() {
  return (
    <div className='frame-785'>
        <div className="frame-845 mt-14">
            <div className="frame-949 space-y-4">
                <div className="badge md:hidden border-2 border-solid border-[#B4DFC4] text-sm px-3 py-1 flex items-center justify-center space-x-2 bg-[#F2FCF5] w-fit rounded-full">
                    <img src={greenpiggy} alt="piggy" />
                    <p className='font-medium text-[#299764]'>You save &lt;price&gt;</p>
                </div>

                <div className="heading-949 text-2xl font-semibold">
                    <h1>Total payable: $XXX</h1>
                </div>
            </div>

            <div className="section border-2 border-solid border-[#D3D4DB] p-4 mt-7 md:mt-5 rounded-2xl flex">
                <div className="container flex">
                    <div className="information space-y-2">
                        <h1 className='font-semibold text-lg'>You will be charged in AED</h1>
                        <p className='text-[#60646C] text-lg md:text-base'>The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates Dirham (AED).</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="divider border-[1px] border-solid md:hidden border-[#DDDDE3] rounded-b mt-7"></div>
    </div>
  )
}

export default TotalPayable