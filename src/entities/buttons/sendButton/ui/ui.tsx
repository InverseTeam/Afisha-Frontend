'use client'
import send from '../../../../../public/images/send.svg'

// TODO: rewrite styles for button send
export const SendButton = () => {
    return (
        <button  className='w-14 h-14 bg-green bg-no-repeat bg-center rounded-2xl' style={{backgroundImage:`url(${send.src})`}}>
            
        </button>
    )
}