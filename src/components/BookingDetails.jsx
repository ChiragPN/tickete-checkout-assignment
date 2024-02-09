import React from 'react'
import ratingstar from '../assets/icons/ratingstar.svg';
import ticket from '../assets/icons/ticket.svg';
import calendarblank from '../assets/icons/calendarblank.svg';
import clock from '../assets/icons/clock.svg';
import users from '../assets/icons/users.svg';

function BookingDetails() {
  return (
    <div className="frame-971 p-4">
        <div className="frame-843">
            <div className="frame-761 flex justify-start items-center space-x-2">
                <img src={ratingstar} alt="Star" />
                <div className="frame-758 flex space-x-1">
                    <p>4.9</p>
                    <p>(4.5k)</p>
                </div>
                <p>•</p>
                <p>category</p>
            </div>

            <div className="title text-[#1C2024] text-lg font-semibold">
                <p>Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</p>
            </div>
        </div>

        <div className="frame-970 space-y-3">
            <div className="frame-957 flex space-x-3 mt-7">
                <img src={ticket} alt="ticket" />
                <p className='text-[#1C2024] font-medium'>ticket type - variant</p>
            </div>
            <div className="frame-961 flex space-x-3">
                <img src={calendarblank} alt="ticket" />
                <div className="frame-968 flex flex-col space-y-3">
                    <p className='text-[#1C2024] font-medium'>day, month date</p>
                    <p className='text-[#60646C]'>Duration: duration</p>
                </div>
            </div>
            <div className="frame-960 flex items-center space-x-3">
                <img src={clock} alt="ticket" />
                <div className="frame-968 flex flex-col space-y-3">
                    <p className='text-[#1C2024] font-medium'>time</p>
                    <p className='text-[#60646C]'>Operating hours: time to time</p>
                </div>
            </div>
            <div className="frame-958 flex space-x-3">
                <img src={users} alt="ticket" />
                <p className='text-[#1C2024] font-medium'>5 guests</p>
            </div>
        </div>
    </div>
  )
}

export default BookingDetails