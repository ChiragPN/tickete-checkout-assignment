import React from 'react'
import downarrow from '../assets/icons/downarrow.svg'

function AddDetails() {
  return (
    <div className='add-details'>
        <div className='heading-para mt-12'>
            <h1 className='font-semibold text-[#1C2024] text-2xl'>Additional information</h1>
            <p className='text-[#60646C] mt-4'>We need a few more details to complete your reservation.</p>
        </div>

        <form action="">
            <div className="input mt-8 space-y-5">
                <div className='flex flex-col md:grid md:grid-cols-2 md:gap-5 gap-y-5'>
                    <div className="input-label">
                        <input type="text" className='border-2 rounded-2xl p-4 w-[100%]' placeholder='Input label' required/>
                        {/* <span className='text-[#C62A2F]'>*</span> */}
                    </div>

                    <div className="select border-2 flex justify-between items-center p-4 rounded-2xl">
                        <select id="select" name="select" className='appearance-none w-[100%] outline-none text-[#60646C]' required>
                            <option value="" className='text-[]'>Select</option>
                            <option value="option 1">Option 1</option>
                            <option value="option 2">Option 2</option>
                            <option value="option 3">Option 3</option>
                            <option value="option 4">Option 4</option>
                        </select>
                        <img src={downarrow} alt="Dropdown" />
                    </div>
                </div>

                <div className="multiselect border-2 flex justify-between items-center p-4 w-[100%] rounded-2xl">
                    <select id="multiselect" name="multiselect" className='appearance-none w-[100%] outline-none text-[#60646C]' required>
                        <option value="" className='text-[]'>Multiselect</option>
                        <option value="option 1">Option 1</option>
                        <option value="option 2">Option 2</option>
                        <option value="option 3">Option 3</option>
                        <option value="option 4">Option 4</option>
                    </select>
                    <img src={downarrow} alt="Dropdown" />
                </div>
            </div>
        </form>
        <div className="border-[1px] border-solid border-[#DDDDE3] rounded-b mt-6"></div>
    </div>
  )
}

export default AddDetails