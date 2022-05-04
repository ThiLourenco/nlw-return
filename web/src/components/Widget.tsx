import { ChatTeardropDots} from 'phosphor-react';
import { useState } from 'react';


export function Widget() {
  const [] = useState()

  return (
   <div className='absolute bottom-4 right-5'>
     <p>Hello Word!</p>

      <button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center'>
      <ChatTeardropDots className='w-6 h-6'/>

      <span className='max-w-0 overflow-hidden group-hover; max-w-xs transition-all duration-500 group'>
        <span>Feedback</span> 
      </span>
    </button>
   </div>
  )
}

