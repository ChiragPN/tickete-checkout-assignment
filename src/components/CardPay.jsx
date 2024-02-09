import React from 'react'
import radio from '../assets/icons/radio.svg';
import card from '../assets/icons/card.svg';
import visa from '../assets/icons/visa.svg';
import mastercard from '../assets/icons/mastercard.svg';
import dinersclub from '../assets/icons/dinersclub.svg';
import greypiggy from '../assets/icons/greypiggy.svg';
import info from '../assets/icons/info.svg'
import ConfirmPayButton from '../components/ConfirmPayButton';

function CardPay() {
  return (
        <div className="payment-mode-792 mt-8 space-y-5 mb-8">
            <div className="payment-mode border-2 border-solid border-black rounded-2xl">
                <div className="frame-800 flex justify-between p-4 items-center">
                    <div className="payment-mode-799 flex items-center space-x-3">
                        <img src={card} alt="Card"/>
                        <h1 className='font-bold text-[#1C2024]'>Credit & debit card</h1>
                    </div>
                    <img src={radio} alt="Radio" />
                </div>

                <div className="logos flex space-x-2 px-4 py-2">
                    <img src={visa} alt="Visa" />
                    <img src={mastercard} alt="Mastercard" />
                    <img src={dinersclub} alt="Dinersclub" />
                </div>

                <div className="payment-mode-801 px-4 py-6 space-y-7">
                    <div className="card-name">
                        <input type="text" className='placeholder-[#7E808A] border-2 border-solid border-[#B9BBC6] outline-none rounded-2xl p-4 w-[100%]' placeholder='Name on card' required/>
                    </div>

                    <div className="card-number border-2 border-solid border-[#B9BBC6] flex justify-between items-center p-4 w-[100%] rounded-2xl">
                        <div className='flex items-center space-x-3'>
                            <img src={card} alt="card" />
                            <input type="number" className='placeholder-[#7E808A]' maxLength={16} placeholder='Card number' required/>
                        </div>
                    </div>

                    <div className="card-expiry-date">
                        <input type="date" className='placeholder-[#7E808A] border-2 border-solid border-[#B9BBC6] outline-none rounded-2xl p-4 w-[100%]' placeholder='Expiry date' required/>
                    </div>

                    <div className="card-cvv">
                        <input type="number" className='placeholder-[#7E808A] border-2 border-solid border-[#B9BBC6] outline-none rounded-2xl p-4 w-[100%]' maxLength={3} placeholder='CVV/CVC' required/>
                    </div>
                </div>

                <div className="payment-mode-803 px-4">
                    <div className="payment-mode-949 space-y-3">
                        <div className="badge text-[#E9F9EE] text-sm px-2 py-1 flex items-center justify-center space-x-2 bg-[#299764] w-fit rounded-full">
                            <img src={greypiggy} alt="piggy" />
                            <p>You save price</p>
                        </div>

                        <div className="heading-949 text-xl font-semibold">
                            <h1>Total payable: $XXX</h1>
                        </div>
                    </div>

                    <div className="link flex space-x-2 mt-4 text-[#60646C]">
                        {/* <Link></Link> */}
                        <a href='#' className='underline'>Your card will be charged in AED</a>
                        <img src={info} alt="Information" />
                    </div>
                </div>

                <ConfirmPayButton/>
            </div>
        </div>
    )
}

export default CardPay