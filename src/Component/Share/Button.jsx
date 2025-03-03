import React from 'react';
import cn from '../utiliti/clsx';

function Button({className,children}) {
  return (
    <div>   
        <button
        className={cn(" bg-primary  text-secondary text-xs py-3 px-[10px]  border-[1px] rounded-[6px] font-normal border-[#E4E4E7] ", className)}
        >
        {children}
        </button>
    </div>
  )
}

export default Button;
