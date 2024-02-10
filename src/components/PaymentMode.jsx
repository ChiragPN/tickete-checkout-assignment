import React from 'react'
import CardPay from './CardPay';
import ApplePay from './ApplePay';
import GooglePay from './GooglePay';
import TotalPayable from './TotalPayable';

function PaymentMode() {
  return (
    <>
      <div className='frame-799 px-4'>
        <div className='frame-793'>
            <div className='frame-785 mt-14'>
                <h1 className='font-semibold text-[#1C2024] text-2xl'>Select your mode of payment</h1>
                <p className='text-[#60646C] mt-4'>Payments with Tickete are secure and encrypted.</p>
            </div>
            <CardPay/>
            <ApplePay/>
            <GooglePay/>
            <div className="divider border-[1px] border-solid border-[#DDDDE3] rounded-b mt-6"></div>
        </div>
        <TotalPayable/>
      </div>
    </>
  )
}

export default PaymentMode