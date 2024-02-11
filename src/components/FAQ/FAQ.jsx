import React from 'react'
import { data } from '../../data/FAQData';
import Accordian from './Accordian';
import illustration from '../../assets/icons/illustration.svg';

function FAQ() {  
  return (
    <div className='faq-section px-4'>
        <div className="divider border-[1px] border-solid border-[#DDDDE3] rounded-b mt-7 hidden md:block"></div>
        <div className="frame-781 mt-14 md:mt-20">
            <h1 className='text-[#1C2024] font-semibold text-2xl'>Frequently asked questions</h1>
            <p className='text-[#60646C] mt-4'>Here are some of our most asked questions.</p>
        </div>

        <div className='md:flex md:flex-row-reverse md:justify-between'>
            <div className="wrapper-842 mt-12">
                <div className="accordian space-y-6">
                    
                    {data.map((item) => (
                        <Accordian item={item} key={item.id}/>
                    ))}
                </div>
            </div>

            <div className="chat-846 bg-[#eeeeee] flex justify-between items-center p-6 rounded-xl mt-10 md:mt-12 md:h-[200px] md:space-x-20">
                <div className="frame-847 space-y-4">
                    <p className='text-[#1C2024] font-semibold'>Still need help? <br/> We're here for you.</p>
                    <button className='flex justify-center items-center p-4 w-fit space-x-3 bg-black text-white font-medium rounded-2xl'>
                        <h1>Chat with us</h1>
                    </button>
                </div>
                <img src={illustration}/>
            </div>
        </div>
        <div className="divider border-[1px] border-solid border-[#DDDDE3] rounded-b mt-7"></div>
    </div>
  )
}

export default FAQ