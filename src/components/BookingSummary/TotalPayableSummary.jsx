import React from 'react'
import greenpiggy from '../../assets/icons/greenpiggy.svg';
import info from '../../assets/icons/info.svg'

function TotalPayableSummary() {
  return (
    <div className='frame-974 px-4'>
        <div className="frame-804 mt-4 space-y-3">
            <div className="frame-956 flex justify-between text-2xl font-semibold">
                <h1>Total payable</h1>
                <h1>$XXX</h1>
            </div>

            <div className="badge border-2 border-solid border-[#B4DFC4] px-2 py-1 flex items-center justify-start space-x-2 bg-[#E9F9EE] w-fit rounded-full">
                <img src={greenpiggy} alt="piggy" />
                <p className='font-medium text-[#299764]'>You save &lt;price&gt;</p>
            </div>
        </div>

        <div className="link flex space-x-2 mt-6 mb-10 text-[#60646C] font-medium">
            {/* <Link></Link> */}
            <a href='#' className='underline'>Your card will be charged in AED</a>
            <img src={info} alt="Information" />
        </div>
    </div>
  )
}

export default TotalPayableSummary