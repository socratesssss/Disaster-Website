import React from 'react';
import cn from '../utiliti/clsx';


function Peragrap({className,children}){
  return (
    <p className={cn("text-secondary   text-xs font-normal",className)}>{children}</p>
  )
}

export default Peragrap