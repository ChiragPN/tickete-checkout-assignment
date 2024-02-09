import React from 'react'
import globe from '../assets/icons/globe.svg';
import downarrow from '../assets/icons/downarrow.svg';
import AddDetails from './AddDetails';

function DetailsForm() {
  return (
    <div className='main-div px-4'>
        <div>
            <div className='heading-para mt-12'>
                <h1 className='font-semibold text-[#1C2024] text-2xl'>Enter your details</h1>
                <p className='text-[#60646C] mt-4'>We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
            </div>
            
            <form action="">
                <div className="input mt-8 space-y-5">
                    <div className="fullname">
                        <input type="text" className='border-2 rounded-2xl p-4 w-[100%]' placeholder='Full Name' required/>
                    </div>

                    <div className="code border-2 flex justify-between items-center p-4 w-[100%] rounded-2xl">
                        <div className='flex items-center space-x-3'>
                            <img src={globe} alt="Country code" />
                            <select id="country-code" name="country-code" className='appearance-none' required>
                                <option value="" className='text-[#60646C]'>Country code</option>
                                <option value="india">India</option>
                                <option value="usa">USA</option>
                                <option value="germany">Germany</option>
                                <option value="japan">Japan</option>
                            </select>
                        </div>
                        <img src={downarrow} alt="Dropdown" />
                    </div>

                    <div className="mobile-number">
                        <input type="tel" maxLength={10} className='border-2 rounded-2xl p-4 w-[100%]' placeholder='Phone Number' required/>
                    </div>

                    <div className="email">
                        <input type="email" className='border-2 rounded-2xl p-4 w-[100%]' placeholder='Email' required/>
                    </div>

                    <div className="confirm-email">
                        <input type="email" className='border-2 rounded-2xl p-4 w-[100%]' placeholder='Confirm email' required/>
                    </div>
                </div>
            </form>
            <div className="divider border-[1px] border-solid border-[#DDDDE3] rounded-b mt-6"></div>
        </div>
        <AddDetails/>
    </div>
  )
}

export default DetailsForm