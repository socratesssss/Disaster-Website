import React from 'react';
import cn from '../utiliti/clsx';

function Button({className,children,onClick}) {
  return (
    <div>   
        <button
        className={cn(" bg-primary cursor-pointer hover:bg-accent justify-center items-center flex hover:text-white  text-secondary text-[9px]  md:text-xs py-1 sm:py-1.5 sm:px-2.5 md:py-2 md:px-3  px-1 lg:py-3 lg:px-[10px]  border-[1px] rounded-[6px] font-normal border-[#E4E4E7] ", className)}
        onClick={onClick}
        >
        {children}
        </button>
    </div>
  )
}

export default Button;
