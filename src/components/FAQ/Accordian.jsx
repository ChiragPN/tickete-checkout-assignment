import React, { useState } from 'react'
import plus from '../../assets/icons/plus.svg';
import multiply from '../../assets/icons/multiply.svg';

function Accordian({item}) {

    const [selected, setSelected] = useState(false);

    const toggle = () => {
      setSelected(!selected)
    }

    return (
        <div className='md:min-w-[700px]'>
            <div className="item border-2 border-solid border-[#B9BBC6] rounded-2xl p-4 space-y-4">
                <div className="title flex items-center space-x-5 text-[#1C2024] text-lg font-semibold cursor-pointer" onClick={() => toggle()}>
                    {selected ? <img src={multiply} alt="*" /> : <img src={plus} alt="+" />}
                    <h1>{item.question}</h1>
                </div>
                {selected && (<div className="content pl-10 text-[#60646C]">
                    <p>{item.answer}</p>
                </div>)
                }
            </div>
        </div>
    )
}

export default Accordian