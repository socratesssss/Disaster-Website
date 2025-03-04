import React from 'react'
import cn from '../utiliti/clsx'

function Title({className,children}) {
  return (
   <h1 className={cn("text-[26px] text-black font-bold text-xl",className)}>{children}</h1>
  )
}

export default Title